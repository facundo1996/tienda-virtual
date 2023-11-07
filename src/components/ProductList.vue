<script setup>
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
</script>
<template>
  <div class="card" v-if="products.length > 0">
    <DataTable class="table-custom" scrollable scrollHeight="calc(100vh - 330px" :value="valueInputSearch ?titlesFilter :products" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Products{{ categorySelected }}</span>
        </div>
      </template>
      <Column class="custom-column" field="title" header="Name" />
      <Column class="" header="Image">
        <template #body="slotProps">
          <div class="image-container">
            <img :src="`${slotProps?.data?.image}`" :alt="matchingProducts.image" class="p-4 shadow rounded-3 product-image" />
          </div>
        </template>
      </Column>
      <Column class="" header="Price">
        <template #body="slotProps">
          ${{ slotProps.data.price }}
        </template>
      </Column>
      <Column class="" field="category" header="Category"></Column>
      <Column header="" >
        <template #body="slotProps">
          <Button @click="buyProduct(slotProps.data)" >{{slotProps.data.total}}<i style="font-size: 22px" class="pi ms-2 pi-shopping-cart"></i></Button>
        </template>
      </Column>
      <template #footer> In total there are {{ products ? matchingProducts.length : 0 }} products. </template>
    </DataTable>
  </div>
  <div class="container-loader" v-else>
    <div class="loader"></div>
    <h3 class="mt-3 ">Loading...</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "ProductList",
  data(){
    return {
      matchingProducts: [],
    }
  },
  components: {},
  computed: {
    ...mapState('products', ['products', 'valueInputSearch', 'categorySelected']),
    titlesFilter() {
      const textSearch = this.valueInputSearch.toLowerCase();
      return this.matchingProducts.filter(prod => prod.title.toLowerCase().includes(textSearch));
    }
  },
  methods: {
    ...mapActions('products', ['getProducts', 'buyProducts', 'getCategories']),
    buyProduct(productSelected){
      this.buyProducts(productSelected)
    },
  },
  async created(){
    this.getProducts('https://fakestoreapi.com/products')
    this.getCategories()
  },
  updated() {
    this.matchingProducts = this.products
  }
}
</script>
