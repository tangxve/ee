import styles from './EmailPanel.module.scss'
import SectionContainer from '@/components/widgets/SectionContainer'
import useStore from '@/store'
import ColumnContainer from '@/components/widgets/ColumnContainer'

export default function EmailPanel() {
  const widgetList = useStore(state => state.widgetList)

  return (
    <div className={styles.EmailContent}>
      {widgetList.map(widget =>
        <SectionContainer key={widget.id} widget={widget}>
          {widget.widgetList.map(colWidget =>
            <ColumnContainer key={colWidget.key} widget={colWidget} parentWidget={widget} >
              {colWidget.key}
            </ColumnContainer>,
          )}
        </SectionContainer>,
      )}
  </div>
  )
}
