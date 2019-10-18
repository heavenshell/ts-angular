import { Selector } from 'testcafe'

import { baseUrl } from '../testcafe.conf'

const path = `/`

fixture('Angular top')
  .page(`${baseUrl}${path}`)

test('workspace-project App', async t => {
  const root = Selector('app-root .content span')
  await t.expect(root.textContent).eql(
    'ts-angular app is running!'
  )
})
