/*import { definitionSyntax } from 'css-tree';
const syntax = '<@swash>';
const ast = definitionSyntax.parse(syntax);

*/

import { setup, lookup } from './packages-auto/xref/index.js';

console.log('- setup...');
setup();
console.log('- setup... done');

const urls = [
  // A dfn
  'https://html.spec.whatwg.org/multipage/webappapis.html#event-loop',

  // A heading
  'https://compat.spec.whatwg.org/#css-at-rules',

  // A dfn through a dev link
  'https://html.spec.whatwg.org/multipage/introduction.html#typographic-conventions%3Ax-that',

  // A heading using an alternate ID
  'https://drafts.csswg.org/css-ui-4/#contents',

  // An invalid fragment
  'https://compat.spec.whatwg.org/#idontexist',

  'https://dom.spec.whatwg.org/#ref-for-dom-element-prefix%E2%91%A0',
  'https://dom.spec.whatwg.org/#ref-for-dom-element-prefix①'
];

for (const url of urls) {
  console.log(`- lookup ${url}...`);
  const res = lookup(url);
  console.log(res);
  console.log(`- lookup ${url}... done`);
}
