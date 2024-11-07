// app/provider.tsx
"use client";

import { Provider } from 'react-redux';
// import { store } from '../store/store';
import type { ReactNode } from 'react';
import store from '@/redux/store';

interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

