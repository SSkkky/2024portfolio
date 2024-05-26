"use client"
import data from '@/data/data.json';
import { ListType } from '@/types/dataTypes';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'
import { useEffect, useState } from 'react';

export default function Detail (){
    const [detailData, setDetailData] = useState<ListType>();
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id'));

    useEffect(()=>{
        const filteredData = data[id];
        setDetailData(filteredData)
    },[id])

    return(
        <Suspense>
        {
            detailData
            ? <main><p>{detailData.name}의 디테일 페이지입니당</p></main>
            : <>로딩중입니다</>
        }
        </Suspense>
    )
}