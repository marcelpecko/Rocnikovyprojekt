const nonEmptyMessage = 'Toto policko nemôže ostat prázdne'

export const passwordValidation = {
  required: {value: true, errorMessage: nonEmptyMessage},
  pattern: {
    value: '^[A-Za-z0-9]+$',
    errorMessage: 'Môžeš používať len písmená a čísla',
  },
  minLength: {
    value: 3,
    errorMessage: 'Heslo musí mať od 3 do 16 znakov',
  },
  maxLength: {
    value: 16,
    errorMessage: 'Heslo musí mať od 3 do 16 znakov',
  },
}

export const nonEmptyField = {
  required: {value: true, errorMessage: nonEmptyMessage},
}
