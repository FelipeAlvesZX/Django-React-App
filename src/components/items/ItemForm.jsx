import { useForm } from 'react-hook-form';

const ItemForm = ({ initialData, onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {
      name: '',
      description: '',
      category: '',
      status: 'active',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
          Nome do Item
        </label>
        <input
          id="name"
          type="text"
          className={`input ${errors.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">
          Descrição
        </label>
        <textarea
          id="description"
          rows={3}
          className={`input ${errors.description ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
          {...register('description')}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-error-500">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-secondary-700 mb-1">
            Categorias
          </label>
          <select
            id="category"
            className={`input ${errors.category ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Selecionar Categoria</option>
            <option value="work">Trabalho</option>
            <option value="personal">Personal</option>
            <option value="hobby">Hobby</option>
            <option value="other">Outros</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-error-500">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-secondary-700 mb-1">
            Status
          </label>
          <select
            id="status"
            className={`input ${errors.status ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            {...register('status', { required: 'Status is required' })}
          >
            <option value="active">Ativo</option>
            <option value="completed">Completo</option>
            <option value="archived">Arquivado</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-error-500">{errors.status.message}</p>
          )}
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary w-full md:w-auto"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {initialData ? 'Atualizando...' : 'Salvando...'}
            </>
          ) : initialData ? 'Atualizar Item' : 'Salvar Item'}
        </button>
      </div>
    </form>
  );
};

export default ItemForm;