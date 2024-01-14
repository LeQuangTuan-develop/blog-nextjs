import Link from "next/link"
import { memo } from "react"

const Footer = () => {
  return (
    <footer className="block dark:text-slate-200">
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="mb-14 w-full [border-bottom:1px_solid_rgb(100,_112,_132)] mt-16"></div>
        <div className="flex-row flex justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="w-full max-w-[640px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
            <h2 className="font-bold text-3xl md:text-3xl">Mastering Investing with FxEater</h2>
          </div>
        </div>
        <div className="mb-14 w-full [border-bottom:1px_solid_rgb(100,_112,_132)] mt-16">
        </div>
        <div className="flex-row flex justify-between max-[767px]:flex-col max-[479px]:flex-col-reverse items-start md:items-center">
          <div className="font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center">
            <Link href={'/about-us'}>
              <span className="inline-block font-normal text-[#647084] transition hover:text-[#276ef1] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6">About</span>
            </Link>
          </div>
          <div className="max-[991px]:flex-none">
            <p className="text-[#647084]">© Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)