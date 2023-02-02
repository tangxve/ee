import type { Designer, Widget } from '@/types/editor'

export interface UseSelectedWidget {
  (widget: Widget, designer: Designer): void
}

export const useSelectedWidget: UseSelectedWidget = function (
  widget,
  designer,
) {
  designer.setSelected(widget)
}
