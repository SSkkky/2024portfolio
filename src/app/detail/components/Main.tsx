import { ListType } from '@/types/dataTypes';
import '../styles/Main.scss';

type MainType = {
    detailData : ListType | undefined
}
export function MainComp ({detailData} : MainType){
    return (
        <main id='DetailMain'>
            {detailData && <p>{detailData.name}의 디테일 페이지입니당</p>}
        </main>
    )
}