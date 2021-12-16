// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.


 const btn = document.getElementById('product-btn');
 const productInfo = document.forms.products;
 const linkContainer = document.querySelector('.product-link'); // pop-up link
 const newProduct = document.querySelector('.info-container');


let products = [];

let id = 0; 

btn.addEventListener('click', (e) => {
     e.preventDefault();

     let productName = productInfo.elements.productName.value;
     let productQuantity = productInfo.elements.productQuantity.value;
     let productPrice = productInfo.elements.productPrice.value;
     let productImg= productInfo.elements.productImg.value;

     if(productName === "" || productPrice === "" || productQuantity === "") {
        return;
    }
   
    id++;
    let product = {id,productName,productQuantity,productPrice,productImg};

     products.push(product);

     if (localStorage.getItem('products')){

        let oldProducts = localStorage.getItem('products');
        oldProducts = JSON.parse(oldProducts);
        
        for (const old of oldProducts) {
            if(old['productName'] === product['productName']){ 
                id--;
                return; 
            }
        }
        
        oldProducts.push(product);
        
        localStorage.setItem('products', JSON.stringify(oldProducts));

        newProduct.classList.add('new-added');
        setTimeout(() => newProduct.classList.remove('new-added'), 1000);

    } else {
        localStorage.setItem('products', JSON.stringify(products));

        newProduct.classList.add('new-added');
        setTimeout(() => newProduct.classList.remove('new-added'), 1000);
       
        linkContainer.classList.add('active');

    }

})


window.onload =  () => {
    if (localStorage.getItem('products')){
        linkContainer.classList.add('active');

     //read id value
      let products = localStorage.getItem('products');
      products = JSON.parse(products);
      id = products[products.length - 1].id
      }
}


