"use client"
import data from '@/data/data.json';
import IntroComp from '@/app/components/MainItem/Intro';
import AboutComp from '@/app/components/GridItem/components/About';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { gridFilterStore } from '@/store/gridFilterStore'
import './styles/GridItem.scss';

export default function GridItem(){
    const {filter} = gridFilterStore();
    const router = useRouter();

    return(
        <section className={`gridSection ` + filter}>
            <IntroComp/>
            <AboutComp/>
        {
            data.map((item)=> {
                const DynamicComponent = dynamic(() => import(`./components/${item.keyword}`));
                return <article className={item.keyword} onClick={()=>{router.push(`/detail?id=${item.id}`)}} key={item.keyword}>
                    <DynamicComponent key={item.id}/>
                    </article>
            })
        }
        </section>
    )
}