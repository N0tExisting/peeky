import { Context } from './types'

export function createPeekyGlobal (ctx: Context) {
  return {
    retry,
  }
}

function retry (handler: () => unknown, tries = 10, delay = 1) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<void>(async (resolve, reject) => {
    try {
      await handler()
      resolve()
    } catch (e) {
      if (tries === 1) {
        reject(e)
      } else {
        setTimeout(() => {
          retry(handler, tries - 1, delay).then(resolve).catch(reject)
        }, delay)
      }
    }
  })
}

export type PeekyGlobal = ReturnType<typeof createPeekyGlobal>
