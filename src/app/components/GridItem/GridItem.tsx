"use client"

import IntroComp from '@/app/components/MainItem/Intro';
import { gridFilterStore } from '@/store/gridFilterStore'

export default function GridItem(){
    const {filter} = gridFilterStore();

    return(
        <section className={`gridSection ` + filter}>
            <IntroComp />
            <article className="skill">AboutME</article>
            <article className="nike">나이키</article>
            <article className="happypub">해피펍</article>
            <article className="movie">영화</article>
            <article className="choding">초딩</article>
            <article className="map">민초맵</article>
        </section>
    )
}