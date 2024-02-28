import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
  MONGODB: joi
    .string()
    .required()
    .messages({ 'string.base': 'MONGODB must be a string' }),
  PORT: joi
    .number()
    .default(3000)
    .messages({ 'string.base': 'PORT must be a number' }),
  DEFAULT_LIMIT: joi
    .number()
    .default(10)
    .messages({ 'string.base': 'DEFAULT_LIMIT must be a number' }),
});
