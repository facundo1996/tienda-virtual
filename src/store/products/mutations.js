export default {
  setProducts(state, products) {
    state.products = products
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setBuyProducts(state, product) {
    if(state.productsSelected.some(prod => prod.id === product.id)){
      state.productsSelected.forEach(oneProduct => {
        if(oneProduct.id === product.id){
          oneProduct.total = oneProduct.total +1
          state.totalProducts = state.totalProducts + 1
          state.totalPrice = state.totalPrice + product.price
        }
      });
    }else{
      state.totalPrice = state.totalPrice + product.price
      product.total = 1
      state.productsSelected.push(product)
      state.totalProducts = state.totalProducts + 1
    }
  },
  searchProduct(state, value) {
    state.valueInputSearch = value
  },
  setCategory(state, value) {
    state.categorySelected = value
  },
  clearProducts(state){
    state.productsSelected = []
    state.totalProducts = 0
    state.valueInputSearch = ''
    state.totalPrice = 0
  }
}