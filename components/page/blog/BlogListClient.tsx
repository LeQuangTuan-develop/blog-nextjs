'use client'
import {Button} from "@nextui-org/button";
import { createContext, useContext, useState } from 'react';
import { TApiResult, TBlog } from "../type";
import { ApiService, END_POINT_URL_LIST } from "../../../services";
import BlogCard from "../../custom/BlogCard";

type TMoreBlog = {
  currentBlogs: TBlog[],
  updateBlogsDate: (data:TBlog[]) => void
}


const BlogListContext = createContext({} as TMoreBlog)


const LoadMoreButton = () => {

  const [page, setPage] = useState(2)
  const {currentBlogs, updateBlogsDate} = useContext(BlogListContext)
  
  const loadMore = async () => {
    const moreBlog: TApiResult<TBlog> = await ApiService.getServer(`${END_POINT_URL_LIST.BLOG}/?page=${page}`) 
    updateBlogsDate([...currentBlogs, ...moreBlog.results])
    moreBlog.next==null ? setPage(0) : setPage(page+1)
  }

  return <>
    {page ? 
      <Button color="primary" onClick={loadMore}>
        Load more
      </Button> : null
    }
  </>
}

const LoadMoreBlogList = () => {
  const {currentBlogs} = useContext(BlogListContext)
  return <>
    {
      currentBlogs.map(item => <BlogCard blogData={item} key={item.id}/>)
    }
  </>
}

const LoadMore = () => {
  const [currentBlogs, setCurrentBlogs] = useState([] as TBlog[]);
  const updateBlogsDate = (data:TBlog[]) => {
    setCurrentBlogs(data)
  }

  return (
    <BlogListContext.Provider
      value={{
        currentBlogs,
        updateBlogsDate
      }}
    >
      <LoadMoreBlogList />
      <LoadMoreButton />
    </BlogListContext.Provider>
  );
}

export default LoadMore;