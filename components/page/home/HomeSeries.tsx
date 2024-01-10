import { ApiService, END_POINT_URL_LIST } from "../../../services";
import SeriesCard from "../../custom/SeriesCard";
import { TSeries } from "../type";

type TApiResult<T> = {
  results: T[]
}


const HomeSeries = async () => {

  const series: TApiResult<TSeries> = await ApiService.getServer(END_POINT_URL_LIST.BLOG_SERIES)

  return (
    <>
      <div className="w-full text-center mb-8 md:mb-12 lg:mb-16 mt-8 md:mt-12 lg:mt-16 dark:text-slate-200">
        <h2 className="font-bold text-3xl md:text-5xl">All Series</h2>
        <div className="mx-auto mt-4 max-w-3xl">
          <p className="text-[#636262] dark:text-gray-100">Read by series, just more fun.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
        {
          series?.results && series.results.map((item, index) => <SeriesCard item={item} key={`series-${item.id}`}/>)
        }
      </div>
    </>
  )
}

export default HomeSeries;