import { ApiService, END_POINT_URL_LIST } from "../../../services";
import { TApiResult, TBlog } from "../type";
import BlogCard from "../../custom/BlogCard";
import BzbHiddenH1 from "../../custom/BzbHiddenH1";
import LoadMore from "./BlogListClient";

const AllBlogList = async () => {

  const homeBlog: TApiResult<TBlog> = await ApiService.getServer(END_POINT_URL_LIST.BLOG) 

  return (
    <>
      <BzbHiddenH1 text="FxEater blog about topic in trading, forex market, MT4, MT5 autotrade robot, ... and more."/>
      <div className="w-full text-center mb-8 md:mb-12 lg:mb-16 dark:text-slate-200">
        <h2 className="font-bold text-3xl md:text-5xl">All blogs</h2>
        <div className="mx-auto mt-4 max-w-3xl">
          <p className="text-[#636262] dark:text-gray-100">We are trying new things, so that you can save yours resource not have to try again.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
        {
          homeBlog.results.map(item => <BlogCard blogData={item} key={item.id}/>)
        }
      <LoadMore/>
      </div>
    </>
  )
}

export default AllBlogList;