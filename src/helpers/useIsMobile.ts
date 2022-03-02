import { useEffect, useState } from 'react';

export const MOBILE_SIZE = 767;

interface Props {
  mobileSize?: number;
}

const useIsMobile = (props?: Props) => {
  const mobileSize = props?.mobileSize ?? MOBILE_SIZE;

  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 100);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Set window width to state
      const handleWindowSizeChange = () => setWidth(window?.innerWidth);

      // Add event listener
      window.addEventListener('resize', handleWindowSizeChange);

      // Call handler right away so state gets updated with initial window size
      handleWindowSizeChange();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  return width <= mobileSize;
};

export default useIsMobile;
