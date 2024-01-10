import Link from "next/link"
import { ApiService, END_POINT_URL_LIST } from "../../../services"
import { TApiResult, TChartPattern } from "../type"
import ChartPatternCard from "../../custom/ChartPatternCard"

const HomeChartPattern = async () => {

  const homeChartPattern: TApiResult<TChartPattern> = await ApiService.getServer(END_POINT_URL_LIST.CHART_PATTERN)
  
  return (
    <>
      <div className="w-full text-center mb-8 md:mb-12 lg:mb-16 dark:text-slate-200">
        <h2 className="font-bold text-3xl md:text-5xl">Chart Patterns</h2>
        <div className="mx-auto mt-4 max-w-[528px]">
          <p className="text-[#636262] dark:text-gray-100">Learn basic price action&apos;s Chart Pattern.</p>
        </div>
        <div className="pt-4">
          <Link  href={'learn/learn-chart'}>
            <button type='submit' className="bg-blue-700 hover:bg-blue-900 px-4 py
            2 rounded-md font-semibold text-white transition duration-200 ease-in-out">View more</button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
        {
          homeChartPattern.results.map(item => <ChartPatternCard key={item.id} data={item} line={4} />)
        }
      </div>
    </>
  )
}

export default HomeChartPattern

