<template>
    <div class="modal">
      <form @submit.prevent="submit">
        <input v-model="formData.name" placeholder="Nombre" />
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['data'],
    data() {
      return {
        formData: { ...this.data },
      };
    },
    methods: {
      submit() {
        this.$emit('submit', this.formData);
      },
    },
  };
  </script>
  