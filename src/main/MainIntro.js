import styled from "styled-components";
import BrowserTop from "../browserTem/BrowserTop";
import MIContents from "../mainSub/MIContents";
import { useResponsiveApi } from "../context/responsive";


const MainIntro = ()=> {
    const { isMobile } = useResponsiveApi();
    return(
        <IntroWrap className={isMobile? 'introWrap intro_mb' : 'introWrap' } > 
            <Web>
                <BrowserTop />
                <MIContents />
            </Web>
        </IntroWrap>
    );
}
export default MainIntro;

const IntroWrap = styled.div`
    max-width: 1480px;
    &.introWrap{
        padding: 0 20px;
        margin: 0 auto 60px auto;
    }
    &.introWrap.intro_mb{
        padding: 0 16px;
        padding-top: 80px;
        margin: 0 auto 40px auto;
    }
`
const Web = styled.div`
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DCDCDC;
    background-color: #D8DDE0;
    box-shadow: 4px 6px 10px 1px rgba(0,0,0, 0.1);

`