
<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
</script>

<template>
  <Toolbar class="w- my-4">
    <template #start>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-on:keyup="searchProductsKey" placeholder="Search" />
      </span>
    </template>
    <template #end>
      <Button><i style="font-size: 22px" class="pi pi-shopping-cart"></i></Button>
    </template>
  </Toolbar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'TopBar',
  methods: {
    ...mapActions('products', ['searchProducts']),
    searchProductsKey(e) {
      this.searchProducts(e.target.value)
    }
  }
}
</script>

<style scoped></style>
