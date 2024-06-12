"use client"

import Link from 'next/link';
import Image from 'next/image';
import IphoneImg from '@/assets/iPhone15_w.png';
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

    const mainStyle = {
        backgroundImage : `url(${detailData?.imageurl})`
    }

    return (
        <main id='DetailMain'>
            <article className='overview'>
                <p>{detailData?.subTitle}</p>
                <b>{detailData?.name}</b>
                <p>{detailData?.dateteam}</p>
                <p>{detailData?.skill[0].skills}</p>
                <ul className='links'>
                    <li>
                        <a href={detailData?.link} target='_blank' rel="noopener noreferrer">깃헙</a>
                    </li>
                    <li>
                        <a href={detailData?.deployurl} target='_blank' rel="noopener noreferrer">배포</a>
                    </li>
                </ul>
            </article>
            <Image
            src={IphoneImg}
            width={256}
            height={527}
            alt="휴대폰 목업" />
        </main>
    )
}