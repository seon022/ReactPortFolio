import React, { createContext, useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const ResponsiveContext = createContext();

export function ResponsiveProvider({ children }) {
    // 뷰포트 너비가 768px 미만일 경우 MO 모드로 간주
    const IS_MOBILE = !matchMedia('screen and (min-width: 768px)').matches;
    const [isMobile, setIsMobile] = useState(IS_MOBILE);

    const handleResize = debounce(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, 300);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <ResponsiveContext.Provider value={{ isMobile }}>{children}</ResponsiveContext.Provider>;
}

// 편의를 위한 useContext 함수
export function useResponsiveApi() {
    return useContext(ResponsiveContext);
}
