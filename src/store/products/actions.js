import axios from 'axios';

export default {
  getProducts({ commit }) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        commit('setProducts', res.data)
      })
  },
  buyProducts({ commit }, product) {
    commit('setBuyProducts', product)
  },
  searchProducts({ commit }, value) {
    commit('searchProduct', value)
  },
}