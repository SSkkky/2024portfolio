import data from '@/data/data.json';
import { MainComp } from './components/Main';
import { IntroComp } from './components/Intro';
import { FeatureComp } from './components/Feature';
import { FunctionComp } from './components/Function';
import { ReviewComp } from './components/Review';
import { TroubleComp } from './components/Trouble';
import './detail.scss';

export default async function DetailPage({ searchParams }: { searchParams: { id: string } }) {
  const { id } = searchParams;
  const detailData = data.find((item) => item.id === Number(id));

  return <section className='detail'>
    <MainComp detailData={detailData} />
    <IntroComp detailData={detailData} />  
    <FeatureComp detailData={detailData} />  
    <FunctionComp detailData={detailData} />  
    <TroubleComp detailData={detailData} />  
    <ReviewComp detailData={detailData} />  
  </section>;
}
