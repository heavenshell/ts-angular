import { Selector } from 'testcafe';

import { baseUrl } from '../testcafe.conf';

const path = `/`;

fixture('Home').page(`${baseUrl}${path}`);

test('content-area', async t => {
  const root = Selector('app-root app-home p');
  await t.expect(root.textContent).eql('home works!');
});
