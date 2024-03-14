const products = document.querySelector('.products');

async function getData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    showProducts(data);
}

function showProducts(productsData){
    productsData = productsData.slice(0,6);
    
    productsData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');

        div.innerHTML = `
                    <a href="product.html" >
                        <img src="${item.image}" alt="">
                        <p class="text-sm">${item.title}</p>
                        <p class="text-sm">$${item.price}</p>
                    </a>`;
        products.appendChild(div);     
    });
    
}

getData();