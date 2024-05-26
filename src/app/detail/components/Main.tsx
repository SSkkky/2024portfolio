import { ListType } from '@/types/dataTypes';
type MainType = {
    detailData : ListType | undefined
}
export function MainComp ({detailData} : MainType){
    return (
        <main>
            {detailData && <p>{detailData.name}의 디테일 페이지입니당</p>}
        </main>
    )
}