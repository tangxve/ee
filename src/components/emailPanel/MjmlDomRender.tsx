import { useMemo } from 'react'
import mjmlBrowser from 'mjml-browser'
import useStore from '@/store'
import jsonToMjml from '@/utils/jsonToMjml'

export default function MjmlDomRender() {
  const pageDefault = useStore(state => state.defaultConfig)

  // pageDefault ==> json ==> mjml ==> html ==> react

  const html = useMemo(() => {
    if (!pageDefault)
      return ''

    const mjmlString = jsonToMjml({ data: pageDefault })

    return mjmlBrowser(mjmlString).html
  }, [pageDefault])

  console.log('html', html)

  return (
    <div>MjmlDomRender</div>
  )
}
