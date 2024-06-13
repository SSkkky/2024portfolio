import { ListType } from '@/types/dataTypes';
import '../styles/Function.scss';

type MainType = {
    detailData : ListType | undefined
}
export function FunctionComp ({detailData} : MainType){
    //세부 컴포넌트를 많이 나누는게 좋을듯
    return (
        <main id='DetailFunction'>
            <b>FUNCTION</b>
            <ul>
                {
                    detailData?.function.map((item, i) => ( <li key={i}>{item.fn}</li> ))
                }
            </ul>
        </main>
    )
}