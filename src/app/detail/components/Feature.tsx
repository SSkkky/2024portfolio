import { ListType } from '@/types/dataTypes';
import '../styles/Feature.scss';

type MainType = {
    detailData : ListType | undefined
}
export function FeatureComp ({detailData} : MainType){
    console.log(detailData)
    return (
        <main id='DetailFeature'>
            <b>PROJECT GOAL</b>
            <ul>
                {
                    detailData?.goal.map((item, i) => ( <li key={i}>{item.goal}</li> ))
                }
            </ul>
        </main>
    )
}