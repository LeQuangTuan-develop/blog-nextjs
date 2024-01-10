import Link from "next/link";
import { TSeries } from "../page/type";
import { SlugService } from "../../services/slug-service";
import { memo } from "react";
import {Divider} from "@nextui-org/divider";

const SeriesCard = ({item}:{item: TSeries}) => {
  return (
    <>
      <div className="flex-[1_1_500px]">
        <div className="mb-6 w-full border p-8 rounded-md border-default-200 dark:border-default-100 bg-default-200/20">
          <div className="flex cursor-pointer items-start justify-between">
            <div className="text-xl font-bold">{item.name}</div>
            <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
              <div className="absolute h-5 w-0.5 bg-[#276ef1]">
              </div>
              <div className="h-0.5 w-5 bg-[#276ef1]">
              </div>
            </div>
          </div>
          <Divider className="my-4"/>
          <div className="overflow-hidden mb-4 mt-4">
            {
              item.blogs.map(blog => <Link href={SlugService.gerateBlogUrl(blog)} className="block mt-2" key={`${item.id}-${blog.id}`}>{blog.name}</Link>)
            }
          Divider</div>
        </div>
      </div>
    </>
  )
}

export default memo(SeriesCard);
