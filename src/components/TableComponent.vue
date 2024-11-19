<template>
    <table class="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th class="border px-4 py-2">ID</th>
          <th class="border px-4 py-2">Nombre</th>
          <th class="border px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="border px-4 py-2">{{ item.id }}</td>
          <td class="border px-4 py-2">{{ item.name }}</td>
          <td class="border px-4 py-2">
            <button @click="edit(item)">Editar</button>
            <button @click="remove(item.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: ['items'],
    methods: {
      edit(item) {
        this.$emit('edit', item);
      },
      remove(id) {
        this.$emit('delete', id);
      },
    },
  };
  </script>
  