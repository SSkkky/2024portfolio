"use client"

import Image from 'next/image';
import IphoneImg from '@/assets/iPhone15_w.png';
import { ListType } from '@/types/dataTypes';
import '../styles/Main.scss';

type MainType = {
    detailData : ListType | undefined
}
export function MainComp ({detailData} : MainType){
    const mainStyle = {
        backgroundImage : `url(${detailData?.imageurl})`
    }

    return (
        <main id='DetailMain'>
            <section className='contents'>
                <p className='subTitle'>{detailData?.subTitle}</p>
                <b className='name'>{detailData?.name}</b>
                <p className='dateteam'>{detailData?.dateteam}</p>
                <section className='skills'>
                <b className='title'>사용기술</b>
                <ul>
                    {
                        detailData?.skill.map((item, i) => (
                            <li key={i}>{item.skills}</li>
                        ))
                    }
                </ul>
                </section>
                <section className='links'>
                <ul>
                    <li>
                        <a href={detailData?.link} target='_blank' rel="noopener noreferrer">깃헙</a>
                    </li>
                    <li>
                        <a href={detailData?.deployurl} target='_blank' rel="noopener noreferrer">배포</a>
                    </li>
                </ul>
                </section>
            </section>
            <Image
            src={IphoneImg}
            width={256}
                height={527}
                className='phone'
            alt="휴대폰 목업" />
        </main>
    )
}