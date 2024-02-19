import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { Shadow } from "../browserTem/Shadow";


import BrowserTop from "../browserTem/BrowserTop";
import M2Contents from "../mainSub/M2Contents";
import SectionFiles from "../mainSub/SectionFiles";

const Main2 = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <M2Wrap className={isMobile? 'm2': 'm2 pc_flex'}>
            <div className={isMobile? "fileBox mo" : "fileBox"}>
                <SectionFiles />
            </div>
            <Web style={Shadow} className={isMobile? 'webBox mo' : 'webBox'}>
                <BrowserTop />
                <M2Contents />
            </Web>
        </M2Wrap>
    )
}

export default Main2;

const M2Wrap = styled.div`
    padding: 0 20px;
    margin-bottom: 60px;   
    border-radius: 20px;
    max-width: 1480px;
    &.m2.pc_flex{
        margin : 0 auto;
        display: flex;
        justify-content: space-between;
    }
    &.m2{
        margin : 0 20px; 
    }
    .fileBox{
        position: relative;
        transition: 0.8s;
    }
    .fileBox.mo{
        width: 100%;
    }


`
const Web = styled.div`
    border-radius: 20px;
    border: 1px solid #DCDCDC;
    background-color: #D8DDE0;
    &.webBox{
        width: 100%;
        transition: 0.8s;
    }
    &.webBox.mo{
    }

`