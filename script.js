let allTotal=0;

function addToCart(element){
    let mainEl=element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity =mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');
    
    if(parseInt(quantity)>0){
    
        price=price.substring(1)
        price=parseInt(price);
        let total=price*parseInt(quantity);
        allTotal+=total;
        cartItems.innerHTML +=`<div class="cart-single-item">
                                <h3>${name}<h3>
                                <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;
        
        document.querySelector('.total').innerText=`Korpa(ukupno): $${allTotal}`

        element.innerHTML='Dodato';
        element.setAttribute('disabled', 'true');
    }
    else{
        alert('Odaberite količinu.')
    }
    
    
    
}
function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item')
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');


    price=parseInt(price);
    allTotal-=price;
    document.querySelector('.total').innerText=`Korpa(ukupno): $${allTotal}`

    mainEl.remove();

    

    vegetables.forEach(function (vegetable){
        let itemName=vegetable.querySelector('.si-content h3').innerText;
        if(itemName==name){
            vegetable.querySelector('.actions input').value = 0;
            vegetable.querySelector('.actions button').removeAttribute('disabled');
            vegetable.querySelector('.actions button').innerText='Dodaj'
        }
        
    });


    

}