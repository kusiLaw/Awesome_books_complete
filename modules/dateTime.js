import { DateTime } from '../node_modules/luxon/src/luxon.js';

const DateAndTime = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default DateAndTime;
