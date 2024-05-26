"use client"
import data from '@/data/data.json';
import { ListType } from '@/types/dataTypes';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MainComp } from './components/Main';

export default function Detail() {
    const [detailData, setDetailData] = useState<ListType | undefined>();
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id'));

    useEffect(()=>{
        const filteredData = data[id];
        setDetailData(filteredData)
    },[id])

    return(
        <MainComp detailData={detailData} />
    )
}