// if (temperature > 30) {
//   weather = "hot";
// } else {
//   weather = "cool";
// }

const weather = temperature > 30 ? "hot" : "cool";

// if (isMember) {
//   discount = 10;
// } else {
//   discount = 0;
// }

const discount = isMember ? 10 : 0;

// if (day === "Saturday" || day === "Sunday") {
//   isWeekend = true;
// } else {
//   isWeekend = false;
// }

const isWeekend = (day === "Saturday" || day === "Sunday");

// if (cartItems.length === 0) {
//   status = "empty";
// } else {
//   status = "ready";
// }

const status = cartItems.length === 0 ? "empty" : "ready";

// if (marks >= 90) {
//   grade = "A";
// } else {
//   grade = "B";
// }

const grade = marks >= 90 ? 'A' : 'B';

// if (userType === "admin") {
//   baseAccess = "all";
//   canDelete = true;
// } else {
//   baseAccess = "limited";
//   canDelete = false;
// }

const canDelete = userType === "admin";
baseAccess = userType === "admin" ? "all" : "limited";

// if (isPremiumUser) {
//   discount = basePrice * 0.2;
//   finalPrice = basePrice - discount;
// } else {
//   discount = basePrice * 0.05;
//   finalPrice = basePrice - discount;
// }

const disCount = isPremiumUser ? basePrice * 0.2 : basePrice * 0.05;
const finalPrice = basePrice - disCount;

// if (speed > 100) {
//   message = "Too fast";
//   penalty = 200;
// } else {
//   message = "OK";
//   penalty = 0;
// }

let message = "OK";
let penalty = 0;

if (speed > 100) {
  message = "Too fast";
  penalty = 200;
}

// if (role === "teacher") {
//   dashboard = "gradebook";
//   permissions = "view/edit/grade";
// } else {
//   dashboard = "courses";
//   permissions = "view";
// }

let dashboard = "courses";
let permissions = "view";

if (role === "teacher") {
  dashboard = "gradebook";
  permissions = "view/edit/grade";
}



// if (age >= 65) {
//   category = "senior";
//   ticketPrice = 5;
// } else {
//   category = "adult";
//   ticketPrice = 10;
// }

let category = "adult";
let ticketPrice = 10;

if (age >= 65) {
  category = "senior";
  ticketPrice = 5;
}
