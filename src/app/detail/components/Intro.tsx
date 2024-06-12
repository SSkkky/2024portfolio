import { ListType } from '@/types/dataTypes';
import '../styles/Intro.scss';

type MainType = {
    detailData : ListType | undefined
}
export function IntroComp ({detailData} : MainType){
    return (
        <main id='DetailIntro'>
            {detailData?.overview}
        </main>
    )
}