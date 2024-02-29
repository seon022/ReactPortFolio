import styled from "styled-components";
import SectionFiles from "../mainSub/SectionFiles";
import { useResponsiveApi } from "../context/responsive";
import { PopEffect } from "../util/PopEffect";

const QuickBtns = ()=>{
    const { isMobile } = useResponsiveApi();
    const gotoTop =()=>{
        window.scrollTo({ top: 0, behavior:'smooth' });
    }
    return(
        <QuickWrap>
            <div className={isMobile? "fileBox mo" : "fileBox"}>
                <SectionFiles />
            </div>
            <PopEffect><div className="gotoTop" onClick={gotoTop}>Top</div></PopEffect>
        </QuickWrap>
    )
}

export default QuickBtns;

const QuickWrap = styled.div`
    .fileBox{
        position: relative;
        transition: 0.4s;
    }
    .fileBox.mo{
        width: 100%;
    }
    .gotoTop{
        position: fixed;
        right: 40px;
        bottom: 40px;
        width: 56px;
        height: 56px;
        line-height: 56px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(0,0,0,0.24);
        border: 2px solid #ddd;
        z-index: 1000;
        cursor: pointer;
        transition: 0.1s;
    }
    .gotoTop:hover{
        border: 2px solid #ccc;
        background-color: rgba(0,0,0,0.1);
        color: #444;
        transition: 0.1s;
    }
`