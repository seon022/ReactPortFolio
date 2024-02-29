import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import Circlebg from "../util/Circlebg";

const AboutMe =()=> {
    const { isMobile } = useResponsiveApi();
    return(
        <AboutWrap className={isMobile? "about_mo": ""}>
            <MyTitle>
                <div className={isMobile? "title": "title pc"}>
                    <Circlebg type={'huge'} >About Me</Circlebg>
                </div>
                <div className="titleTxt">안녕하세요, <br /><span>꾸준히 성장하는 프론트엔드 개발자를 꿈꾸는 강선영입니다.</span></div>
                
                <MyGoal>
                    새로운 것을 기술로 구현해보는 것을 좋아합니다.
                </MyGoal>
            </MyTitle>
        </AboutWrap>
    )
}

export default AboutMe;

const AboutWrap  = styled.div`
    padding-top: 60px;
    margin: 0 auto;
    margin-bottom: 120px;
    &.about_mo{
        padding-top: 20px;
    }
`

const MyTitle= styled.div`
    text-align: center;
    margin: 0 20px;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.6;
    .title{
        font-size: 50px;
        margin-bottom: 30px;
    }
    .title.pc{
        font-size: 60px;
    }
    .titleTxt{
        margin-bottom: 40px;
        font-size: 22px;
        color: #444;
        }
`
const MyGoal= styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
`