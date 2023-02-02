import styles from './EmailPanel.module.scss'
import SectionContainer from '@/components/widgets/SectionContainer'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper'
import useStore from '@/store'

export default function EmailPanel() {
  const widgetList = useStore(state => state.widgetList)

  return (
    <div className={styles.EmailContent}>
      {widgetList.map(widget =>
        <SectionContainer key={widget.id} widget={widget} >
          {widget.widgetList.map(colWidget =>
            <ContainerWrapper key={colWidget.key} widget={colWidget} parentWidget={widget} >
              {colWidget.key}
            </ContainerWrapper>,
          )}
        </SectionContainer>,
      )}
  </div>
  )
}
