import moment from 'moment';

export default {
  currencyUSD(value) {
    return '$' + value;
  },

  localeDate(value) {
    let m = moment(value);
    return m.format('LLL');
  }
};
