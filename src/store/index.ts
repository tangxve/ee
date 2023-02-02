import { create } from 'zustand'
import { getDefaultConfig } from '@/store/emailConfig'
import type { BasicWidget, Designer } from '@/types/editor'

const useStore = create<Designer>((setState, getState) => ({
  defaultConfig: {},
  selectedId: null,
  selectedWidget: null,
  selectedWidgetName: null,
  widgetList: [],
  initDesigner: () => {
    setState((state) => {
      return {
        widgetList: state.widgetList = [],
        defaultConfig: state.defaultConfig = getDefaultConfig(),
      }
    })
  },
  addContainerByDbClick(container) {
    setState((state) => ({
      widgetList: [...state.widgetList, container],
    }))
  },
  setSelected(selected) {
    if (!selected) {
      getState().clearSelected()
      return
    }

    const { selectedId } = getState()
    if (selected.id === selectedId)
      return

    setState(() => ({
      selectedId: selected.id,
      selectedWidget: selected,
      selectedWidgetName: selected.type,
    }))
  },
  removeSelected(widget, parentWidget) {
    console.log('parentWidget', parentWidget)
    if (parentWidget) {
      if (parentWidget.type === 'section')
        parentWidget.columns = []
    }
  },
  clearSelected() {
    setState(() => ({
      selectedId: null,
      selectedWidget: null,
      selectedWidgetName: null,
    }))
  },
  addBasicByDbClick(basic: BasicWidget) { console.log(basic) },
}))

export default useStore
