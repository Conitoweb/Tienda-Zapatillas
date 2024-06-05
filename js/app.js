const zapatillas = [
    {
        id : 1,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    },
    {
        id : 2,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
    ,
    {
        id : 3,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    },
    {
        id : 4,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    },
    {
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
    ,{
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
    ,{
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    },{
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
    ,{
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
    ,{
        id : 5,
        nombre : 'Nike panda',
        precio : 20000,
        talle : '43',
        info : 'STOCK A PREGUNTAR',
        imagen : './img/jordan.jpg'
    }
]

zapatillas.forEach((zapatilla) =>{

   const div = document.querySelector('.contenedor')
   const caja = document.createElement('div')
   div.appendChild(caja)
   caja.className = 'card'
   caja.innerHTML = `
   <div class="container__nombre">
       <h1 class="texto__nombre">${zapatilla.nombre}</h1>
   </div>
   <div class="container__imagen">
       <img class="imagen__card" src="${zapatilla.imagen}" alt="">
   </div>
   <div class="container__precio">
       <h3 class="texto__precio"> Precio  $${zapatilla.precio}</h3>
   </div>
   <div class="container__talla">
       <h4 class="texto__talla">Talle : ${zapatilla.talle}</h4>
   </div>
   <div class="container__info">
       <p class="texto__info">${zapatilla.info}</p>
   </div>

   <button class="btn__comprar"><a href=" https://wa.me/+543813999379" target="_blank">Whatsapp</a></button>
`


})

const COMPRAR = document.querySelector('.btn__comprar')
const MENU_ABRIR = document.querySelector('.icon-hamburguesa');
const MENU_CERRAR = document.querySelector('.closet')
const MENU_CONTENEDOR = document.querySelector('.menu')
MENU_ABRIR.addEventListener('click' ,()=>{
    MENU_CONTENEDOR.style.display = 'flex'
} )
MENU_CERRAR.addEventListener('click',()=>{
    MENU_CONTENEDOR.style.display = 'none'
} )