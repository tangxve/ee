import styles from './EmailPanel.module.scss'
import MjmlDomRender from '@/components/emailPanel/MjmlDomRender'

export default function EmailPanel() {
  // const widgetList = useStore(state => state.widgetList)

  return (
    <div className={styles.EmailContent}>
       <MjmlDomRender/>
      {/* {widgetList.map(widget => */}
      {/*  <SectionContainer key={widget.id} widget={widget}> */}
      {/*    {widget.widgetList.map(colWidget => */}
      {/*      <ColumnContainer key={colWidget.key} widget={colWidget} parentWidget={widget}> */}
      {/*        {colWidget.key} */}
      {/*      </ColumnContainer>, */}
      {/*    )} */}
      {/*  </SectionContainer>, */}
      {/* )} */}
    </div>
  )
}
