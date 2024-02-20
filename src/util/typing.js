import { remove } from "lodash";
import { useRef } from "react";

export function typingLetter() {

    const typingRef = useRef()

    // 글자 모음
    const letters = ["PORTFOLIO"];
    
    // 글자 입력 속도
    const speed = 100;
    let i = 0;
    
    // 타이핑 효과
    const typing = async () => {  
        const letter = letters[i].split("");
        
        while (letter.length) {
            await wait(speed);
            typingRef.innerHTML += letter.shift();
        }
        
        // 잠시 대기
        await wait(800);

        // 글자를 지우는 효과
        const remove = async () => {
            const letter = letters[i].split("");
            
            while (letter.length) {
            await wait(speed);
            
            letter.pop();
            typingRef.innerHTML = letter.join(""); 
        }
            remove();

            // 다시 타이핑 시작
            typing();
        }
    }
          
  
    
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
      return new Promise(res => setTimeout(res, ms))
    }
    // 초기 실행
    setTimeout(typing, 800);
}
 

export function typingRef(){
    
}

