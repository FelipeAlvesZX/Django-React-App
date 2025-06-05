import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const { register: registerUser, isAuthenticated } = useAuth();
  const [apiError, setApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  const password = watch('password', '');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setApiError('');

    try {
      const result = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        navigate('/login', { 
          state: { message: 'Cadastro realizado com sucesso! Faça login com sua nova conta..' } 
        });
      } else {
        setApiError(result.message);
      }
    } catch (error) {
      setApiError('Ocorreu um erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center bg-gray-50">
      <div className="container-fluid max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-secondary-900">Crie uma conta</h1>
            <p className="mt-2 text-secondary-600">Junte-se a nós para começar</p>
          </div>

          {apiError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-3 rounded-md bg-error-500/10 text-error-500 text-sm"
            >
              {apiError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-secondary-700 mb-1">
                Nome do usuário
              </label>
              <input
                id="username"
                type="text"
                className={`input ${errors.username ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                {...register('username', { 
                  required: 'Nome de usuário é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O nome de usuário deve ter pelo menos 3 caracteres'
                  }
                })}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-error-500">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`input ${errors.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                {...register('email', { 
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className={`input ${errors.password ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                {...register('password', { 
                  required: 'Senha obrigatória',
                  minLength: {
                    value: 8,
                    message: 'A senha deve ter pelo menos 8 caracteres'
                  }
                })}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-error-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700 mb-1">
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                type="password"
                className={`input ${errors.confirmPassword ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                {...register('confirmPassword', { 
                  required: 'Por favor confirme sua senha',
                  validate: value => value === password || 'As senhas não correspondem'
                })}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-error-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className={`h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-300 rounded ${errors.terms ? 'border-error-500' : ''}`}
                {...register('terms', { required: 'Você deve concordar com os termos e condições' })}
              />
              <label htmlFor="terms" className={`ml-2 block text-sm ${errors.terms ? 'text-error-500' : 'text-secondary-700'}`}>
                Eu concordo com o{' '}
                <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                  Termos e Condições
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-sm text-error-500">{errors.terms.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Criando conta...
                </>
              ) : 'Criar conta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium">
                Entrar
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;