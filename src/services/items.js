import api from './api';

export const ItemsService = {
  // Get all items
  getItems: async () => {
    const response = await api.get('/api/items/');
    return response.data;
  },
  
  // Get a single item
  getItem: async (id) => {
    const response = await api.get(`/api/items/${id}/`);
    return response.data;
  },
  
  // Create a new item
  createItem: async (data) => {
    const response = await api.post('/api/items/', data);
    return response.data;
  },
  
  // Update an existing item
  updateItem: async (id, data) => {
    const response = await api.put(`/api/items/${id}/`, data);
    return response.data;
  },
  
  // Delete an item
  deleteItem: async (id) => {
    await api.delete(`/api/items/${id}/`);
    return { success: true };
  }
};

export default ItemsService;