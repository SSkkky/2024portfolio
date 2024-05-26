"use client"
import data from '@/data/data.json';
import { ListType } from '@/types/dataTypes';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Main } from './components/Main';

export function Detail (){
    const [detailData, setDetailData] = useState<ListType>();
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id'));

    useEffect(()=>{
        const filteredData = data[id];
        setDetailData(filteredData)
    },[id])

    return(
        <Suspense fallback={<p>로딩중...</p>}>
            <Main detailData={detailData}/>
        </Suspense>
    )
}