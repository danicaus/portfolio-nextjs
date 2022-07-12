const DATEFORMATS = [
  [60, 'minute'],
  [60, 'hour'],
  [24, 'day'],
  [7, 'week'],
  [4.34524, 'month'],
  [12, 'year'],
];

export default function handleDateFormat(dateString, language = 'pt') {
  const today = new Date();
  const lastUpdatedAt = new Date(dateString);
  const secondsBetweenDates = (lastUpdatedAt - today) / 1000;
  let value = secondsBetweenDates;
  let unit = 'seconds';

  DATEFORMATS.forEach(([currentValue, currentUnit]) => {
    if (Math.abs(value) > currentValue) {
      unit = currentUnit;
      value /= currentValue;
    }
  });

  return new Intl.RelativeTimeFormat(language, { numeric: 'auto' }).format(Math.round(value), unit);
}
