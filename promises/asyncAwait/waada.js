// const readFile = (path) => {
//   return Deno.readTextFile(path);
// };

// const parseCustomerDetails = (data) => {
//   const customers = data.split("\n");

//   return customers.map((customer) => {
//     const [name, ...transections] = customer.split(",");
//     return { name, transections };
//   });
// };

// const parseTransections = (array) =>
//   array.flatMap((amounts) => amounts.trim().split("\n")).map(Number);

// const readTransections = (customer) => {
//   return Promise.all(
//     customer.transections.map((transection) =>
//       readFile(transection).then((amounts) => amounts)
//     ),
//   );
// };

// const formateUserData = (customer, customerTransectionDetail) => {
//   const allTransections = parseTransections(customerTransectionDetail);
//   const sum = allTransections.reduce((sum, amount) => sum + amount);
//   return `${customer.name},${allTransections.length},${sum}`;
// };

// const getTransactionDetails = (customer) => {
//   return readTransections(customer).then((customerTransectionDetail) => {
//     return formateUserData(customer, customerTransectionDetail);
//   });
// };

// const writeBalanceSheet = (transections) => {
//   Deno.writeTextFile("balance.csv", transections.join("\n"));
// };

// const main = async () => {
//   const data = await readFile("./data/small_data/customers.csv");
//   const parsedData = await parseCustomerDetails(data);
//   const customers = await Promise.all(parsedData.map(getTransactionDetails));
//   writeBalanceSheet(customers);
// };

// main();
// console.log("heyyy");
