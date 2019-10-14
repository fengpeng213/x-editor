/**
 * 计算日期格式化字符串
 * @param {*} date 日期
 * @param {*} separator 
 */
function formatDate(date, separator = '-') {
  if (!date || !(date instanceof Date)) {
    throw Error('Expect a params of Date type');
    return;
  }

  const year = date.getFullYear();
  let month = '0' + (date.getMonth() + 1);
  let day = '0' + date.getDate();

  month = month.slice(month.length - 2);
  day = day.slice(day.length - 2);

  return [year, month, day].join(separator);
}

export {
  formatDate
};

