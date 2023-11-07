
<script setup>
import InputText from 'primevue/inputtext';
import ShoppingCart from './ShoppingCart.vue'
import { mapActions, mapState } from 'vuex';
</script>

<template>
  <div>
    <Toolbar class="w- my-4">
      <template #start>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-on:keyup="searchProductsKey" placeholder="Search" />
        </span>
      </template>
      <template #end>
        <ShoppingCart />
      </template>
    </Toolbar>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    ...mapActions('products', ['searchProducts']),
    searchProductsKey(e) {
      this.searchProducts(e.target.value)
    },
  },
  computed: {
    ...mapState('products', ['productsSelected', 'totalProducts']),
  }
}
</script>

<style scoped></style>
