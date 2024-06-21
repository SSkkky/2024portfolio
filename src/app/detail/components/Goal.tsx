"use client"

import React, { useRef, useEffect, MutableRefObject } from 'react';
import { ListType } from '@/types/dataTypes';
import '../styles/Goal.scss';

interface IntersectionObserverHookArgs {
    ref: MutableRefObject<HTMLElement | null>;
    options: IntersectionObserverInit;
  }
  
  const useIntersectionObserver = ({ ref, options }: IntersectionObserverHookArgs) => {
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('activeObserve');
          } else {
            entry.target.classList.remove('activeObserve');
          }
        });
      }, options);
  
      observer.observe(element);
  
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [ref, options]);
  };

type MainType = {
    detailData : ListType | undefined
}
export function GoalComp({ detailData }: MainType) {
    const bRef = useRef<HTMLElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
  
    useIntersectionObserver({ ref: bRef, options: { threshold: 0.3 } });
    useIntersectionObserver({ ref: sectionRef, options: { threshold: 0.3 } });

    return (
        <main id='DetailGoal'>
            <b ref={bRef} className='observe'>PROJECT GOAL</b>
            <section className='contents observe' ref={sectionRef}>
                <ul>
                {
                    detailData?.goal.map((item, i) => ( <li key={i}><p>{item.goal}</p></li> ))
                }
                </ul>
            </section>
        </main>
    )
}