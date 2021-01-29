'use strcit';

const fs = require('fs')
const {Product, CarInsurance} = require('./src/coTest');


const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 40),
    new Product('Mega Coverage', 0, 30),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 40),
  ];
  fs.rm('results.txt', function (err) {});

  setTimeout(()=>{
    const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    // console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    fs.appendFile('results.txt', `${product.name}, ${product.sellIn}, ${product.price}\n`, function (err) {});
  };
  
  for (let i = 1; i <= 30; i += 1) {
    fs.appendFile('results.txt', `\n- - - - - Day ${i} - - - - - \n`, function (err) {});
    // console.log(`Day ${i}`);
    fs.appendFile('results.txt', 'name, sellIn, price\n', function (err) {});
    // console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    if(i==30)
      console.log('\n\t --> Hey, look at the "results.txt" file!\n\n')    
  }

  },3000)
  




