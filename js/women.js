const womenProducts = document.querySelector('.women-products');

async function getData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    showWomenProducts(data);
}

function showWomenProducts(products){
    products.forEach(item => {
        if(item.category === "women's clothing"){
            const div = document.createElement('div');
            div.classList.add('product');

            div.innerHTML = `
                    <a href="product.html" >
                        <img src="${item.image}" alt="">
                        <p class="text-sm">${item.title}</p>
                        <p class="text-sm">$${item.price}</p>
                    </a>`;
            womenProducts.appendChild(div);
        }
    });
}

getData();