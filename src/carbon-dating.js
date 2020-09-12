const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string' || /[A-Za-z]/.test(sampleActivity) || +sampleActivity >= MODERN_ACTIVITY || +sampleActivity <= 0) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
};
