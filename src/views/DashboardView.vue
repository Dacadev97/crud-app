<template>
  <div>
    <TableComponent :items="items" @edit="handleEdit" @delete="handleDelete" @add-new="handleAddNew" />
    <ModalComponent v-if="showModal" :data="selectedItem" :categories="categories" @submit="saveItem" @close="handleClose" />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useCrudStore } from '../store/crudStore';
import TableComponent from '../components/TableComponent.vue';
import ModalComponent from '../components/ModalComponent.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

export default {
  components: { TableComponent, ModalComponent },
  setup() {
    const crudStore = useCrudStore();
    const { items, fetchItems, addItem, updateItem, deleteItem, fetchCategories } = crudStore;

    const showModal = ref(false);
    const selectedItem = ref(null);
    const categories = ref([]);

    onMounted(async () => {
      await fetchItems();
      await fetchCategories();
      categories.value = crudStore.categories;
    });

    const handleEdit = (item) => {
      selectedItem.value = item;
      showModal.value = true;
    };

    const handleDelete = async (_id) => {
      await deleteItem(_id);
    };

    const saveItem = (item) => {
      if (item._id) {
        updateItem(item._id, item);
      } else {
        addItem(item);
      }
      showModal.value = false;
    };

    const handleClose = () => {
      showModal.value = false;
    };

    const handleAddNew = () => {
      selectedItem.value = {
        name: '',
        category: '',
        selling_price: 0,
        product_cost: 0,
      }; // Inicializa un nuevo objeto vacío
      showModal.value = true;
    };

    watch(
      () => crudStore.items,
      (newItems) => {
        items.value = newItems;
      },
      { immediate: true }
    );

    return {
      items,
      showModal,
      selectedItem,
      categories,
      handleEdit,
      handleDelete,
      saveItem,
      handleClose,
      handleAddNew,
    };
  },
};
</script>