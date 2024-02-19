import { createContext, useContext, useEffect, useRef } from "react";
import { useResponsiveApi } from "../context/responsive";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
    const { isMobile } = useResponsiveApi();

    const targetRef = useRef(null);  
    const handleScroll = () => {
      console.log("scrolling");
      
      if (!isMobile && window.innerWidth > 1480 && window.scrollY > 400) {
        targetRef.current.style.position = "fixed";      
        targetRef.current.style.left = "20px";      
        targetRef.current.style.top = "100px";      
      } else{
        targetRef.current.style.position = "relative";   
        targetRef.current.style.left = "";      
        targetRef.current.style.top = "";         
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