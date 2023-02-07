const form = document.querySelector('form');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const directions = document.querySelectorAll('input[name="direction"]')
const content = document.querySelector('#content')


const bgGenerator = ()=>{

    console.log('color one', color1.value);
    console.log('color one', color2.value);
    console.log(directions)

    let dirValue, text;

    for (const item of directions){
        if(item.checked){
            dirValue = item.value;
        }

    }

   
    text= `linear-gradient(${dirValue}, ${color1.value},${color2.value})`
    document.body.style.backgroundImage= text;
    content.textContent=text;

};

form.addEventListener('change',bgGenerator);