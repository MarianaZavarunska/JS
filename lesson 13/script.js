// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

 const btn = document.getElementById('product-btn');
 const productInfo = document.forms.products;


let products = [];

btn.addEventListener('click', (e) => {
     e.preventDefault();

     let productName = productInfo.elements.productName.value;
     let productQuantity = productInfo.elements.productQuantity.value;
     let productPrice = productInfo.elements.productPrice.value;
     let productImg= productInfo.elements.productImg.value;

     if(productName === "" || productPrice === "" ||productQuantity=== "") {
        return;
    }

     let product = {productName,productQuantity,productPrice,productImg};
     products.push(product);

     if (localStorage.getItem('products')){

        let oldProducts = localStorage.getItem('products');
        oldProducts = JSON.parse(oldProducts);
        
        for (const old of oldProducts) {
            if(old['productName'] === product['productName']) return; 
        }
        oldProducts.push(product);

        localStorage.setItem('products', JSON.stringify(oldProducts));
    } else {
        localStorage.setItem('products', JSON.stringify(products));
    }

})
