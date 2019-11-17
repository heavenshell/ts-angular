import { Selector } from 'testcafe';

import { baseUrl } from '../testcafe.conf';

const path = `/categories`;

fixture('Categories').page(`${baseUrl}${path}`);

test('categories', async t => {
  const root = Selector('app-root app-categories p');
  await t.expect(root.textContent).eql('categories works!');
});
