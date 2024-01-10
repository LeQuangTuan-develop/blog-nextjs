import BzbHiddenH1 from '../../components/custom/BzbHiddenH1';
import RealtimePrice from '../../components/custom/BzbRealtime/RealtimePrice';
import QuoteClient from '../../components/custom/BzbQuoteClient';

import HomeBlog from '../../components/page/home/HomeBlog';
import HomeSeries from '../../components/page/home/HomeSeries';
import OneColumnLayout from '@layout/OneColLayout';

const Home = () => {
  return (
    <OneColumnLayout>
      <BzbHiddenH1 text="FxEater is a high quality contents blog, that focus on auto-trade bot in forex market." />
      <div className="z-20 min-h-[52px] max-w-6xl w-full flex justify-between px-4 md:px-8 lg:px-16 py-4">
        <QuoteClient />
        <RealtimePrice />
      </div>
      <div className="z-10 max-w-6xl w-full px-4 md:px-8 lg:px-16 py-4">
        <HomeBlog />
        <HomeSeries />
      </div>
    </OneColumnLayout>
  );
};

export default Home;
