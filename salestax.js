var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
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
    // adds object if it isn't declared
    if (results[companies] === undefined) {
      results[companies] = {
        totalSales: companySales,
        totalTaxes: taxes
      };
    }
    // updates already declared objects
    else {
      results[companies].totalSales += companySales;
      results[companies].totalTaxes += taxes;
    }
  }
  return results;
}

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

// run to test
// console.log(results);

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