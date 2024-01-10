
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Link} from "@nextui-org/link";
import NextLink from "next/link";
import { TChartPattern } from "../page/type";
import { SlugService } from "../../services/slug-service";
import { memo } from "react";

const ChartPatternCardv2 = ({data, line = 3}:{data: TChartPattern, line?: number}) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-xl font-semibold">{data.name}</p>
          <p className="text-small text-default-500">{data.category}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className={`line-clamp-${line}`}>{data.description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          showAnchorIcon
          href={SlugService.gerateChartPatternUrl(data)}
          as={NextLink}
        >
          View more
        </Link>
      </CardFooter>
    </Card>
  );
}

export default memo(ChartPatternCardv2)