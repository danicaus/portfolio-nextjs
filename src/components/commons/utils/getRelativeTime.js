const DATEFORMATS = [
  [60, 'minute'],
  [60, 'hour'],
  [24, 'day'],
  [7, 'week'],
  [4.34524, 'month'],
  [12, 'year'],
];

export default function getRelativeTime(dateIsoString, language = 'pt', today = new Date()) {
  const lastUpdatedAt = new Date(dateIsoString);
  const todayISO = new Date(today);
  const secondsBetweenDates = (lastUpdatedAt - todayISO) / 1000;
  let isThisUnit = true;
  let value = secondsBetweenDates;
  let unit = 'seconds';

  DATEFORMATS.forEach(([currentValue, currentUnit]) => {
    if (Math.abs(value) > currentValue && isThisUnit) {
      unit = currentUnit;
      value /= currentValue;
    } else {
      isThisUnit = false;
    }
  });

  return new Intl.RelativeTimeFormat(language, { numeric: 'auto' }).format(Math.round(value), unit);
}
