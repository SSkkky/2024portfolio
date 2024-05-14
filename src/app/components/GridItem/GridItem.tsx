"use client"

import IntroComp from '@/app/components/MainItem/Intro';
import AboutComp from '@/app/components/GridItem/components/About';
import HappypubComp from '@/app/components/GridItem/components/Happypub';
import MovieComp from '@/app/components/GridItem/components/Movie';
import ChodingComp from '@/app/components/GridItem/components/Choding';
import MinchomapComp from '@/app/components/GridItem/components/Minchomap';
import NikeComp from '@/app/components/GridItem/components/nike';

import { gridFilterStore } from '@/store/gridFilterStore'
import { useEffect, useState } from 'react';

export default function GridItem(){
    const {filter} = gridFilterStore();
    const [comp, setComp] = useState(<><IntroComp /><AboutComp/><NikeComp/><HappypubComp/><MovieComp/><ChodingComp /><MinchomapComp/></>);

    useEffect(()=>{
    switch (filter) {
        case 'ALL':
            setComp(<><IntroComp /><AboutComp/><NikeComp/><HappypubComp/><MovieComp/><ChodingComp /><MinchomapComp/></>)
            break;

        case 'PERSONAL':
            setComp(<><AboutComp/><NikeComp/><MovieComp/><MinchomapComp/></>)
            break;
        
        case 'TEAM' : setComp(<><HappypubComp/><ChodingComp/></>)
            break;
    }
    },[filter])

    return(
        <section className={`gridSection ` + filter}>
            {comp}
        </section>
    )
}