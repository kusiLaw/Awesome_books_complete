import { DateTime } from './luxon.js';

const DateAndTime = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default DateAndTime;
