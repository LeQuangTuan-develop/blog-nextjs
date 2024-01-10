import './BlogContent.css'

const BlogContent = ({html_string} : {html_string: string}) => {
  return (
    <>
      <div className="border lg:p-8 p-2 rounded-md border-default-200 dark:border-default-100 bg-default-200/20 prose dark:prose-invert max-w-6xl w-full" dangerouslySetInnerHTML={{ __html: html_string }}></div>
    </>
  )
}

export default BlogContent