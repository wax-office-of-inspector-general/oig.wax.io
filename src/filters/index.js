import dayjs from '@/lib/dayjs';

export default {
  currencyUSD(value) {
    return '$' + value;
  },

  localeDate(value) {
    return dayjs(value).format('LLL');
  }
};
