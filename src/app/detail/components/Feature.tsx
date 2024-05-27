import { ListType } from '@/types/dataTypes';
import '../styles/Feature.scss';

type MainType = {
    detailData : ListType | undefined
}
export function FeatureComp ({detailData} : MainType){
    return (
        <main id='DetailFeature'>
            {detailData && <p>{detailData.name}의 기능 소개 페이지입니당</p>}
        </main>
    )
}