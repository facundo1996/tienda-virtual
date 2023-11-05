import { createStore } from "vuex";
import products from './products/index'

export const store = createStore({
  modules:{
    products,
  }
})