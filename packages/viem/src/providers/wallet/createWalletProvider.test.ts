import { expect, test } from 'vitest'

import { createWalletProvider } from './createWalletProvider'

test('creates', () => {
  const provider = createWalletProvider({
    on: <any>(async () => null),
    removeListener: <any>(async () => null),
    request: <any>(async () => null),
  })

  expect(provider).toMatchInlineSnapshot(`
    {
      "on": [Function],
      "removeListener": [Function],
      "request": [Function],
      "type": "walletProvider",
    }
  `)
})