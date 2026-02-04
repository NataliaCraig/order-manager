let inventory = [
  { sku: "SKU-001", name: "Lip gloss", price: 19.99, stock: 10 },
  { sku: "SKU-002", name: "Lip stick", price: 14.99, stock: 6 },
  { sku: "SKU-003", name: "Lip oil", price: 9.99, stock: 20 },
  { sku: "SKU-004", name: "Lip liner", price: 12.99, stock: 10 }
];
inventory.forEach(product => {
  console.log(`${product.sku} | ${product.name} | $${product.price} | Stock: ${product.stock}`);
});
// Add new 
inventory.push({
  sku: "SKU-005",
  name: "Lip kit",
  price: 29.99,
  stock: 3
  });
  // Remove last 
  let removedProduct = inventory.pop();
console.log(`Removed product: ${removedProduct.name}`);

inventory[0].price = 17.99;

inventory[1].stock += 10;

// orders array
// Step 4: Create and Process Orders
let orders = [
  { orderId: "ORD-001", items: [{ sku: "SKU-001", qty: 2 }, { sku: "SKU-003", qty: 1 }] },
  { orderId: "ORD-002", items: [{ sku: "SKU-004", qty: 15 }] }
];

// Defining the function as requested in Step 4
function processOrder(order) {
    let orderTotal = 0;
    let outOfStockItem = null;

    // 1. Check if stock is available
    order.items.forEach(item => {
        let product = inventory.find(p => p.sku === item.sku);
        if (!product || product.stock < item.qty) {
            outOfStockItem = product ? product.name : "Unknown Item";
        }
    });

    if (outOfStockItem) {
        return `Order ${order.orderId}: Not enough stock for ${outOfStockItem}`;
    }

    // 2. If available, update stock and calculate total
    order.items.forEach(item => {
        let product = inventory.find(p => p.sku === item.sku);
        product.stock -= item.qty;
        orderTotal += product.price * item.qty;
    });

    return `Order ${order.orderId} total: $${orderTotal.toFixed(2)}`;
}

// Call the function for each order
orders.forEach(order => {
    console.log(processOrder(order));
});
// Total inventory value
let totalInventoryValue = inventory.reduce((total, product) => {
  return total + (product.price * product.stock);
}, 0);

    console.log(`Total inventory value: $${totalInventoryValue.toFixed(2)}`);

// Low-stock items (stock <= 5)
let lowStockItems = inventory.filter(product => product.stock <= 5);

console.log("Low stock items:");
  lowStockItems.forEach(item => {
  console.log(`${item.sku} | ${item.name} | Stock: ${item.stock}`);
});

// Price list
let priceList = inventory.map(product => {
  return `${product.sku} — $${product.price}`;
});

console.log("Price list:");
priceList.forEach(item => console.log(item));

