import { ListType } from '@/types/dataTypes';
import '../styles/Intro.scss';

type MainType = {
    detailData : ListType | undefined
}
export function IntroComp ({detailData} : MainType){
    return (
        <main id='DetailIntro'>
            {detailData && <p>{detailData.name}의 인트로 페이지입니당</p>}
        </main>
    )
}