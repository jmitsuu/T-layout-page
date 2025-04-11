import React from 'react';

interface TContainer {
  children: React.ReactNode;
}
export function ContainerPage({ children }: TContainer) {
  return (
    <section className="w-screen min-h-screen flex flex-col px-10 mx-auto  py-20">
      {children}
    </section>
  );
}
