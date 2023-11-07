<script setup>
import Dropdown from 'primevue/dropdown';
</script>

<template>
  <div class="card flex justify-content-center dropdown-container">
    <Dropdown v-model="categorySelected" :options="categories" :optionLabel="categories[index]"
      placeholder="Select a Category" class="custom-dropdown" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Categories",
  data() {
    return {
      categorySelected: ''
    }
  },
  components: {},
  computed: {
    ...mapState('products', ['products', 'valueInputSearch', 'categories']),
  },
  methods: {
    ...mapActions('products', ['getProducts', 'buyProducts', 'selectCategory']),
    getProductsWithCategories() {
      if (this.categorySelected && this.categorySelected != 'All') {
        this.getProducts(`https://fakestoreapi.com/products/category/${this.categorySelected}`);
      } else if (this.categorySelected === 'All') {
        this.getProducts('https://fakestoreapi.com/products');
      }
    }
  },
  watch: {
    'categorySelected': {
      handler: 'getProductsWithCategories',
      immediate: true
    }
  },
  created() {

  },
  updated() {
  }
}
</script>

