//local/session storage logic should go here
export default () => (next) => (action) => {
  const { payload, requestObject, type } = action

  switch (type) {
    default:
      break
  }

  return next(action)
}
