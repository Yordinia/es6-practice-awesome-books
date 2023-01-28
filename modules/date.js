import { DateTime } from './luxon.js';

const Date = () => {
  const output = DateTime.local();
  document.querySelector('.date').innerHTML = output.toLocaleString(

    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};
export default Date;