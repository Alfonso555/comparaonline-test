class Product {
	constructor(name, sellIn, price) {
		this.name = name;
		this.sellIn = sellIn;
		this.price = price;
	}
}

class CarInsurance {
	constructor(products = []) {
		this.products = products;
	}
	updatePrice() {
		this.products.forEach(producto => {
			
			producto.sellIn -= 1;
			switch(producto.name){
				case 'Super Sale':
					if(producto.sellIn<0)
						producto.price-=4
					else 
						producto.price-=2
					if(producto.price<0)
						producto.price=0;
					break;

				case 'Mega Coverage':
					producto.sellIn = 0;
					break;

				case 'Full Coverage':
					if(producto.price<50)
						producto.price+=1
					break;

				case 'Special Full Coverage':
					if(producto.sellIn<=20 && producto.sellIn>=25)
						producto.price+=2
					if(producto.sellIn<25)
						producto.price+=3
					if(producto.price>=50)
						producto.price=50;
					break;

				default:
					break;
			}


		});
		return this.products;
	}
}

module.exports = {
	Product,
	CarInsurance
}