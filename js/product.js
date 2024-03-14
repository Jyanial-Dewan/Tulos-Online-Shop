const wrapper = document.querySelector('.wrapper');

async function getData() {

    const productId = new URLSearchParams(window.location.search).get("id");
   

    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();

    displayProduct(product);
}

function displayProduct(item) {

    wrapper.innerHTML = `
                        <div class="productt">
    
                            <img class="image" src="${item.image}" alt="">
                            <p class="title text-sm">${item.title}</p>
                            <p class="description text-xs">${item.description}</p>
                            <p class="price text-sm">$${item.price}</p>
                            <p class="rating text-sm">${item.rating.rate}(${item.rating.count})</p>

                        </div> 
    `
}

getData();