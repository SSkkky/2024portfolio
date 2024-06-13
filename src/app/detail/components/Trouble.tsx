import { ListType } from '@/types/dataTypes';
import '../styles/Trouble.scss';

type MainType = {
    detailData : ListType | undefined
}
export function TroubleComp ({detailData} : MainType){
    return (
        <main id='DetailTrouble'>
            <b>TROUBLE</b>
            <ul>
                {
                    detailData?.trouble.map((item, i) => (
                        <li key={i}>
                            <b>{item.title}</b>
                            <p>{item.problem}</p>
                            <p>{item.reason}</p>
                            <p>{item.solve}</p>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}