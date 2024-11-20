<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-2xl font-bold mb-4">Editar Item</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nombre</label>
          <input
            v-model="formData.name"
            id="name"
            type="text"
            placeholder="Nombre"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="category">Categoría</label>
          <select
            v-model="formData.category"
            id="category"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Seleccione una categoría</option>
            <option v-for="category in categories" :key="category._id" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Precio</label>
          <input
            v-model="formData.selling_price"
            id="price"
            type="number"
            placeholder="Precio"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="cost">Costo</label>
          <input
            v-model="formData.product_cost"
            id="cost"
            type="number"
            placeholder="Costo"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar
          </button>
          <button
            type="button"
            @click="$emit('close')"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'categories'],
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