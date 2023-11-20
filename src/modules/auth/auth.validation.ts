import Joi from 'joi'

export const loginValidation = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.alphanum': 'Username must only contain alphanumeric characters',
    'string.min': 'Username must be at least {{#limit}} characters long',
    'string.max': 'Username cannot exceed {{#limit}} characters',
    'any.required': 'Username is required',
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
