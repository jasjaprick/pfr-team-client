import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserList } from './components';
import './style.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import UserForm from './components/UserForm';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <UserForm />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
