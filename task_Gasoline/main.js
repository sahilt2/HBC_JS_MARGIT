

/* function gasaolinePrice(){
    const price=document.querySelector('#price')
    const money=document.querySelector('#money')
    let calculation=money/price;
    return calculation
   

}
gasaolinePrice(); */

const calcGasoline=()=>{              //modern ways to indicate money, + changes whole thing into number.
    const price = Number(document.getElementById('price').value);     //when working with inputs there has to be value
    const money = +document.querySelector('#money').value; 
    

    let text;
    const amount=Math.floor(money/price);

    if(amount>=10){
        text= `You could get about ${amount} liters,you can escape now`;

    }
    else{
        text= `Oops you have to stay, you got ${amount} liters`;
    }

    answer.textContent = text;

  /*   console.log(price)
    console.log(money) */

}

const tempCon=(id,value)=>{
    const celInput = document.querySelector('#celcius');
    const fahInput = document.querySelector('#fahrenheit');
    const kelInput = document.querySelector('#kelvin');
    const val=parseFloat(value);         //converting into number


    if (id==='celcius'){
    fahInput.value=(val*1.8+32).toFixed(2);         //toFixed is used to show how many numbers after comma
    kelInput.value=(val+273.15).toFixed(2);
    }

    if (id==='fahrenheit'){
        celInput.value=((val-32)*(5/9)).toFixed(2);
        kelInput.value=((val-32)*(5/9) + 273.15).toFixed(2);
    }
    if (id==='kelvin'){
        celInput.value=(val-273.15).toFixed(2);
        fahInput.value=((val-273.15)*(9/5) + 32).toFixed(2);
    }





  /*   celInput= (fahInput-32)*5/9 ;
    celcius.textContent=celInput; */





    /* 
    console.log(celInput);
    console.log(fahInput);
 
   /*  console.log(kelvin); */
  /*   console.log(id,value) */
    



}


    /*  let fOutput=celcius*(9/5)+32;
        let kOutput=celcius+273.15
    } */

  /*  let cOutput= (fahrenheit-32)*5/9;
        let kOutput= ((fahrenheit-32)*5/9)+273.15;
    } */

/* Celsius to Kelvin: K = C + 273.15
Kelvin to Celcius: C = K - 273.15
Fahrenheit to Celcius: C = (F-32) (5/9)
Celsius to Fahrenheit: F = C(9/5) + 32
Fahrenheit to Kelvin: K = (F-32) (5/9) + 273.15
Kelvin to Fahrenheit: F = (K-273.15) (9/5) + 32 */