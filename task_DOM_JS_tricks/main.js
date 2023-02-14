const backButton = document.querySelector('#backToTop');
const header = document.querySelector('header');
const menuButton=document.querySelector('.mobile');
const nav=document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const modalButton=document.querySelector('#modalButton')
const overlay=document.querySelector('.overlay')
const close = document.querySelector('#close')

window.onscroll=function() {scrollFunction()};

const scrollFunction=()=>{
    if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
        backButton.style.display='block'
        header.classList.add('bg')
        //header.style.background='black'
       // header.style.padding='1'
     /*    header.style.color='blue' */

    }
    else{
        backButton.style.display='none'
        header.classList.remove('bg')
        //header.style.backgroundImage='linear-gradient(to right, #3e8086, #58656c)';
        //header.style.padding='0'
    }
  
      
    /*  document.body.scrollTop>200 || document.documentElement.scrollTop>200?
        backButton.style.display='block': backButton.style.display='none' */

        /* condition?true:false */
    }

    const menuClick=()=>{
        console.log('menu')


        for (const link of menuItems){
            link.addEventListener('click', menuClick)
        }
        if(nav.classList.contains('responsive')){
            nav.classList.remove('responsive');

        }
        else{
            nav.classList.add('responsive');
        }

    }

    const modalShow=()=>{
        overlay.classList.toggle('visible')
    }
  
    
    


const getToTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

console.log("back")
}
backButton.addEventListener('click',getToTop)
menuButton.addEventListener('click', menuClick)
modalButton.addEventListener('click', modalShow)
close.addEventListener('click', modalShow)

