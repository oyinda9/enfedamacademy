<!-- layouts/default.vue -->
<template>
    <div>
      <HeaderComponent />
      <slot />
      <FooterComponent />
    </div>
  </template>
  
  <script setup>
  import HeaderComponent from '../components/header.vue';
  import FooterComponent from '../components/footer.vue';
  </script>
  