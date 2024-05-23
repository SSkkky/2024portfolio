"use client"
import data from '@/data/data.json';
import IntroComp from '@/app/components/MainItem/Intro';
import AboutComp from '@/app/components/GridItem/components/About';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ListType } from '@/types/dataTypes';
import { useRouter } from 'next/navigation';
import { gridFilterStore } from '@/store/gridFilterStore'
import './styles/GridItem.scss';

export default function GridItem(){
    const [selectedData, setData] = useState<ListType[] | null>(null);
    const [personalData, setPerData] = useState<ListType[] | null>(null);
    const [teamData, setTeamData] = useState<ListType[] | null>(null);
    const { clickedFilter } = gridFilterStore();
    const router = useRouter();

    const filterCateData = (category : string) => {
        return data.filter(item => item.cate === category)
    }

    useEffect(()=>{
        setPerData(filterCateData('PERSONAL'))
        setTeamData(filterCateData('TEAM'))
    },[])

    useEffect(()=>{
        switch (clickedFilter) {
            case 'ALL':
                setData(data)
                break;
            
            case 'PERSONAL':
                setData(personalData)
                break;

            case 'TEAM':
                setData(teamData)
                break;
        
            default:
                setData(data)
                break;
        }
    }, [clickedFilter])

    return(
        <section className={`gridSection ` + clickedFilter}>
        { clickedFilter === 'ALL' ? <><IntroComp/><AboutComp/></> : null }
        {
            selectedData && selectedData.map((item)=> {
                const DynamicComponent = dynamic(() => import(`./components/${item.keyword}`));
                return <article className={item.keyword} onClick={()=>{router.push(`/detail?id=${item.id}`)}} key={item.keyword}>
                    <DynamicComponent key={item.id}/>
                    </article>
            })
        }
        </section>
    )
}