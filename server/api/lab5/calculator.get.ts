// GET /api/lab5/calculator?a=10&b=5&operation=add
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const a = parseFloat(String(query.a ?? ''))
  const b = parseFloat(String(query.b ?? ''))
  const operation = query.operation
  if (Number.isNaN(a) || Number.isNaN(b)) {
    setResponseStatus(event, 400)
    return { error: 'Invalid numbers' }
  }
  let result: number
  switch (operation) {
    case 'add':
      result = a + b
      break
    case 'subtract':
      result = a - b
      break
    case 'multiply':
      result = a * b
      break
    case 'divide':
      result = b === 0 ? Number.NaN : a / b
      break
    default:
      setResponseStatus(event, 400)
      return { error: 'Invalid operation' }
  }
  if (Number.isNaN(result)) {
    setResponseStatus(event, 400)
    return { error: 'Invalid operation' }
  }
  return { a, b, operation, result }
})
