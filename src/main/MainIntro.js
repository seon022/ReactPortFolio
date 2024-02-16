import styled from "styled-components";
import BrowserTop from "../browserTem/BrowserTop";
import MIContents from "../mainSub/MIContents";
import { useResponsiveApi } from "../context/responsive";


const MainIntro = ()=> {
    const { isMobile } = useResponsiveApi();
    return(
        <IntroWrap className={isMobile? 'sectionMb mo_mb' : 'sectionMb' }>
            <Web>
                <BrowserTop />
                <MIContents />
            </Web>
        </IntroWrap>
    );
}
export default MainIntro;

const IntroWrap = styled.div`
    &.sectionMb{
        max-width: 1440px;
        margin : 0 auto;
        margin-bottom: 60px;
        padding: 0 20px;
    }
    &.sectionMb.mo_mb{
        margin : 0 20px;
        margin-bottom: 50px;
    }
    
`
const Web = styled.div`
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DCDCDC;
    background-color: #D8DDE0;
    box-shadow: 4px 6px 10px 1px rgba(0,0,0, 0.1);

`