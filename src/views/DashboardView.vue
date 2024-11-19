<template>
  <div>
    <TableComponent :items="items" @edit="handleEdit" @delete="handleDelete" />
    <ModalComponent v-if="showModal" :data="selectedItem" @submit="saveItem" />
  </div>
</template>

<script>
import { useCrudStore } from '../store/crudStore';
import TableComponent from '../components/TableComponent.vue';
import ModalComponent from '../components/ModalComponent.vue';
import { ref, onMounted } from 'vue';

export default {
  components: { TableComponent, ModalComponent },
  setup() {
    const crudStore = useCrudStore();
    const { items, fetchItems, addItem, updateItem, deleteItem } = crudStore;

    const showModal = ref(false);
    const selectedItem = ref(null);

    onMounted(() => {
      fetchItems();
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

    return {
      items,
      showModal,
      selectedItem,
      handleEdit,
      handleDelete,
      saveItem,
    };
  },
};
</script>