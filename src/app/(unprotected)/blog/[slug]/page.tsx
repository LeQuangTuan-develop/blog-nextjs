import slugify from 'slugify';
import * as cheerio from 'cheerio';
import { TBlog } from '@components/page/type';
import { ApiService, END_POINT_URL_LIST } from '@services/index';
import type { Metadata } from 'next';
import { IToCData } from '@components/custom/BzbTOC';
import BlogContent from '@components/page/blog/BlogContent';
import ControlAction from '@components/page/blog/[slug]/ControlAction';
import LazyImage from '@components/custom/BzbLazyLoadImage';
import OneColumnLayout from '@layout/OneColLayout';
import {baseUrl} from "@services/base-request-model"

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogId = params.slug.split('-')[0];
  const blogData: TBlog = await ApiService.getServer(
    `${END_POINT_URL_LIST.BLOG}${blogId}/`,
  );

  return {
    title: blogData.name,
    description: blogData.description,
  };
}

function processHtmlString(html_string: string) {
  const $ = cheerio.load(html_string);
  const tocData: IToCData[] = [];

  $('h2').each((_: any, el: any) => {
    const slug = slugify($(el).text(), { lower: true });
    $(el).attr('id', slug);
    tocData.push({
      name: $(el).text(),
      eleId: slug,
    });
  });
  return {
    toc: tocData,
    htmlString: $.html(),
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const blogId = params.slug.split('-')[0];
  const blogData: TBlog = await ApiService.getServer(
    `${END_POINT_URL_LIST.BLOG}${blogId}/`,
  );
  const { htmlString, toc } = processHtmlString(blogData.html_string);

  return (
    <>
      <OneColumnLayout>
        <div className="z-10 max-w-6xl w-full p-4 md:p-8 lg:p-16">
          <div className="grid grid-cols-6 gap-3 justify-between">
            <div className="w-full text-left mb-8 md:mb-12 lg:mb-16 col-span-6 lg:col-span-4">
              <h1 className="font-bold text-3xl md:text-4xl dark:text-slate-200">
                {blogData.name}
              </h1>
              <div className="mt-4">
                <p className="text-[#636262] dark:text-slate-200 mb-2">
                  {blogData.description}
                </p>
                <div className="flex justify-left mt-5">
                  <ControlAction data={toc} />
                </div>
                {/* <ShowTocButton tocData={toc}/> */}
              </div>
            </div>
            <div className="col-span-2 hidden lg:block">
              <LazyImage
                src={baseUrl + blogData.thumbnail_image_url}
                alt={blogData.name}
                fit="contain"
                height={375}
                width={375}
              />
            </div>
          </div>
          <BlogContent html_string={htmlString} />
        </div>
      </OneColumnLayout>
    </>
  );
};

export default SingleBlogPage;
