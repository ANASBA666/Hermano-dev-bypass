import crypto from 'crypto';
import { SECRET_KEY } from '../secrets/secret';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const timestamp = Date.now();
  const rawKey = crypto.randomBytes(8).toString('hex');
  const hmac = crypto.createHmac('sha256', SECRET_KEY);
  hmac.update(rawKey + timestamp);
  const signature = hmac.digest('hex');

  res.json({ key: rawKey, expires: Date.now() + 14400000, signature });
}