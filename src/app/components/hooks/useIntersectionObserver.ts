"use client"
import { useEffect, useRef } from 'react';

type IntersectionObserverHookArgs = {
  callback?: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
};

const useIntersectionObserver = ({ callback, options }: IntersectionObserverHookArgs) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });

      if (callback) {
        callback(entries, observer);
      }
    }, options);

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return observerRef;
};

export default useIntersectionObserver;
