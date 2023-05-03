import { useMemo } from 'react'
import mjmlBrowser from 'mjml-browser'
import { unescape } from 'lodash-es'
import useStore from '@/store'
import jsonToMjml from '@/utils/jsonToMjml'

export default function MjmlDomRender() {
  const pageDefault = useStore(state => state.defaultConfig)

  // pageDefault ==> json ==> mjml ==> html ==> react

  const html = useMemo(() => {
    if (!pageDefault)
      return ''

    const mjmlString = jsonToMjml({ data: pageDefault })

    return mjmlBrowser(unescape(mjmlString)).html
  }, [pageDefault])

  return useMemo(() => {
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    )
  }, [html])
}
