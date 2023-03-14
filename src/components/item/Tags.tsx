import { defineComponent, onMounted, PropType, ref } from 'vue';
import styles from './Tags.module.scss';
import SvgIcon from '../svgIcon/index.vue';
import { http } from '../../shared/Http';
export const Tags = defineComponent({
  props: {
    kind: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    const tags = ref<Tag[]>([])
    onMounted(async () => {
      const response = await http.get<{ resources: Tag[] }>('/tags', {
        kind: props.kind,
        _mock: 'tagIndex'
      })
      tags.value = response.data.resources
    })
    return () => <>
      <div class={styles.tags_wrapper}>
        <div class={styles.tag}>
          <div class={[styles.sign, styles.sign_add]}>
            <SvgIcon name="add" class={styles.createTag} />
          </div>
          <div class={styles.name}>
            添加
          </div>
        </div>
        {tags.value.map(tag =>
          <div class={[styles.tag, styles.selected]}>
            <div class={styles.sign}>
              {tag.sign}
            </div>
            <div class={styles.name}>
              {tag.name}
            </div>
          </div>
        )}
      </div>
    </>
  }
})