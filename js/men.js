const menProducts = document.querySelector('.men-products');

async function getData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    showMenProducts(data);
}

function showMenProducts(products){
   products.forEach(item => {
        if(item.category === "men's clothing"){
            const div = document.createElement('div');
            div.classList.add('product');

            div.innerHTML = `
                    <a href="product.html" >
                        <img src="${item.image}" alt="">
                        <p class="text-sm">${item.title}</p>
                        <p class="text-sm">$${item.price}</p>
                    </a>`;
            menProducts.appendChild(div);
        }
    });
}

getData();