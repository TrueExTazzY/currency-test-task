currency-test-task

Есть список курсов валют:
const ticker = [
  {
    "symbol":"USD/EUR",
    "price":"0.85"
  },
  {
    "symbol":"RUB/EUR",
    "price":"0.011"
  },
  {
    "symbol":"USD/UAH",
    "price":"27.99"
  }
];

Написать апи, в котором можно будет конвертировать все валюты, которые есть в массиве ticker, с учетом того, что массив входных данных (ticker) может пополниться новыми валютами.

Вид api:
POST /api/v1/convert HTTP/1.1
Host: localhost:3000
Content-Type: application/json

Request - { "from": "USD", "to": "EUR" }
Response - { "value": 0.85 }