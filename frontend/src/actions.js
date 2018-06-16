export const updateValue = (path, data, type) => ({
  type: type || 'Update data on path',
  payload: data,
  path,
  reducer: (state, data) => data,
})
