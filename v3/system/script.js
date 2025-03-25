let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItemsElement.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
      <span>${item.name}</span>
      <span>KSH ${item.price}</span>
      <button class="btn" onclick="removeFromCart(${index})">
          Remove
      </button>
    `;
    cartItemsElement.appendChild(itemElement);
    total += item.price;
  });

  totalElement.textContent = `Total: KSH ${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  PaystackPop.setup({
    key: config.publicKey,
    email: config.email,
    amount: total * 100,
    currency: "KES",
    callback: function (response) {
      alert("Payment Successful! Transaction Reference: " + response.reference);
      cart = [];
      updateCart();
    },
    onClose: function () {
      alert("Payment process was cancelled");
    },
  }).openIframe();
}
