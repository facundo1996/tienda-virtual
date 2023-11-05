<template>
  <div >
    <h1>HOLA {{ products }}</h1>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Home",
  components: {
  },
  computed:{
    ...mapState('products',['products'])
  },
  methods:{
    ...mapActions('products',['getProducts']),
  },
  mounted(){
    this.getProducts('https://fakestoreapi.com/products')
  }
}
</script>
