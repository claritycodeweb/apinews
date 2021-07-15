/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
    return true;
  };

  useEffect(() => {
    if (!loading) return;

    setCount((c) => c + 1);
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { count };
};
