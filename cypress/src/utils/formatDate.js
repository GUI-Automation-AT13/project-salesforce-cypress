
export function getCurrentDate() {
  const options = {
    'day': "numeric",
    'hour': "numeric",
    'minute': "numeric",
    'month': "numeric",
    'second': "numeric",
    'year': "numeric"
  };
  const actualDate = new Date();
  return new Intl.DateTimeFormat("es-ES", options).format(actualDate);
}
