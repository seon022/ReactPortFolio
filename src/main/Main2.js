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
            <SectionFiles />
            <Web style={Shadow}>
                <BrowserTop />
                <M2Contents />
            </Web>
        </M2Wrap>
    )
}

export default Main2;

const M2Wrap = styled.div`
    margin-bottom: 60px;   
    border-radius: 20px;
    &.m2.pc_flex{
        max-width: 1440px;
        margin : 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
    }
    &.m2{
        margin : 0 20px; 
    }


`
const Web = styled.div`
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DCDCDC;
    background-color: #D8DDE0;

`