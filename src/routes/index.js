import { Router } from 'express';
import converter from './v1/converter.js';

const CONFIG = { version: 1 };
let router = Router();

router.use(`/v${CONFIG.version}/convert`, converter);

export default router;
