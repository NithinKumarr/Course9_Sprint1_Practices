let year = 2000;
let month = 2;
let days;

//Write your switch case logic here to compute days in month
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayCount = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayCount = 30;
      break;
    case 2:
      // leap year
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
        dayCount = 29;
      } else {
        dayCount = 28;
      }
      break;
    default:
  }
console.log(`No. of days ${dayCount}`);