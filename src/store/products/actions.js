import axios from 'axios';

export default{
  getProducts( {commit}, url ){
    axios.get(url)
      .then(res => {
        commit('setProducts', res.data)
      })
  }
}