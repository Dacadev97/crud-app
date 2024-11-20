<template>
  <div>
    <TableComponent :items="items" @edit="handleEdit" @delete="handleDelete" />
    <ModalComponent v-if="showModal" :data="selectedItem" :categories="categories" @submit="saveItem" @close="handleClose" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
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

    const handleDelete = (id) => {
      deleteItem(id);
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

    return {
      items,
      showModal,
      selectedItem,
      categories,
      handleEdit,
      handleDelete,
      saveItem,
      handleClose,
    };
  },
};
</script>