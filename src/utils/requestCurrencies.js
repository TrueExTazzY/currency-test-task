import currencies from './currencies.js'

export function requestCurrencies() {
  return new Promise((res, rej) => {
    try {
      res(currencies);
    } catch (error) {
      rej(error)
    }
  })
}
