import { useMemo } from 'react'
import useStore from '@/store'
import jsonToMjml from '@/utils/jsonToMjml'

export default function MjmlDomRender() {
  const widgetList = useStore(state => state.widgetList)
  // const initDesigner = useStore(state => state.initDesigner)
  // const addContainerByDbClick = useStore(state => state.addContainerByDbClick)

  // console.log(initDesigner())

  // console.log(addContainerByDbClick())

  console.log('widgetList', widgetList)

  // widgetList ==> json ==> mjml ==> html ==> react
  const html = useMemo(() => {
    if (!pageDefault)
      return ''

    const mjmlString = jsonToMjml({ data: pageDefault })

    return mjmlString

    // return mjmlBrowser(mjmlString).html
  }, [widgetList])

  console.log('html', html)

  return (
    <div>MjmlDomRender</div>
  )
}
