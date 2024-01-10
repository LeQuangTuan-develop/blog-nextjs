import Link from "next/link";
import { TChartPattern } from "../page/type";
import { SlugService } from "../../services/slug-service";
import {Divider} from "@nextui-org/divider";
import { memo } from "react";


const ChartPatternCard = ({data, line = 3}:{data: TChartPattern, line?: number}) => {

  return (
    <>
      <div className="border px-4 py-3 rounded-xl border-default-200 dark:border-default-100 bg-default-200/20">
        <Link href={SlugService.gerateChartPatternUrl(data)} className="block text-xl font-bold">{data.name}</Link> 
        <p className="mb-3 text-xs">#{data.category}</p>
        <Divider/>
        <p className={`line-clamp-${line} my-3`}>{data.description}</p>
        <Divider/>
        <Link  className="block underline mt-3 text-right" href={SlugService.gerateChartPatternUrl(data)}>
          Read more
        </Link> 
      </div>
    </>
  )
}

export default memo(ChartPatternCard);