import styles from './EmailPanel.module.scss'
import type { Designer } from '@/types/editor'
import SectionContainer from '@/components/widgets/SectionContainer'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper'

interface EmailPanelProps {
  designer: Designer
}
export default function EmailPanel({ designer }: EmailPanelProps) {
  const { widgetList } = designer
  console.log('widgetList', widgetList)

  return (
    <div className={styles.EmailContent}>
      {widgetList.map(widget =>
        <SectionContainer key={widget.key} widget={widget} designer={designer} >
          {widget.widgetList.map(colWidget =>
            <ContainerWrapper key={colWidget.key} widget={colWidget} designer={designer} parentWidget={widget} >
              {colWidget.key}
            </ContainerWrapper>,
          )}
        </SectionContainer>,
      )}
  </div>
  )
}
