import { shallow } from 'zustand/shallow'
import type { Designer, Widget } from '@/types/editor'
import useStore from '@/store'

// export function useRemoveWidget(widget: Widget, parentWidget: Widget,): Widget[]

// export function useRemoveWidget(widget: Widget, parentWidget: Designer,): Widget[]

export function useRemoveWidget(
  widget?: Widget,
  parentWidget?: Widget | Designer,
): Widget[] {
  const [selectedWidget, selectedParentWidget] = useStore(state =>
    [state.selectedWidget, state.selectedParentWidget], shallow)

  const widgetIndex = selectedParentWidget?.widgetList.findIndex(p => p.id === selectedWidget?.id)

  selectedParentWidget?.widgetList.splice(widgetIndex!, 1)

  return [...selectedParentWidget!.widgetList]
}
