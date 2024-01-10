import AllBlogList from '@components/page/blog/AllBlog';
import OneColumnLayout from '@layout/OneColLayout';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'FxEater | Blog Alls',
  description: 'Informational content about Forex market.',
};

const AllBlogsPage = () => {
  return (
    <>
      <OneColumnLayout>
        <div className="z-10 max-w-6xl w-full p-4 md:p-8 lg:p-16">
          <AllBlogList />
        </div>
      </OneColumnLayout>
    </>
  );
};

export default AllBlogsPage;
