import { ReactNode } from 'react';

const ThreeColumnLayout = ({
  main,
  left,
  right,
}: {
  main: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
}) => {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 font-mono text-sm">
      <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
        {left}
      </div>
      <div className="lg:pl-[19.5rem]">
        <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
          {main}
          <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
            {right}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThreeColumnLayout;
