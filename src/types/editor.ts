export type EmailBlockType = 'text' | 'image' | 'button'
export type LayoutTagName = 'mj-wrapper' | 'mj-section' | 'mj-column' | 'mj-group'
export type BlockTagName = 'mj-button' | 'mj-text' | 'mj-image' | 'mj-social' | 'mj-divider'
export type MjmlTagName = LayoutTagName | BlockTagName

export interface BaseBlock {
  type: EmailBlockType
  tagName: BlockTagName
  attributes?: any
  content?: string
}

export interface BaseLayout {
  colNum: number
  tagName: LayoutTagName[]
}

export interface MjmlNode {
  tagName: MjmlTagName | string
  attributes: any
  children?: Array<MjmlNode>
  line: number // 顺序 优先深度
  content?: string
  id: string
  key?: string
}

export type WidgetType = 'section' | 'column' | 'text' | 'image' | 'button'

export interface BaseWidget {
  id: string
  key?: string
  type: WidgetType
  tagName: MjmlTagName | string
  attributes?: any
  options?: any
}

export interface Widget extends BaseWidget {
  widgetList: Array<Widget>
  children?: Array<Widget>
  columns?: Array<Widget>
}

export interface BasicWidget extends BaseWidget {
  internal: boolean
  content?: string
}

export interface Designer {
  defaultConfig: any
  selectedId: string | null
  selectedWidget: Widget | null
  selectedWidgetName: string | null
  widgetList: Array<Widget>

  initDesigner(): void

  addContainerByDbClick(container: Widget): void
  addBasicByDbClick(basic: BasicWidget): void

  setSelected(selected?: Widget): void

  removeSelected(widget: Widget, parentWidget?: Widget): void

  clearSelected(): void
}

export interface ContainerProps {
  widget: Widget
  // designer: Designer
  parentWidget?: Widget
}
