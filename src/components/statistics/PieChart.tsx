import { defineComponent, onMounted, PropType, ref } from 'vue';
import styles from './PieChart.module.scss';
import * as echarts from 'echarts';
export const PieChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refDiv2 = ref<HTMLDivElement>()
    onMounted(() => {
      if (refDiv2.value === undefined) { return }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv2.value);
      // 绘制图表
      const option = {
        grid: [
          { left: 0, top: 0, right: 0, bottom: 20 }
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
      myChart.setOption(option);
    })
    return () => (
      <div ref={refDiv2} class={styles.wrapper}></div>
    )
  }
})