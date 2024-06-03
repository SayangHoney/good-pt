import { useEffect, useRef } from 'react';

export const useIntroduce = () => {
  const target2 = useRef<any>(null);
  const target2_1 = useRef<any>(null);
  const target2_2 = useRef<any>(null);
  const target2_3 = useRef<any>(null);
  const target2_4 = useRef<any>(null);

  const target3 = useRef<any>(null);

  const target4 = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(target2.current as Element);
    }
  }, [target2]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2_1) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 1 }
      );
      observer.observe(target2_1.current as Element);
    }
  }, [target2_1]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2_2) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 1 }
      );
      observer.observe(target2_2.current as Element);
    }
  }, [target2_2]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2_3) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 1 }
      );
      observer.observe(target2_3.current as Element);
    }
  }, [target2_3]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2_4) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 1 }
      );
      observer.observe(target2_4.current as Element);
    }
  }, [target2_4]);

  return {
    target2,
    target2_1,
    target2_2,
    target2_3,
    target2_4,
    target3,
    target4,
  };
};
