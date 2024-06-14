import data from '@/data/data.json';
import { MainComp } from './components/Main';
import { OverviewComp } from './components/Overview';
import { GoalComp } from './components/Goal';
import { FunctionComp } from './components/Function';
import { ReviewComp } from './components/Review';
import { TroubleComp } from './components/Trouble';
import './detail.scss';

export default async function DetailPage({ searchParams }: { searchParams: { id: string } }) {
  const { id } = searchParams;
  const detailData = data.find((item) => item.id === Number(id));

  return <section className='detail'>
    <MainComp detailData={detailData} />
    <OverviewComp detailData={detailData} />  
    <GoalComp detailData={detailData} />  
    <FunctionComp detailData={detailData} />  
    <TroubleComp detailData={detailData} />  
    <ReviewComp detailData={detailData} />  
  </section>;
}
