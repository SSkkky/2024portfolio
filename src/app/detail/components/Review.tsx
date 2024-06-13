import { ListType } from '@/types/dataTypes';
import '../styles/Review.scss';

type MainType = {
    detailData : ListType | undefined
}
export function ReviewComp ({detailData} : MainType){
    return (
        <main id='DetailReview'>
            <b>REVIEW</b>
            <p>{detailData?.review}</p>
        </main>
    )
}