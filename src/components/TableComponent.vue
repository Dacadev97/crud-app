<template>
  <div class="w-full overflow-x-auto">
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">ID</th>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Categoría</th>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Precio</th>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Costo</th>
          <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in items" :key="item._id" class="hover:bg-gray-100">
          <td class="px-4 py-2 whitespace-nowrap">{{ item._id }}</td>
          <td class="px-4 py-2 whitespace-nowrap">{{ item.name }}</td>
          <td class="px-4 py-2 whitespace-nowrap">{{ item.category.name }}</td>
          <td class="px-4 py-2 whitespace-nowrap">{{ item.selling_price }}</td>
          <td class="px-4 py-2 whitespace-nowrap">{{ item.product_cost }}</td>
          <td class="px-4 py-2 whitespace-nowrap">
            <button @click="edit(item)" class="text-blue-600 hover:text-blue-900">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="remove(item._id)" class="text-red-600 hover:text-red-900 ml-2">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
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

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}
</style>