<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <div class="app-container">
      <TopBar />
      <RouterView />
  </div>
</template>

<style scoped>
</style>
