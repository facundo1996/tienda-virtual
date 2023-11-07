import axios from 'axios';
import state from './state'

export default {
  getProducts({ commit }, url) {
    axios.get(url)
      .then(res => {
        let products = res.data
        if (state.productsSelected.length > 0) {
          state.productsSelected.forEach(prodS => {
            let index = products.findIndex(prod => prod.id === prodS.id);
            if (index !== -1) {
              products[index].total = prodS.total;
            }
            products.map((prod) => {
              if (!prod.total > 0) {
                prod.total = 0
              }
            })
          })
        } else {
          products.map((prod) => {
            prod.total = 0
          })
        }
        commit('setProducts', products)
      })
  },
  getCategories({ commit }) {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        let categories = res.data
        categories.unshift('All')
        commit('setCategories', categories)
      })
  },
  buyProducts({ commit }, product) {
    commit('setBuyProducts', product)
  },
  searchProducts({ commit }, value) {
    commit('searchProduct', value)
  },
  selectCategory({ commit }, value) {
    commit('setCategory', value)
  },
  clearProducts({ commit }) {
    commit('clearProducts')
  },
}