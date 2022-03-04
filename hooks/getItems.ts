const items = [
	{
		id: '1',
		shopid: '1',
		barcode: '4800067642556',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '2',
		shopid: '1',
		barcode: '4800067642573',
		type: '561',
		item: 'Hotdog',
		price: '50.00',
		stock: '5',
		data: '10123456809'
	},{
		id: '3',
		shopid: '1',
		barcode: '4800067642578',
		type: '561',
		item: 'Diaper',
		price: '50.00',
		stock: '5',
		data: '12300458972'
	},{
		id: '4',
		shopid: '1',
		barcode: '4800047820199',
		type: '561',
		item: 'Diaper XL',
		price: '60.00',
		stock: '5',
		data: '1023456789'
	},{
		id: '5',
		shopid: '2',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '6',
		shopid: '2',
		type: '561',
		item: 'Hotdog',
		price: '50.00',
		stock: '5',
		data: '10123456809'
	},{
		id: '7',
		shopid: '3',
		type: '561',
		item: 'Diaper',
		price: '50.00',
		stock: '5',
		data: '12300458972'
	},{
		id: '8',
		shopid: '3',
		type: '561',
		item: 'Diaper XL',
		price: '60.00',
		stock: '5',
		data: '1023456789'
	},{
		id: '9',
		shopid: '4',
		type: '561',
		item: 'Diaper XL',
		price: '60.00',
		stock: '5',
		data: '1023456789'
	},{
		id: '10',
		shopid: '4',
		type: '561',
		item: 'Diaper',
		price: '50.00',
		stock: '5',
		data: '12300458972'
	},{
		id: '11',
		shopid: '4',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '12',
		shopid: '4',
		type: '561',
		item: 'Hotdog',
		price: '50.00',
		stock: '5',
		data: '10123456809'
	},{
		id: '13',
		shopid: '5',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '14',
		shopid: '6',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '15',
		shopid: '6',
		type: '561',
		item: 'Diaper',
		price: '50.00',
		stock: '5',
		data: '12300458972'
	},{
		id: '16',
		shopid: '7',
		type: '561',
		item: 'Chicharon',
		price: '100.23',
		stock: '5',
		data: '009876589'
	},{
		id: '17',
		shopid: '7',
		type: '561',
		item: 'Diaper',
		price: '50.00',
		stock: '5',
		data: '12300458972'
	},{
		id: '18',
		shopid: '7',
		type: '561',
		item: 'Hotdog',
		price: '50.00',
		stock: '5',
		data: '10123456809'
	},
];

const Items = {
	getItems(shop) {
		return items.filter(item => item.shopid == shop);
	},
	getItem(items, barcode) {
		return items.find(item => item.barcode == barcode);
	},
}

export default Items;