const form = document.querySelector('form');


//All inputs
const customerName= document.querySelector('#name');
const inputSize = document.querySelectorAll('input[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const eatOption = document.querySelector('#eat-option');


//All outputs
const finalResult= document.querySelector('#finalprice');
const orderSize = document.querySelector('#order-size');
const orderName = document.querySelector('#order-name');
const orderToppings = document.querySelector('#order-toppings');
const orderDelivery = document.querySelector('#order-delivery');
const orderPrice = document.querySelector('#order-price');


const pizzaPriceCal=()=>{
    let customer= customerName.value;
    let sizePizzaResult= '';
    let toppingsResult= [];
    let deliveryResult= eatOption.options[eatOption.selectedIndex].value;

    let price=0;

    inputSize.forEach((item) => {
         if(item.checked){
            sizePizzaResult =item.value;
            sizeText=` ${sizePizzaResult} cm Pizza`;
         }
    });

    switch(sizePizzaResult){
        case "2":
            price+= 7.5;
            orderSize.textContent= sizeText;
            break;

        case "4":
            price+=10.5;
            orderSize.textContent=sizeText;
            break;
        case "6":
            price+=12.5;
            orderSize.textContent=sizeText;
            break;
        case "8":
            price+=15.5;
            orderSize.textContent=sizeText;
            break;
            default:
    }
    toppings.forEach((item)=>{
         if(item.checked){
            toppingsResult.push(item.value);
    
         }

    });
    if ( toppingsResult.length>4){
        price+=(toppingsResult.length-4)*0.5;
    }

    if(deliveryResult==="home"){
        price+=5;
    }
    if(deliveryResult!="none"){
        orderDelivery.textContent=` ${deliveryResult}`;

    }

    
    



orderName.textContent=` ${customer}`;

orderPrice.textContent= ` ${price}€`;
orderToppings.textContent= toppingsResult.join(',');

}


form.addEventListener('input', pizzaPriceCal);
