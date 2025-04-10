import { FaBoltLightning } from 'react-icons/fa6';
import notebookimg from '../../../../assets/images/landing/notebookimg2.webp';
import { ContainerPage } from '@/layouts/containerPage';
import { Button } from '@/components/ui/button';
export function Hero() {
  return (
    <div className="flex flex-col  w-full min-h-screen bg-black bg-[url(https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] md:bg-center">
      <ContainerPage>
        <div className="text-9xl  relative h-full">
          <div className="flex ">
            <div>
              <FaBoltLightning className="text-orange-500 bg-gray-700 size-25 p-4   rounded-full" />
              <FaBoltLightning className="text-white bg-orange-500 absolute left-20 size-25 p-4   rounded-full" />
            </div>
            <div className="ml-28 md:border-l-4 border-orange-500 md:pl-4">
              <h1>
                {' '}
                <strong> Welcome </strong>
                <br /> to Our <strong>Website</strong>
              </h1>
              <p className="mt-10 text-4xl font-bold text-gray-700 ">
                Your journey begins here.
              </p>
            </div>
          </div>
          <img
            src={notebookimg}
            className="h-70 rounded-xl absolute right-0 top-0"
          />
        </div>
        <div className="text-xl">
          Would you like to know more?
          <Button
            className="mt-10 cursor-pointer text-xl hover:bg-orange-500 hover:text-white font-bold"
            variant={'ghost'}
          >
            {' '}
            Click here.
          </Button>
        </div>
      </ContainerPage>
    </div>
  );
}
