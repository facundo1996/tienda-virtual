<script setup>
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
</script>
<template>
  <div class="card">
    <DataTable scrollable :value="valueInputSearch ?nombresFiltrados :products" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Products</span>
        </div>
      </template>
      <Column class="custom-column" field="title" header="Name">
        <template>
          <div class="column-title">
            {{ matchingProducts.title }}
          </div>
        </template>
      </Column>
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
          <Button @click="buyProduct(slotProps.data)" ><i style="font-size: 22px" class="pi pi-shopping-cart"></i></Button>
        </template>
      </Column>
      <template #footer> In total there are {{ products ? matchingProducts.length : 0 }} products. </template>
    </DataTable>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "ProductList",
  data(){
    return {
      matchingProducts: []
    }
  },
  components: {},
  computed: {
    ...mapState('products', ['products', 'valueInputSearch']),
    nombresFiltrados() {
      const textSearch = this.valueInputSearch.toLowerCase();
      return this.matchingProducts.filter(prod => prod.title.toLowerCase().includes(textSearch));
    }
  },
  methods: {
    ...mapActions('products', ['getProducts', 'buyProducts']),
    buyProduct(productSelected){
      this.buyProducts(productSelected)
    },
  },
  created(){
    this.getProducts();
  },
  updated() {
    this.matchingProducts = this.products
  }
}
</script>
