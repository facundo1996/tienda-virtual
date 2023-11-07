<script setup>
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import OrderList from 'primevue/orderlist';
</script>
<template>
  <div class="card flex justify-content-center shopping-cart-container">
    <Sidebar :visible="visible" @update:visible="value => visible = value" class="custom-slidebar">
      <h2 class="ps-3">Shop</h2>

      <OrderList :OrderListState="false" v-model="productsSelected" listStyle="height:large" dataKey="id">
        <template #header>
          <div class="header-shop">
            <span>List of Products</span>
            <Button class="btn btn-danger" @click="clearProductsList" >Clear</Button>
          </div>
        </template>

        <template #item="slotProps">
          <div class="d-flex justify-content-between w-100 custom-row">
            <img class="w-4 rem shadow-2 flex-shrink-0 border-round image-list" :src="slotProps.item.image"
              :alt="slotProps.item.name" />
            <div class="d-flex flex-column justify-content-between align-items-end">
              <div>
                <div class="font-bold">{{ slotProps.item.name }}</div>
                <div class="d-flex align-items-center">
                  <i class="pi pi-tag me-2 mt-1"></i>
                  <span class="title-product">{{ slotProps.item.title }}</span>
                </div>
              </div>
              <div class="d-flex">
                <span class="font-bold text-900 me-2"><i class="pi pi-shopping-cart"></i> {{ slotProps.item.total  }}</span>
                <span class="font-bold text-900">$ {{ slotProps.item.price * slotProps.item.total  }}</span>
              </div>
            </div>
          </div>
        </template>
      </OrderList>
      <div class="buttons-confirm-pay">
        <div class="border border-1 rounded-3 total-p fs-5">Price: ${{totalPrice.toFixed(2)}}</div>
        <div class="btn-pay">
          <Button class="fs-5">Confirm and Pay</Button>
        </div>
      </div>

    </Sidebar>
    <Button @click="visible = true" class="btn-shopping-cart">
      {{ totalProducts }}
      <i style="font-size: 22px" class="pi pi-shopping-cart ms-2"></i>
    </Button>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "ShoppingCart",
  data() {
    return {
      visible: false,
      total: 0
    }
  },
  components: {},
  computed: {
    ...mapState('products', ['productsSelected', 'totalProducts', 'totalPrice']),
  },
  methods: {
    ...mapActions('products', ['getProducts', 'buyProducts', 'clearProducts']),
    clearProductsList(){
      this.clearProducts()
      this.getProducts('https://fakestoreapi.com/products')
    }
  },
}
</script>
