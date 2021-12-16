// list page
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const productsContainer = document.querySelector('.products-container');

if (localStorage.getItem('products')) {
    let productsArray = localStorage.getItem('products');
    productsArray = JSON.parse(productsArray);

    for (const product of productsArray) {
        let productContainer = document.createElement('div');

        let deleteOneItem = document.createElement('button');

        deleteOneItem.classList.add('delete-one');
        deleteOneItem.innerText = 'Delete';

       

        deleteOneItem.setAttribute('product-id', product.id)

        for (const key in product) {
            let keyWrapper = document.createElement('div');

            if (key === 'productImg') {
                keyWrapper.innerHTML = `<img src = ${product[key]}>`;
            } else {
                keyWrapper.innerHTML = `<span>${key}:</span> <span>${product[key]}</span>`

            }
            productContainer.append(keyWrapper);
        }
        productContainer.append(deleteOneItem);


        productsContainer.append(productContainer);

    }
}

// Remove all

const deleteBtn = document.querySelector('.delete-btn');

deleteBtn.onclick = () => {
    if (localStorage.getItem('products')) {

        productsContainer.remove();

        window.localStorage.clear();

        window.location.href = 'index.html';
    }
}
const deleteOneItemBtns = document.querySelectorAll('.delete-one');

// remove one

let indexDeletedItem = - 1;

deleteOneItemBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let productID = Number(btn.getAttribute('product-id'));

        let productsArray = localStorage.getItem('products');
        productsArray = JSON.parse(productsArray);

        for (let i = 0; i < productsArray.length; i++) {
            const element = productsArray[i];
            indexDeletedItem = (element.id === productID) ? i : indexDeletedItem;
        }
        productsArray = productsArray.splice(indexDeletedItem, 1);

        localStorage.setItem('products', JSON.stringify(productsArray));
    })
})



