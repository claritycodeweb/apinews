/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import { useEffect, useRef, useCallback } from 'react';

const useLazyImage = () => {
  const observerRef = useRef(null);

  useEffect(
    () => () => {
      const observer = observerRef.current;
      if (observer) {
        observer.disconnect();
      }
    },
    []
  );

  const refCallBack = useCallback((node) => {
    function getObserver() {
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.intersectionRatio > 0) {
              const currentImg = e.target;
              const newImgSrc = currentImg.dataset.src;

              if (!newImgSrc) {
                console.warn('not data-src attribute');
              } else {
                currentImg.src = newImgSrc;
              }
            }
          });
        });
      }
      return observerRef.current;
    }

    const observer = getObserver();
    observer.disconnect();

    if (node) {
      observer.observe(node);
    }
  }, []);

  return [refCallBack];
};

export default useLazyImage;
