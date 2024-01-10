import BzbHiddenH1 from '@components/custom/BzbHiddenH1';
import LazyImage from '@components/custom/BzbLazyLoadImage';
import { TApiResult } from '@components/page/type';
import OneColumnLayout from '@layout/OneColLayout';
import { ApiService, END_POINT_URL_LIST } from '@services/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FxEater | About us',
  description:
    "Information about FxEater, why it's created and how we could add value to this world.",
};

export interface TAboutus {
  title: string;
  description: string;
  section1_title: string;
  section1_description: string;
  section2_title: string;
  section2_description: string;
  section3_title: string;
  section3_description: string;
}

const AboutUsPage = async () => {
  const aboutusData: TApiResult<TAboutus> = await ApiService.getServer(
    END_POINT_URL_LIST.ABOUT_US,
  );
  const aboutus = aboutusData.results[0];

  return (
    <OneColumnLayout>
      <div className="z-10 max-w-6xl w-full p-4 md:p-8 lg:p-16">
        <BzbHiddenH1 text="Basic information about FxEater website and the purpose of the site." />
        <div className="flex flex-col items-start gap-8 lg:gap-24">
          <div className="flex max-w-[592px] flex-col items-start gap-8 lg:gap-14">
            <h2 className="font-bold text-3xl md:text-5xl">{aboutus.title}</h2>
            <p className="flex-col text-[#636262] dark:text-gray-100 max-[479px]:text-sm">
              {aboutus.description}
            </p>
          </div>
          <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-3">
            <LazyImage
              src={'/about-us/pic-2.svg'}
              alt={aboutus.section1_title}
              width={250}
              height={250}
              style="h-60 w-full"
            />
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-black dark:border-gray-300 p-8 rounded-xl col-span-2">
              <h2 className="font-bold text-3xl md:text-5xl">
                {aboutus.section1_title}
              </h2>
              <p className="flex-col text-[#636262] dark:text-gray-100 max-[479px]:text-sm">
                {aboutus.section1_description}
              </p>
            </div>
          </div>
          <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-3 ">
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-black dark:border-gray-300 p-8 rounded-xl col-span-2 order-last lg:order-first">
              <h2 className="font-bold text-3xl md:text-5xl">
                {aboutus.section2_title}
              </h2>
              <p className="flex-col text-[#636262] dark:text-gray-100 max-[479px]:text-sm">
                {aboutus.section2_description}
              </p>
            </div>
            <LazyImage
              src={'/about-us/pic-1.svg'}
              alt={aboutus.section2_title}
              width={250}
              height={250}
              style="h-60 w-full"
            />
          </div>
          <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-3">
            <LazyImage
              src={'/about-us/pic-3.svg'}
              alt={aboutus.section3_title}
              width={250}
              height={250}
              style="h-60 w-full"
            />
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-black dark:border-gray-300 p-8 rounded-xl col-span-2">
              <h2 className="font-bold text-3xl md:text-5xl">
                {aboutus.section3_title}
              </h2>
              <p className="flex-col text-[#636262] dark:text-gray-100 max-[479px]:text-sm">
                {aboutus.section3_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </OneColumnLayout>
  );
};

export default AboutUsPage;
