import dotenv from 'dotenv';

dotenv.config();

export function env(PORT, defaultValue = 3000) {
  const value = process.env.PORT;

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${PORT}'].`);
}
