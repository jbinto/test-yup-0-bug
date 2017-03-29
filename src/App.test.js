import yup from 'yup'

const validator = yup.object().shape({
  price: yup.number().min(0)
})

it('returns the correct message', async () => {
  const input = {
    price: -3
  }

  let errorMessage
  try {
    await validator.validate(input, {
      strict: true,
      abortEarly: false,
    })
  } catch (validationError) {
    errorMessage = validationError.errors[0]
  }

  expect(errorMessage).toEqual('price must be greater than or equal to 0')

})
