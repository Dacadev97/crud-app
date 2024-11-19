<template>
    <div>
      <TableComponent :items="items" @edit="openModal" @delete="deleteItem" />
      <ModalComponent v-if="showModal" :data="selectedItem" @submit="saveItem" />
    </div>
  </template>
  
  <script>
  import { useCrudStore } from '../store/crudStore';
  import TableComponent from '../components/TableComponent.vue';
  import ModalComponent from '../components/ModalComponent.vue';
  
  export default {
    components: { TableComponent, ModalComponent },
    setup() {
      const crudStore = useCrudStore();
      return {
        items: crudStore.items,
        fetchItems: crudStore.fetchItems,
        addItem: crudStore.addItem,
        updateItem: crudStore.updateItem,
        deleteItem: crudStore.deleteItem,
      };
    },
  };
  </script>
  