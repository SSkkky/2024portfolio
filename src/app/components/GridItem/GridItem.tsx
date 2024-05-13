"use client"

import IntroComp from '@/app/components/MainItem/Intro';
import AboutComp from '@/app/components/GridItem/components/About';
import HappypubComp from '@/app/components/GridItem/components/Happypub';
import MovieComp from '@/app/components/GridItem/components/Movie';
import ChodingComp from '@/app/components/GridItem/components/Choding';
import MinchomapComp from '@/app/components/GridItem/components/Minchomap';
import NikeComp from '@/app/components/GridItem/components/nike';

import { gridFilterStore } from '@/store/gridFilterStore'

export default function GridItem(){
    const {filter} = gridFilterStore();

    return(
        <section className={`gridSection ` + filter}>
            <IntroComp />
            <AboutComp/>
            <NikeComp/>
            <HappypubComp/>
            <MovieComp/>
            <ChodingComp />
            <MinchomapComp/>
        </section>
    )
}