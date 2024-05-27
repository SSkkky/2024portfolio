import { ListType } from '@/types/dataTypes';
import '../styles/Trouble.scss';

type MainType = {
    detailData : ListType | undefined
}
export function TroubleComp ({detailData} : MainType){
    return (
        <main id='DetailTrouble'>
            {detailData && <p>{detailData.name}의 트러블 슈팅 페이지입니당</p>}
        </main>
    )
}