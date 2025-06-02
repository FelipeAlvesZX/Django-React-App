import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import ItemForm from '../components/items/ItemForm';
import ItemList from '../components/items/ItemList';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const queryClient = useQueryClient();

  // Fetch items from the API
  const { data: items = [], isLoading, error } = useQuery('items', async () => {
    const response = await api.get('/api/items/');
    return response.data;
  });

  // Add new item mutation
  const addItemMutation = useMutation(
    (newItem) => api.post('/api/items/', newItem),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('items');
        setIsFormOpen(false);
        setEditingItem(null);
      },
    }
  );

  // Update item mutation
  const updateItemMutation = useMutation(
    (updatedItem) => api.put(`/api/items/${updatedItem.id}/`, updatedItem),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('items');
        setIsFormOpen(false);
        setEditingItem(null);
      },
    }
  );

  // Delete item mutation
  const deleteItemMutation = useMutation(
    (itemId) => api.delete(`/api/items/${itemId}/`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('items');
      },
    }
  );

  const handleAddItem = (data) => {
    addItemMutation.mutate(data);
  };

  const handleUpdateItem = (data) => {
    updateItemMutation.mutate({ ...data, id: editingItem.id });
  };

  const handleDeleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItemMutation.mutate(itemId);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container-fluid max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900">Dashboard</h1>
            <p className="text-secondary-600 mt-1">
              Welcome back, {user?.username || 'User'}
            </p>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setIsFormOpen(!isFormOpen);
            }}
            className="btn btn-primary"
          >
            {isFormOpen ? 'Cancel' : 'Add New Item'}
          </button>
        </div>

        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h2>
              <ItemForm
                initialData={editingItem}
                onSubmit={editingItem ? handleUpdateItem : handleAddItem}
                isLoading={addItemMutation.isLoading || updateItemMutation.isLoading}
              />
            </div>
          </motion.div>
        )}

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          
          {isLoading ? (
            <div className="py-8 flex justify-center">
              <svg className="animate-spin h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : error ? (
            <div className="py-6 text-center">
              <p className="text-error-500">Error loading items. Please try again.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="py-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-secondary-900">No items found</h3>
              <p className="mt-1 text-secondary-500">Get started by creating a new item.</p>
              <button 
                onClick={() => {
                  setEditingItem(null);
                  setIsFormOpen(true);
                }}
                className="mt-4 btn btn-primary"
              >
                Add Item
              </button>
            </div>
          ) : (
            <ItemList
              items={items}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;