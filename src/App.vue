<template>

  <div>
    <sideBar />
    <RouterView />
  </div>

</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router'
import sideBar from './components/sideBar.vue';
</script>

<style></style>