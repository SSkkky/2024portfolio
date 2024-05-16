"use client"
import Image from 'next/image';
import IphoneImg from '@/assets/iPhone15_w.png';
import TagComp from './Tag';
import '../styles/Choding.scss';

export default function choding(){
    return(
        <article className="choding" id="choding">
            <TagComp keyword={['TEAM', 'NEXT.JS']}/>
            <Image src={IphoneImg} alt="아이폰" width={256} height={527} className='iphone'/>
        </article>
    )
}