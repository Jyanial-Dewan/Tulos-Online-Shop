const shopProducts = document.querySelector('.shop-products');


async function getData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    products.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');
        
        div.innerHTML = `
        <a href="product.html?id=${item.id}" target="_blank">
            <img src="${item.image}">
            <p class="text-sm">${item.title}</p>
        </a> 
        <div class="product-cart">
            <p class="text-sm">$${item.price}</p> 
            <i class="fa-solid fa-cart-shopping"></i>
        </div>              
        `;

        shopProducts.appendChild(div);

    }); 
}

getData();



