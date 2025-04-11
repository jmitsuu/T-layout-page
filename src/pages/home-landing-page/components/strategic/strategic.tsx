import { ContainerPage } from '@/layouts/containerPage';

export function Strategic() {
  return (
    <ContainerPage>
      <div className="flex flex-col items-center w-full h-screen px-10 mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Strategic
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          This is the strategic section of the landing page.
        </p>
      </div>
    </ContainerPage>
  );
}
