import { requestCurrencies } from './requestCurrencies.js';

// По идее эти данные хранятся в бд и в функции getExchangeRate() уже достаются,
// но в задании такого не было, потому просто объект
let rates = {};

// Достаёт из "бд" данные по курсу указанных валют
export async function getExchangeRate(from, to) {
  if (from === to) return 1;

  await ratesUpdater(); // По идее должно запускаться кронджобом

  return rates[from][to];
}

// Обновляет данные по валютам со "стороннего" источника
// и кладёт в "бд"
async function ratesUpdater() {
  // Получаем валюты
  let rawRates = await requestCurrencies();

  // Обрабатываем полученные данные
  rawRates.map(pair => {
    let { symbol, price } = pair;
    const pairArr = symbol.split('/');

    pairArr.forEach(curr => {
      if (!rates[curr]) rates[curr] = {};
    });

    rates[pairArr[0]][pairArr[1]] = parseFloat(price);
  });
  
  const currencies = Object.keys(rates);

  // Заполняем данные для конвертации тех валют, которые уже известны 
  currencies.forEach(from => {
    Object.keys(rates[from]).forEach(to => {
      if (!rates[to][from]) rates[to][from] = parseFloat((1 / rates[from][to]).toFixed(4));
    })
  });

  // Ищем пропущенные валюты, которые можно посчитать и считаем
  currencies.forEach(from => {
    Object.keys(rates[from]).forEach(to => {
      Object.keys(rates[to]).forEach(missing => {
        if (from !== missing && !rates[from][missing]) rates[from][missing] = parseFloat((rates[to][missing] * rates[from][to]).toFixed(4));
      });
    })
  });
}
