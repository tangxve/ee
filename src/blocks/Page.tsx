import { BasicType } from '@/types/BasicBlock'

export const Page = {
  name: 'Page',
  type: BasicType.PAGE,
  create(payload: string) {},
  render() {
    return (
      <>
        {
          `
        <mjml>
          <mj-body>
            <mj-section>
              <mj-column>
                <mj-divider border-color="#F45E43"></mj-divider>
                <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
          `
        }
      </>
    )
  },
}
