const nonEmptyMessage = 'Toto policko nemoze ostat prazdne'

export const passwordValidation = {
  required: {value: true, errorMessage: nonEmptyMessage},
  pattern: {
    value: '^[A-Za-z0-9]+$',
    errorMessage: 'Your username must be composed only with letter and numbers',
  },
  minLength: {
    value: 3,
    errorMessage: 'Your username must be between 3 and 16 characters',
  },
  maxLength: {
    value: 16,
    errorMessage: 'Your username must be between 3 and 16 characters',
  },
}

export const nonEmptyField = {
  required: {value: true, errorMessage: nonEmptyMessage},
}
