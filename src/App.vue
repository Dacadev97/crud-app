<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-primary text-white py-4 shadow-md">
      <h1 class="text-center text-2xl font-bold">Aplicación CRUD - Optimun Soft</h1>
    </header>
    <main class="container mx-auto p-4">
      <!-- Carga la vista principal -->
      <DashboardView />
    </main>
  </div>
</template>

<script>
import DashboardView from './views/DashboardView.vue';

export default {
  name: 'App',
  components: {
    DashboardView,
  },
};
</script>

<style>
/* Estilo global opcional */
body {
  font-family: 'Work Sans', sans-serif;
  margin: 0;
}
</style>
