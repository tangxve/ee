import type { BasicWidget, Designer } from '@/types/editor'
import { getDefaultConfig } from '@/pages/editor/emailConfig'

export function createDesigner(): Designer {
  const defaultConfig = getDefaultConfig()

  return {
    defaultConfig: {},
    selectedId: null,
    selectedWidget: null,
    selectedWidgetName: null,
    widgetList: [],
    initDesigner() {
      this.defaultConfig = defaultConfig
      this.widgetList = []
    },
    addContainerByDbClick(container) {
      this.widgetList.push(container)
    },
    setSelected(selected) {
      if (!selected) {
        this.clearSelected()
        return
      }

      if (selected.id === this.selectedId)
        return

      this.selectedId = selected.id
      this.selectedWidget = selected
      this.selectedWidgetName = selected.type
    },
    removeSelected(widget, parentWidget) {
      console.log('parentWidget', parentWidget)
      if (parentWidget) {
        if (parentWidget.type === 'section')
          parentWidget.columns = []
      }
    },
    clearSelected() {
      this.selectedId = null
      this.selectedWidget = null
      this.selectedWidgetName = null
    },

    addBasicByDbClick(basic: BasicWidget) {
    },
  }
}
