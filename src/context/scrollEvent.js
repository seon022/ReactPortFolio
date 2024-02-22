import { createContext, useContext, useEffect, useRef } from "react";
import { useResponsiveApi } from "../context/responsive";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
    const { isMobile } = useResponsiveApi();

    const targetRef =useRef();

    const handleScroll = () => {
      if (isMobile) {
      } else{
      }
    };
  
    useEffect(() => {    
      const timer = setInterval(() => {
        window.addEventListener("scroll", handleScroll);
      }, 200);
      return () => {
        clearInterval(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
    <ScrollContext.Provider value={{ targetRef }}>{children}
    </ScrollContext.Provider>
       );
}

// 편의를 위한 useContext 함수
export function useScrollApi() {
    return useContext(ScrollContext);
  }