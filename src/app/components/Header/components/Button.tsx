"use client"

import { gridFilterStore } from '@/store/gridFilterStore'
import {useState, useEffect} from 'react';

export default function Button (){
const {filter, setFilter} = gridFilterStore();
const buttonList = ['ALL', 'PERSONAL', 'TEAM'];

  const onCLickSelectBoxBtn = (keyword : string) => {
    setFilter(keyword)
  }

  useEffect(() => {
    console.log(filter)
  },[filter])
  
    return(
        <section className={`selectbox ` + filter}>
            {
                buttonList.map((item)=>(
                    <button key={item} className={item === filter ? item : ''} onClick={() => {onCLickSelectBoxBtn(`${item}`)}}>{item}</button>
                ))
            }
        </section>
    )
}