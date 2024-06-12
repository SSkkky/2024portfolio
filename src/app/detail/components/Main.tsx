"use client"

import { ListType } from '@/types/dataTypes';
import '../styles/Main.scss';

type MainType = {
    detailData : ListType | undefined
}
export function MainComp ({detailData} : MainType){
    console.log('----------------detailData')
    console.log(detailData)

    const onClickDetailBtn = (type : string) => {
        type === 'github'
        ? console.log('깃헙버튼클릭')
        : console.log('배포버튼클릭');
    }

    return (
        <main id='DetailMain'>
            <article className='overview'>
                <b>{detailData?.name}</b>
                <p>{detailData?.dateteam}</p>
                <button onClick={()=>{onClickDetailBtn('github')}}>깃헙</button>
                <button onClick={()=>{onClickDetailBtn('deploy')}}>배포</button>
            </article>
        </main>
    )
}