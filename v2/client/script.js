const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Floral and citrusy with a light body",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Nutty and chocolatey with medium acidity",
  },
  {
    id: 3,
    name: "Kenyan AA",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Bright acidity with berry and wine notes",
  },
  {
    id: 4,
    name: "Sumatra Mandheling",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Earthy and full-bodied with low acidity",
  },
  {
    id: 5,
    name: "Guatemalan Antigua",
    price: 18.49,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Chocolate and spice notes with balanced acidity",
  },
  {
    id: 6,
    name: "Costa Rican Tarrazu",
    price: 19.49,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Bright and clean with honey sweetness",
  },
  {
    id: 7,
    name: "Brazilian Santos",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Nutty and sweet with low acidity",
  },
  {
    id: 8,
    name: "Jamaican Blue Mountain",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Mild and smooth with bright acidity",
  },
  {
    id: 9,
    name: "Hawaiian Kona",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Rich and flavorful with winey acidity",
  },
  {
    id: 10,
    name: "Tanzanian Peaberry",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Fruity and complex with medium body",
  },
];

let cart = [];
let total = 0;
let isPaystackInitialized = false;

const cartModal = document.getElementById("cart-modal");
const cartItemsEl = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const cartCountEl = document.getElementById("cart-count");
const productGridEl = document.getElementById("product-grid");
const cartIcon = document.querySelector(".cart-icon");
const closeCartBtn = document.querySelector(".close-cart");
const checkoutBtn = document.querySelector(".checkout-btn");

document.getElementById("current-year").textContent = new Date().getFullYear();
function init() {
  renderProducts();
  setupEventListeners();
  loadPaystack();
}

function loadPaystack() {
  if (typeof PaystackPop === "undefined") {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      isPaystackInitialized = true;
      console.log("Paystack script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Paystack script");
    };
    document.head.appendChild(script);
  } else {
    isPaystackInitialized = true;
  }
}

function renderProducts() {
  productGridEl.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="btn" onclick="addToCart(${
                  product.id
                })">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  updateCart();
  showCartNotification(product.name);
  toggleCart();
}

function updateCart() {
  cartItemsEl.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const cartItemEl = document.createElement("div");
    cartItemEl.className = "cart-item";
    cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${(
                  item.price * item.quantity
                ).toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
    cartItemsEl.appendChild(cartItemEl);

    total += item.price * item.quantity;
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  checkoutBtn.disabled = cart.length === 0;
}

function changeQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function showCartNotification(productName) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
        <span>${productName} added to cart!</span>
    `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  if (!isPaystackInitialized) {
    alert("Payment system is still loading. Please try again in a moment.");
    return;
  }

  const transactionRef = "CAFE-" + Date.now();

  let customerEmail = config.email;
  if (!customerEmail) {
    customerEmail = prompt("Please enter your email for payment receipt:");
    if (!customerEmail) {
      alert("Email is required for payment");
      return;
    }
  }

  try {
    const paymentHandler = PaystackPop.setup({
      key: config.publicKey,
      email: customerEmail,
      amount: total * 100,
      currency: "USD",
      ref: transactionRef,
      metadata: {
        custom_fields: [
          {
            display_name: "Cart Items",
            variable_name: "cart_items",
            value: cart
              .map((item) => `${item.name} (${item.quantity})`)
              .join(", "),
          },
        ],
      },
      callback: function (response) {
        alert(`Payment successful! Reference: ${response.reference}`);

        cart = [];
        updateCart();
        closeCart();
      },
      onClose: function () {
        alert("Payment window was closed");
      },
    });

    paymentHandler.openIframe();
  } catch (error) {
    console.error("Payment error:", error);
    alert("An error occurred while processing payment. Please try again.");
  }
}

function toggleCart() {
  if (cart.length === 0 && cartModal.style.display !== "flex") {
    alert("Your cart is empty!");
    return;
  }
  cartModal.style.display =
    cartModal.style.display === "flex" ? "none" : "flex";
}

function closeCart() {
  cartModal.style.display = "none";
}

function setupEventListeners() {
  cartIcon.addEventListener("click", toggleCart);
  closeCartBtn.addEventListener("click", closeCart);
  checkoutBtn.addEventListener("click", checkout);

  document.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      closeCart();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cartModal.style.display === "flex") {
      closeCart();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
