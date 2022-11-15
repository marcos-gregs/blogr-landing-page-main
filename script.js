const productMenu = document.querySelector('.activeProductMenu')
const companyMenu = document.querySelector('.activeCompanyMenu')
const connectMenu = document.querySelector('.activeConnectMenu')
// Nav Product
productMenu.addEventListener('click',function enableMenu(){
    
    const listProduct = document.querySelector('.ProductMenu')
    if( listProduct.id == 'off'){
        listProduct.removeAttribute('id')
    }else{
        listProduct.id = 'off'
    }

})
// Nav Company
companyMenu.addEventListener('click',()=>{
    const listProduct = document.querySelector('.companyMenu')
    if(listProduct.id == 'off'){
        listProduct.removeAttribute('id')
    }else{
        listProduct.id ='off'
    }
})

// Nav Connect
connectMenu.addEventListener('click',()=>{
    const listProduct =document.querySelector('.connectMenu')
    if(listProduct.id ==='off'){
        listProduct.removeAttribute('id')
    }else{
        listProduct.id = 'off'
    }    
})

//   if(activeMenu.className == 'arrow-up'){
//     activeMenu.className.remove('arrow-up')
//     alert(activeMenu.classList)
//   }
  
  
