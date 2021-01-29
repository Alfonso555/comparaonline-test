const expect = require('chai').expect;

const coTest = require('../src/coTest');
// const CarInsurance = coTest.CarInsurance;
// const Product = coTest.Product;

const {Product, CarInsurance} = require('../src/coTest');

describe("Co Test", function () {

	it("ok", function () {
		const coTest = new CarInsurance([new Product("foo", 0, 0)]);
		const products = coTest.updatePrice();
		expect(products[0].name).equal("foo");
	});

});