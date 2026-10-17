const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// forEach(): Display all products
console.log("-- All Products (forEach) --");

products.forEach(product => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// filter(): Find products priced below $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter(product => product.price < 50);

console.log(filteredProducts);

// map(): Format product names and prices
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(productTags);