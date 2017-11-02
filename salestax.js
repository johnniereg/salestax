var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus", // companySalesData[0].name
    province: "BC", // companySalesData[0].province
    sales: [ 100, 200, 400 ] // companySalesData[0].sales
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var results = {};
  for (var i = 0; i < salesData.length; i++) {
    var companies = salesData[i].name;
    var companySales = calcSales(salesData[i].sales);
    var companyProvince = salesData[i].province;
    var taxRate = salesTaxRates[companyProvince];
    var taxes = calcTax(companySales, taxRate);
    console.log(taxes);
    if (results[companies] === undefined) {
      results[companies] = {
        totalSales: companySales,
        totalTaxes: taxes
      };
      // results[companies]["totalTaxes"] += taxes;
    }
    else {
      results[companies].totalSales += companySales;
      results[companies].totalTaxes += taxes;
    }
  }
  console.log(results);
}

// access parts of each item in array of objects
// can access with . notation or [""] notation
// console.log(companySalesData[0].name);
// console.log(companySalesData[0]["province"]);
// console.log(companySalesData[0]["sales"]);

//access the objects in this array like this
// companySalesData[0]; --> Telus BC
// companySalesData[1]; --> Bombardier AB
// companySalesData[2]; --> Telus SK


function calcSales (arrayOfSales) {
  var salesCounter = 0;
  for (var i = 0; i < arrayOfSales.length; i++) {
    salesCounter += arrayOfSales[i];
  }
  return salesCounter;
}


function calcTax (totalSales, salesTaxRate) {
  return totalSales * salesTaxRate;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
// console.log(results)


//  Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }