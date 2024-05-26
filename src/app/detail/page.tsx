import data from '@/data/data.json';
import { MainComp } from './components/Main';

export default async function DetailPage({ searchParams }: { searchParams: { id: string } }) {
  const { id } = searchParams;
  const detailData = data.find((item) => item.id === Number(id));

  return <MainComp detailData={detailData} />;
}
