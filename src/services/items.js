import api from './api';

export const ItemsService = {
  getItems: async () => {
    const response = await api.get('/api/items/');
    return response.data;
  },
  
  getItem: async (id) => {
    const response = await api.get(`/api/items/${id}/`);
    return response.data;
  },
  
  createItem: async (data) => {
    const response = await api.post('/api/items/', data);
    return response.data;
  },
  
  updateItem: async (id, data) => {
    const response = await api.put(`/api/items/${id}/`, data);
    return response.data;
  },
  
  deleteItem: async (id) => {
    await api.delete(`/api/items/${id}/`);
    return { success: true };
  }
};

export default ItemsService;