import { ReactNode } from 'react';

const OneColumnLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-mono text-sm">
      {children}
    </main>
  );
};

export default OneColumnLayout;
