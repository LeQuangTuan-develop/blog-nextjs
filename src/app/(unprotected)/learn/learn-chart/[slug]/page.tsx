import { TChartPattern } from '@components/page/type';
import OneColumnLayout from '@layout/OneColLayout';
import { ApiService, END_POINT_URL_LIST } from '@services/index';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const patternId = params.slug.split('-')[0];
  const patternData: TChartPattern = await ApiService.getServer(
    `${END_POINT_URL_LIST.CHART_PATTERN}${patternId}/`,
  );

  return {
    title: `${patternData.name} | FxEater`,
    description: patternData.description,
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const patternId = params.slug.split('-')[0];
  const patternData: TChartPattern = await ApiService.getServer(
    `${END_POINT_URL_LIST.CHART_PATTERN}${patternId}/`,
  );

  return (
    <OneColumnLayout>
      <div className="z-10 max-w-6xl w-full p-4 md:p-8 lg:p-16">
        <div className="w-full mb-8 md:mb-12 lg:mb-16">
          <h1 className="font-bold text-3xl md:text-5xl text-center">
            {patternData.name}
          </h1>
          <div className="mx-auto mt-4 max-w-[528px]">
            <p className="text-left">{patternData.description}</p>
          </div>
        </div>
      </div>
      <div className="p-4 z-10 max-w-6xl w-full rounded-md border-default-200 dark:border-default-100 bg-default-200/20 prose dark:prose-invert">
        {patternData.chart_imgs.map((image, index) => (
          <div
            key={index}
            className="w-full mb-5 flex justify-center items-center flex-col"
          >
            <h2 className="text-lg font-semibold p-3 underline underline-offset-2">
              {image.name}
            </h2>
            <img
              src={image.imgUrl}
              alt={image.name}
              width={750}
              height={750}
              className="inline-block w-full object-contain h-60"
              loading="lazy"
            />
            <p className="p-3 text-left">{image.description}</p>
          </div>
        ))}
      </div>
    </OneColumnLayout>
  );
};

export default SingleBlogPage;
