export default function formatDate(dateObj, t, locale) {
  const date = dateObj.getUTCDate();
  const day = `day-${dateObj.getDay()}`;
  const month = `month-${dateObj.getUTCMonth()}`;
  const year = dateObj.getFullYear();

  // Show the day in Welsh
  const dayPrefix = locale === 'cy' ? `${t(day, {ns: 'dates'})}, ` : '';

  return `${dayPrefix}${t(date, {ns: 'dates'})} ${t(month, {ns: 'dates'})} ${t(year, {ns: 'dates'})}`
}