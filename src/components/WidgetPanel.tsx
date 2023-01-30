import { Collapse } from 'antd'

const { Panel } = Collapse

export function BasicWidget() {
  return (
    <div className="select-none">
      <div className="pt-2">label</div>
      <div className="mt-2 w-full"></div>
    </div>
  )
}

export function ContainerWidget() {
  const colItems = [1, 2, 3, 4].map(v =>
    <div key={v} className="flex-auto text-center border-0 border-r border-solid last:border-r-0">{v}</div>,
  )
  return (
    <div className="select-none mb-2">
      <div className="pt-2">column_7b7361c7</div>
      <div className="mt-2 p-2 w-full shadow rounded border hover:lg hover:shadow-blue-500/40">
        <div className="h-5 leading-5 flex border rounded  border-zinc-600 border-solid">
          {colItems}
        </div>
      </div>
    </div>
  )
}

export default function WidgetPanel() {
  return (
    <Collapse defaultActiveKey={[1, 2, 3]}>
      <Panel key={1} header="布局 Layout">
        <ContainerWidget />
        <ContainerWidget />
        <ContainerWidget />
      </Panel>
      <Panel key={2} header="内容 Content"></Panel>
      <Panel key={3} header="自定义 Custom">
        <div>真棒</div>
      </Panel>
    </Collapse>
  )
}
