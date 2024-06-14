import { ListType } from '@/types/dataTypes';
import '../styles/Goal.scss';

type MainType = {
    detailData : ListType | undefined
}
export function GoalComp ({detailData} : MainType){
    console.log(detailData)
    return (
        <main id='DetailGoal'>
            <b>PROJECT GOAL</b>
            <section className='contents'>
                <ul>
                {
                    detailData?.goal.map((item, i) => ( <li key={i}><p>{item.goal}</p></li> ))
                }
                </ul>
            </section>
        </main>
    )
}