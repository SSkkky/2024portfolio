"use client"

import React, { useRef, useEffect, MutableRefObject } from 'react';
import '../styles/Overview.scss';

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

export function OverviewComp({ detailData }: { detailData: any }) {
  const bRef = useRef<HTMLElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useIntersectionObserver({ ref: bRef, options: { threshold: 0.3 } });
  useIntersectionObserver({ ref: sectionRef, options: { threshold: 0.3 } });

  return (
    <main id='DetailOverview' style={{ whiteSpace: 'pre-line' }}>
      <b ref={bRef} className='observe'>OVERVIEW</b>
      <section className='contents observe' ref={sectionRef}>
        <p>{detailData?.overview}</p>
      </section>
    </main>
  );
}

export default OverviewComp;
