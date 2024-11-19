import { defineStore } from "pinia";
import api from "../services/api"; // Importa la instancia de axios configurada

export const useCrudStore = defineStore("crud", {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    async fetchItems() {
      this.loading = true;
      try {
        const response = await api.get("product");
        this.items = response.data.data.products;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async addItem(item) {
      try {
        const response = await api.post("/product", item);
        this.items.push(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateItem(id, updatedItem) {
      try {
        await api.put(`/items/${id}`, updatedItem);
        const index = this.items.findIndex((item) => item._id === id);
        if (index !== -1) {
          this.items[index] = { ...this.items[index], ...updatedItem };
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      try {
        await api.delete(`/items/${id}`);
        this.items = this.items.filter((item) => item._id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
