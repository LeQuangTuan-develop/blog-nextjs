import Link from "next/link"
import { TBlog } from "../page/type"
import BzbDate from "./BzbDate"
import { memo } from "react"
import LazyImage from "./BzbLazyLoadImage"
import { SlugService } from "@services/slug-service"
import EyeIcon from "@components/icon/EyeIconSvg"
import {baseUrl} from "@services/base-request-model"

const BlogCard = ({blogData} : {blogData: TBlog}) => {

  return (
    <Link href={SlugService.gerateBlogUrl(blogData)} className="flex-col flex max-w-full grid-cols-1 gap-4 border border-solid max-[991px]:text-left items-center rounded-md border-default-200 dark:border-default-100 bg-default-200/20" >
      <LazyImage src={baseUrl + blogData.thumbnail_image_url} alt={blogData.name} style={'h-40'} height={160} width={276}/>
      <div className="w-full p-4">
        <p className="text-xs font-semibold uppercase text-[#636262] ">{blogData.sub_title}</p>
        <div className="text-lg font-semibold mb-4">{blogData.name}</div>
        <p className="text-[#636262 mb-3 lg:mb-5 hidden md:block">
          <span className="line-clamp-4">{blogData.description}</span>  
        </p>

        <div className="grid grid-cols-4 gap-2">
          <div className="flex-row flex max-w-[480px] items-start text-left col-span-3">
            <LazyImage src={baseUrl + blogData.author_info.avatar} alt={blogData.author} style='h-10 w-10 flex-none rounded-full mr-4' fit="cover" height={40} width={40}/>
            <div className="flex-col flex items-start">
              <span className="text-base">by <strong>{blogData.author}</strong></span>
              <div className="flex max-[991px]:flex-col items-start lg:items-center">
                <p className="text-sm text-[#636262]"><BzbDate text={blogData.created_at}/></p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start pt-1">
            <EyeIcon/>
            <span className="text-sm text-[#636262] ml-1">{blogData.view_count}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(BlogCard);