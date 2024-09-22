'use client';

import React from 'react';

import { ThemeProvider } from './(providers)/theme.provider';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
