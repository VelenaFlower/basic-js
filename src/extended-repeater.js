module.exports = function repeater(str, options) {
  str = String(arguments[0]);
  options = arguments[1];

  if (options.addition !== undefined || options.addition === null) {
      options.addition = String(options.addition);
  }
  if (!options.repeatTimes) {
      options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
      options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
  }

  let addArr = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);

  return new Array(options.repeatTimes).fill(str + addArr).join(options.separator);
};
  