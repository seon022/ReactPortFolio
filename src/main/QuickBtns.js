import styled from "styled-components";
import SectionFiles from "../mainSub/SectionFiles";
import { useResponsiveApi } from "../context/responsive";

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
            <div className="gotoTop" onClick={gotoTop}>Top</div>
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
        right: 20px;
        bottom: 30px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(0,0,0,0.3);
        z-index: 1000;
        cursor: pointer;
    }
`