import { ListType } from '@/types/dataTypes';
import '../styles/Overview.scss';

type MainType = {
    detailData : ListType | undefined
}
export function OverviewComp ({detailData} : MainType){
    return (
        <main id='DetailOverview' style={{ whiteSpace: 'pre-line' }}>
            <b>OVERVIEW</b>
            <section className='contents'>
                <p>{detailData?.overview}</p>
            </section>
        </main>
    )
}