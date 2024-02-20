import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { useScrollApi } from "../context/scrollEvent";
import { Shadow } from "../browserTem/Shadow";


import BrowserTop from "../browserTem/BrowserTop";
import M2Contents from "../mainSub/M2Contents";
import Gnb from "./Gnb";

const Main2 = ()=>{
    const { isMobile } = useResponsiveApi();
    const { webRef } = useScrollApi();

    return(
        <M2Wrap className={isMobile? 'm2': 'm2 pc_flex'}>
            <Gnb />
            <Web style={Shadow} className={isMobile? 'webBox mo' : 'webBox'} ref={webRef}>
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
    &.m2.pc_flex{
        display: flex;
        justify-content: center;
    max-width: 1480px;
    }
    &.m2{
        margin: 0 auto;
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