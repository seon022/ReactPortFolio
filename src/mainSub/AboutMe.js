import styled from "styled-components";

const AboutMe =()=> {
    return(
        <AboutWrap>
            <MyTitle>
                <div className="title">
                    About Me
                </div>
                <div className="titleTxt">안녕하세요, <br /><span>🐢꾸준히 성장하는 프론트엔드 개발자를 꿈꾸는 강선영입니다.</span></div>
            </MyTitle>
            <MyGoal>
                새로운 것을 기술로 구현해보는 것을 좋아합니다. 도전과 배움을 즐기는 프론트엔드 개발자가 되겠습니다.
            </MyGoal>
        </AboutWrap>
    )
}

export default AboutMe;

const AboutWrap  = styled.div`
    margin: 0 auto;
    margin-bottom: 120px;
`

const MyTitle= styled.div`
    margin: 0 20px;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.6;
    .title{
    margin-bottom: 30px;
    }
    .titleTxt{
    margin-bottom: 40px;
    font-size: 22px;
    }
`
const MyGoal= styled.div`
    margin: 0 20px;
    margin-bottom: 60px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
`