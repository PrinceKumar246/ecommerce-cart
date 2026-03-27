document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Products 1", price: 29.99 },
    { id: 2, name: "Products 2", price: 19.99 },
    { id: 3, name: "Products 3", price: 20.1 },
    { id: 4, name: "Products 4", price: 202.1 },
  ];
  const cart = [];
  const productlist = document.getElementById("product-list");
  const cartitems = document.getElementById("cart-items"); // empty-cart
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name}-$${product.price.toFixed(2)}</span> <button data-id="${product.id}"> Add to cart </button>`;
    productlist.appendChild(productDiv);
  });

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartitems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item) => {
        totalPrice += item.price;

        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        cartitems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }
  checkoutbtn.addEventListener("click", () => {
    cart.length = 0;
    alert("checkout sucessfully");
    renderCart();
  });
});
