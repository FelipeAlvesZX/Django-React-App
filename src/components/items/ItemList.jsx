import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ItemList = ({ items, onEdit, onDelete }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-primary-500';
      case 'completed':
        return 'bg-success-500';
      case 'archived':
        return 'bg-secondary-500';
      default:
        return 'bg-secondary-300';
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'work':
        return 'Trabalho';
      case 'personal':
        return 'Personal';
      case 'hobby':
        return 'Hobby';
      case 'other':
        return 'Outros';
      default:
        return 'Desconhecidos';
    }
  };

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div 
              onClick={() => toggleExpand(item.id)}
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)} mr-3`}></div>
                <h3 className="font-medium text-secondary-900">{item.name}</h3>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-gray-100 text-gray-800 mr-2">
                  {getCategoryLabel(item.category)}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(item);
                  }}
                  className="text-primary-500 hover:text-primary-700 p-1"
                  aria-label="Edit item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                  className="text-error-500 hover:text-error-700 p-1 ml-1"
                  aria-label="Delete item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 transform ${expandedItemId === item.id ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <AnimatePresence>
              {expandedItemId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 border-t border-gray-100"
                >
                  <div className="pt-3">
                    <h4 className="text-sm font-medium text-secondary-700 mb-1">Descrição</h4>
                    <p className="text-secondary-600">
                      {item.description || 'Nenhuma descrição fornecida.'}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <div className="text-xs text-secondary-500">
                        Última Atulização: {new Date(item.updated_at || Date.now()).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ItemList;