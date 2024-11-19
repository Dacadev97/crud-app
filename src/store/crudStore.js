import { defineStore } from "pinia";
import api from "@/services/api";

export const useCrudStore = defineStore("crud", {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    async fetchItems(page = 1, limit = 10) {
      this.loading = true;
      try {
        const response = await api.get("product", {
          params: {
            page: page,
            limit: limit,
          },
        });
        this.items = response.data.data.products;
        console.log(this.items);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async addItem(item) {
      try {
        const response = await api.post("/product", item);
        this.items.push(response.data.data.product);
      } catch (error) {
        console.error(error);
      }
    },
    async updateItem(id, item) {
      try {
        const response = await api.put(`/product/${id}`, item);
        const index = this.items.findIndex((i) => i.id === id);
        if (index !== -1) {
          this.items[index] = response.data.data.product;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      try {
        await api.delete(`/product/${id}`);
        this.items = this.items.filter((item) => item.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
