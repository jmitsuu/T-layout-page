export function ContainerPage({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-screen flex flex-col px-10 mx-auto min-h-screen py-40">
      <div className=" ">{children}</div>
    </section>
  );
}