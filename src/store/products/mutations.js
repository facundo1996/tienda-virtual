export default {
  setProducts(state, products) {
    state.products = products
    state.errorProducts = ""
  },
  setBuyProducts(state, product) {
    if(state.productsSelected.some(prod => prod.id === product.id)){
      state.productsSelected.forEach(oneProduct => {
        if(oneProduct.id === product.id){
          oneProduct.total = oneProduct.total +1
        }
      });
    }else{
      let selectedProduct = product
      selectedProduct.total = 1
      state.productsSelected.push(selectedProduct)
    }
    console.log(state.productsSelected)
  },
  searchProduct(state, value) {
    state.valueInputSearch = value
  }
}