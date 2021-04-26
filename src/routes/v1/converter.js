import { Router } from 'express';
import { getExchangeRate } from '../../utils/currencyConverter.js';

const router = Router();

/*
  POST http://localhost:3000/api/v1/convert
  { from, to }
*/
router.post('/', async (req, res) => {
  let { from, to } = req.body;
  console.log(req.body);
  if (!from || !to) {
    res.send('from and to currency required');
    return;
  }

  const value = await getExchangeRate(from, to);

  if (!value) {
    res.send('rate not found')
  }

  res.json({ value });
});

export default router;
