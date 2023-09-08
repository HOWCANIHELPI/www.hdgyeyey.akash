let menue=document.querySelector('#nav')
let bar=document.querySelector('.ba')
let cr=document.querySelector('.fa-xmark')
let html=document.querySelector('html')
let body=document.querySelector('body')

bar.onclick=()=>{
  menue.style.transform='translateX(40%)'
  html.style.overflowY='hidden'
  body.style.overflowY='hidden'
}
cr.onclick=()=>{
  menue.style.transform='translateX(200%)'
  html.style.overflowY='auto'
  body.style.overflowY='auto'
}

let input=document.querySelector('.input');
let ia=document.querySelector('.ia');
input.onsubmit=(e)=>{
  e.preventDefault();
  ia.value='processing...';
  ia.style.color='green'
  setTimeout(()=>{
    alert('Now you are the member of TOYTO')
    ia.value='Connected Successfully';
  },5000)
}


/*shop image click function*/
let mainImg = document.querySelector('.main_img')

let subImg = document.querySelector('.subimg_div');
subImg.onclick = (e) => {
 mainImg.src=e.target.src;
}
