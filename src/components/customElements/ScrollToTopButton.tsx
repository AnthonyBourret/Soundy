// Method viewed on https://stackoverflow.com/questions/75004594/show-and-hide-button-on-scroll-up-and-down

import React, { useState, useEffect } from 'react';
import { scrollToTop } from '../../utils';

function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  return (
    <div>
      {isVisible && (
      <button
        className="hidden lg:btn lg:btn-primary lg:btn-circle lg:p-2 lg:fixed lg:bottom-[100px] lg:right-6 z-[1000]"
        aria-label="Scroll to top"
        type="button"
        onClick={scrollToTop}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#ffffff" />
        </svg>
      </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
