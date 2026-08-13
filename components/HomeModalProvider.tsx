'use client';

import { createContext, useContext, type ReactNode } from 'react';

const HomeModalContext = createContext<(() => void) | null>(null);

export function HomeModalProvider({
  openModal,
  children,
}: {
  openModal: () => void;
  children: ReactNode;
}) {
  return <HomeModalContext.Provider value={openModal}>{children}</HomeModalContext.Provider>;
}

export function useHomeModal() {
  return useContext(HomeModalContext) ?? (() => {});
}
