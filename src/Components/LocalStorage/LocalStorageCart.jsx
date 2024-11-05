import toast  from 'react-hot-toast';
const getAddCart=()=>{
    const stryingCart=localStorage.getItem('addCart')
    if(stryingCart){
        const addCartAry=JSON.parse(stryingCart)
        return addCartAry
    }
    else return []
}

 const addCartProduct=(product)=>{
    const addCardproduct=getAddCart()
    const checkAdd=addCardproduct.find(cart=>cart.product_id==product.product_id)
    if(checkAdd){
        return toast.error ( "product already exist in cart")
    }
    else  {addCardproduct.push(product)
    console.log(addCardproduct)
    localStorage.setItem('addCart',JSON.stringify(addCardproduct))
    return toast.success (" product add success to cart")}
}
const removeAddCart=(id)=>{
    const addCardproduct=getAddCart()
    const remaining=addCardproduct.filter(cart=>cart.product_id!==id)
    localStorage.setItem('addCart',JSON.stringify(remaining))
    return toast.success (" product remove success to cart")
}

export  {addCartProduct,getAddCart,removeAddCart};