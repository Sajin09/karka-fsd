// Fetch JSON data and render product cards
fetch('../Json/com.json')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products-container');

        for (let i = 0; i < data.Products.length; i++) {
            const product = data.Products[i];
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <img src="${product.img}" class="card-img-top Nike" id="Nike" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text price">Price: Rs. ${product.price}</p>
                        <p class="card-text">${product.description}</p>
                        <button class="button add-to-cart" data-product='${JSON.stringify(product)}'>Add to Cart</button>
                    </div>
                </div>
            `;

            productsContainer.appendChild(card);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));



document.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart')) {
      const productData = JSON.parse(event.target.dataset.product);
    //   console.log('Product data:', productData); 
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      console.log('Existing cart items:', cartItems); 
      cartItems.push(productData);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
});