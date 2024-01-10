import BzbHiddenH1 from '@components/custom/BzbHiddenH1';
import ChartPatternList from '@components/page/learn/ChartPatternList';
import OneColumnLayout from '@layout/OneColLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FxEater | Chart pattern',
  description: 'Learning various chart patterns in price action.',
};

const AllChartPatternsPage = () => {
  return (
    <OneColumnLayout>
      <div className="z-10 max-w-6xl w-full p-4 md:p-8 lg:p-16">
        <BzbHiddenH1
          text={'Most basic chart patterns that using by expert trader.'}
        />

        <ChartPatternList />
      </div>
    </OneColumnLayout>
  );
};

export default AllChartPatternsPage;
