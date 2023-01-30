

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
calcGasoline();

const tempCon=()=>{
    const celInput = +document.querySelector('#celcius').value;
    const fahInput = +document.querySelector('#fahrenheit').value;
    const kelInput = +document.querySelector('#kelvin').value;
/* 
  






   



    

    console.log(celInput);
    console.log(fahInput);
 
   /*  console.log(kelvin); */
/*     console.log(this.id) */
    



}
tempCon();

    /*  let fOutput=celcius*(9/5)+32;
        let kOutput=celcius+273.15
    } */

  /*  let cOutput= (fahrenheit-32)*5/9;
        let kOutput= ((fahrenheit-32)*5/9)+273.15;
    } */