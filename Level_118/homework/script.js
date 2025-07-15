
// Task

const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

let product1 = (productObject) => {
    let { id, name, ...details } = productObject
    console.log(name);
    console.log(id);
    console.log(details);
}
product1(product)