import { defineComponent, onMounted, PropType, ref } from 'vue';
import styles from './Tags.module.scss';
import SvgIcon from '../svgIcon/index.vue';
import { http } from '../../shared/Http';
import { RouterLink, useRouter } from 'vue-router';
export const Tags = defineComponent({
  props: {
    kind: {
      type: String as PropType<string>,
      required: true
    },
    selected: Number
  },
  emits: ['update:selected'],
  setup: (props, context) => {
    const tags = ref<Tag[]>([])
    const onSelect = (tag: Tag) => {
      context.emit('update:selected', tag.id)
    }
    onMounted(async () => {
      const response = await http.get<{ resources: Tag[] }>('/tags', {
        kind: props.kind,
        _mock: 'tagIndex'
      })
      tags.value = response.data.resources
    })
    const timer = ref<number>()
    const currentTag = ref<HTMLDivElement>()
    const router = useRouter()
    const onLongPress = (tagId: Tag['id'])=>{
      router.push(`/tags/${tagId}/edit?kind=${props.kind}&return_to=${router.currentRoute.value.fullPath}`)
    }
    const onTouchStart = (e: TouchEvent, tag: Tag) => {
      currentTag.value = e.currentTarget as HTMLDivElement
      timer.value = setTimeout(()=>{
        onLongPress(tag.id)
      }, 500)
    }
    const onTouchEnd = (e: TouchEvent) => {
      clearTimeout(timer.value)
    }
    const onTouchMove = (e: TouchEvent) => {
      const pointedElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
      if(currentTag.value !== pointedElement &&
        currentTag.value?.contains(pointedElement) === false){
        clearTimeout(timer.value)
      }
    }
    return () => <>
      <div class={styles.tags_wrapper}  onTouchmove={onTouchMove}>
        <RouterLink to={`/tags/create?kind=${props.kind}`} class={styles.tag}>
          <div class={[styles.sign, styles.sign_add]}>
            <SvgIcon name="add" class={styles.createTag} />
          </div>
          <div class={styles.name}>
            添加
          </div>
        </RouterLink>
        {tags.value.map(tag =>
          <div class={[styles.tag, props.selected === tag.id ? styles.selected : '']} 
          onClick={() => onSelect(tag)} 
          onTouchstart={(e)=>onTouchStart(e, tag)}
          onTouchend={onTouchEnd}>
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