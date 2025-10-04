function isValidDate2(date) {
  const month = date.slice(3, 5);
  const day = parseInt(date.slice(0, 2));
  const monthWith31Days = "01 03 05 07 08 10 12";
  const monthWith30Days = "04 06 09 11";

  if (monthWith31Days.includes(month)) {
    return day >= 1 && day <= 31;
  }
  if (monthWith30Days.includes(month)) {
    return day >= 1 && day <= 30;
  }
  if (month === '02') {
    if (isLeapYearFun(parseInt(date.slice(6, date.length)))) {
      return day >= 1 && day <= 29;
    }
    return day >= 1 && day <= 28;
  }
  return false;
}

//   if (parseInt(date.slice(0, 2)) < 10 && parseInt(date.slice(0, 2)) > 0) {
//     return true;
//   }

//   switch (month) {
//     case "01":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "02":
//       day = parseInt(date.slice(0, 2));
//       if (isLeapYearFun(parseInt(date.slice(6, date.length)))) {
//         return day >= 1 && day <= 29;
//       }
//       return day >= 1 && day <= 28;

//     case "03":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "04":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 30;

//     case "05":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "06":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 30;

//     case "07":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "08":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "09":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 30;

//     case "10":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     case "11":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 30;

//     case "12":
//       day = parseInt(date.slice(0, 2));
//       return day >= 1 && day <= 31;

//     default:
//       return false;
//   }
// }
