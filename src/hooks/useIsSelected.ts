import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { Designer, Widget } from '@/types/editor'

export interface UseIsSelected {
  (widget: Widget, designer: Designer): ComputedRef<boolean>
}

export const useIsSelected: UseIsSelected = (widget, designer) => {
  return computed(() => widget.id === designer.selectedId)
}
