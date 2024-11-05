import toast  from 'react-hot-toast';
const getFavproduct=()=>{
    const stryFavProduct=localStorage.getItem('favorite')
    if(stryFavProduct){
        const favProduct=JSON.parse(stryFavProduct)
        return favProduct
    }
    else return []
}

const addFav=(product)=>{
  const favoriteProduct=getFavproduct()
  const CheckFav=favoriteProduct.find(p=>p.product_id===product.product_id)
  if(CheckFav){
    return toast.error ( " product already exist in Favorite ")
}
else  {favoriteProduct.push(product)
console.log(favoriteProduct)
localStorage.setItem('favorite',JSON.stringify(favoriteProduct))
return toast.success (" product add success to favorite")}
  
}
const removeFavorite=(id)=>{
    const favCartProduct=getFavproduct()
    const remaning=favCartProduct.filter(p=>p.product_id!==id)
    localStorage.setItem('favorite',JSON.stringify(remaning))
return toast.success (" product remove success to favorite")
}
export {addFav,getFavproduct,removeFavorite}
