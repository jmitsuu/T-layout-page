import { Outlet } from 'react-router';

export function DefaultPage() {
  return (
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
