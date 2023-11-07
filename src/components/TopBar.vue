
<script setup>
import InputText from 'primevue/inputtext';
import ShoppingCart from './ShoppingCart.vue'
import { mapActions, mapState } from 'vuex';
import Categories from './Categories.vue';
</script>

<template>
  <div>
    <Toolbar class="toolbar-custom my-4">
      <template #start>
        <div class="cotainer-inputs-topbar">
          <span class="p-input-icon-left me-md-3 mb-3 mb-md-0">
            <i class="pi pi-search" />
            <InputText v-on:keyup="searchProductsKey" placeholder="Search" class="custom-search-input"/>
          </span>
          <Categories />
        </div>
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
