import Link from "next/link";
import { ApiService, END_POINT_URL_LIST } from "../../../services";
import BlogCard from "../../custom/BlogCard";
import { TBlog, TApiResult } from "../type";

const HomeBlog = async () => {

  const homeBlog: TApiResult<TBlog> = await ApiService.getServer(END_POINT_URL_LIST.HOME_BLOG)

  return (
    <>
      <div className="w-full text-center mb-8 md:mb-12 lg:mb-16 dark:text-slate-200">
        <h2 className="font-bold text-3xl md:text-5xl">Recent blogs</h2>
        <div className="mx-auto mt-4 max-w-[528px]">
          <p className="text-[#636262] dark:text-gray-100">We are trying new things, so that you can save yours resource not have to try again.</p>
        </div>
        <div className="pt-4">
          <Link  href={'blog'}>
            <button type='submit' className="bg-blue-700 hover:bg-blue-900 px-4 py
            2 rounded-md font-semibold text-white transition duration-200 ease-in-out">View more</button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
        {
          homeBlog.results.map(item => <BlogCard blogData={item} key={item.id}/>)
        }
      </div>
    </>
  )
}

export default HomeBlog;