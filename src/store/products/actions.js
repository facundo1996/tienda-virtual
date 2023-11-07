import axios from 'axios';

export default {
  getProducts({ commit }) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        let products = res.data
        products.map((prod) => {
          prod.total = 0
        })
        commit('setProducts', products)
      })
  },
  buyProducts({ commit }, product) {
    commit('setBuyProducts', product)
  },
  searchProducts({ commit }, value) {
    commit('searchProduct', value)
  },
}