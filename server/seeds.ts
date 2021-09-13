import { PrismaClient, Product } from '@prisma/client';
import axios from 'axios';
import { each } from 'lodash';
var faker = require('faker');

const prisma = new PrismaClient();

const randomQuantity = (max: number = 10) =>
	Math.floor(Math.random() * max) + 1;

const InitializeSeeding = async () => {
	console.log('Start seeding....');

	const { data } = await axios.get('https://fakestoreapi.com/products');

	each(data.slice(10), (value) => {
		const product: any = {
			name: value.title,
			price: value.price,
			image: value.image,
			quantity: randomQuantity(),
			description: value.description,
		};

		prisma.product
			.create({ data: product })
			.catch((e) => console.log('error', e));
	});

	// User Seeding
	for (let i = 0; i < 5; i++) {
		const user: any = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			address: faker.address.country(),
		};

		await prisma.user.create({ data: user });
	}

	console.log('seeding completed....');
};

InitializeSeeding()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
		process.exit(1);
	});
