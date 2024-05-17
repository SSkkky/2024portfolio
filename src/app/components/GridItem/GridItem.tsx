"use client"
import data from '@/data/data.json';
import IntroComp from '@/app/components/MainItem/Intro';
import AboutComp from '@/app/components/GridItem/components/About';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { gridFilterStore } from '@/store/gridFilterStore'
import { useEffect, useState } from 'react';
import './styles/GridItem.scss';

export default function GridItem(){
    let componentNames = [];
    const {filter} = gridFilterStore();
    const router = useRouter();

    useEffect(()=>{
    },[])

    useEffect(()=>{
    },[filter])

    return(
        <section className={`gridSection ` + filter}>
            <IntroComp/>
            <AboutComp/>
        {
            data.map((item)=> {
                const DynamicComponent = dynamic(() => import(`./components/${item.keyword}`), {
                    loading: () => <div>Loading...</div>
                });

                return < DynamicComponent key={item.id} />
            })
        }

        </section>
    )
}