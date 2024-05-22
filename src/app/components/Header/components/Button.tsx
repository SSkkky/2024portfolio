"use client"

import { gridFilterStore } from '@/store/gridFilterStore'

export default function Button (){
const {clickedFilter, setFilter} = gridFilterStore();
const buttonList = ['ALL', 'PERSONAL', 'TEAM'];

  const onCLickSelectBoxBtn = (keyword : string) => {
    setFilter(keyword)
  }
  
    return(
        <section className={`selectbox ` + clickedFilter}>
            {
                buttonList.map((item)=>(
                    <button key={item} className={item === clickedFilter ? item : ''} onClick={() => {onCLickSelectBoxBtn(`${item}`)}}>{item}</button>
                ))
            }
        </section>
    )
}