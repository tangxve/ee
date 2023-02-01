import { Collapse } from 'antd'
import React, { useState } from 'react'
import styles from './WidgetPanel.module.scss'
import type { BasicWidget, Designer, Widget } from '@/types/editor'
import { basicWidget, containers } from '@/components/widgetPanel/widgetConfig'

const { Panel } = Collapse

interface BasicItemProps {
  block: BasicWidget
}

function BasicItem({ block }: BasicItemProps) {
  return (
    <div className={styles.blockItem}>
      <div className={styles.blockItemContainer}>
        <span className="bloc-title">{block.type}</span>
      </div>
    </div>
  )
}

interface ContainerWidgetProps {
  layout: Widget
  onAddContainerByDbClick: (layout: Widget) => void
}

function ContainerWidget({ layout, onAddContainerByDbClick }: ContainerWidgetProps) {
  const colItems = layout.widgetList.map((col, colI) =>
    <div className={styles.col} key={colI}>{colI}</div>,
  )

  return (
    <div className={styles.layoutItem} onDoubleClick={() => onAddContainerByDbClick(layout)}>
      <div className={styles.layoutLabel}>
        {layout.widgetList.length} 列 columns
      </div>
      <div className={styles.layoutItemContainer}>
        <div className={styles.layoutItemContent}>{colItems}</div>
      </div>
    </div>
  )
}

interface WidgetPanelProps {
  designer: Designer
}

export default function WidgetPanel({ designer }: WidgetPanelProps) {
  const [layouts] = useState<Widget[]>(containers)
  const [basics] = useState<BasicWidget[]>(basicWidget)

  function addContainerByDbClick(layout: Widget) {
    designer.addContainerByDbClick(layout)

    console.log('designer', designer)
  }

  return (
    <Collapse defaultActiveKey={[1, 2, 3]}>
      <Panel key={1} header="布局 Layout">
        <div className={styles.containerBox}>
          {layouts.map((layout, i) =>
            <ContainerWidget onAddContainerByDbClick={addContainerByDbClick} key={i} layout={layout} />,
          )}
        </div>
      </Panel>
      <Panel key={2} header="内容 Content">
        <div className={styles.blockBox}>
          {basics.map(widget => <BasicItem key={widget.id} block={widget} />)}
        </div>
      </Panel>
      <Panel key={3} header="自定义 Custom">
        <div>真棒</div>
      </Panel>
    </Collapse>
  )
}
