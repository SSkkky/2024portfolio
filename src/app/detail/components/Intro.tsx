"use client"

import { ListType } from '@/types/dataTypes';
import '../styles/Intro.scss';
import { useEffect } from 'react';

type MainType = {
    detailData : ListType | undefined
}
export function IntroComp ({detailData} : MainType){
    return (
        <main id='DetailIntro' style={{whiteSpace: 'pre-line'}}>
            {detailData?.overview}
        </main>
    )
}