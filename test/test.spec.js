import { expect } from 'chai';
import { getExchangeRate } from '../src/utils/currencyConverter.js';

describe("currency converter", () => {
  it("should return '0.85'", () => {
    getExchangeRate('USD','EUR').then(res => {
      expect(res).to.equal(0.85);
      done();
    })
  })
  it("should return '32.9302'", () => {
    getExchangeRate('EUR','UAH').then(res => {
      expect(res).to.equal(32.9302);
      done();
    })
  })
  it("should return '0.3622'", () => {
    getExchangeRate('RUB','UAH').then(res => {
      expect(res).to.equal(0.3622);
      done();
    })
  })
  it("should return '2.7586'", () => {
    getExchangeRate('UAH','RUB').then(res => {
      expect(res).to.equal(2.7586);
      done();
    })
  })
  it("should return '1'", () => {
    getExchangeRate('USD','USD').then(res => {
      expect(res).to.equal(1);
      done();
    })
  })
  it("should return 'undefined'", () => {
    getExchangeRate('UAH','JPY').then(res => {
      expect(res).to.equal(undefined);
      done();
    })
  })
})
