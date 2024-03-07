import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import Circlebg from '../util/Circlebg';
import TypingText from '../util/TypingText';

const AboutMe = () => {
    const { isMobile } = useResponsiveApi();
    return (
        <AboutWrap className={isMobile ? 'about_mo' : ''}>
            <MyTitle>
                <div className={isMobile ? 'title' : 'title pc'}>
                    <Circlebg type={'huge'}>About Me</Circlebg>
                </div>
                <div className={isMobile ? 'contents' : 'contents pc'}>
                    <div className={isMobile ? 'titleTxt' : 'titleTxt pc'}>
                        <p className="hello">안녕하세요, 강선영입니다.</p>
                        <p className="overview">
                            문제 해결 시 좌절하지 않고 문제를 파고들어 꾸준히 성장하는 개발자가 되고 싶습니다.
                        </p>
                    </div>
                    <EduWrap className={isMobile ? '' : 'pc'}>
                        <div className="edu">Education</div>
                        <div className="eduBox">
                            <p>
                                그린컴퓨터학원
                                <br /> 반응형 웹 & 프론트엔드 개발 실무 과정
                                <br />
                                <span className="date">2023.09 - 2024.03</span>
                            </p>
                            <br />
                            - HTML과 CSS를 이용해 웹사이트 화면의 UI를 설계, 구현.
                            <br />
                            - 반응형 웹사이트 UI 설계, 반응형 웹 구현. <br />
                            - HTML, CSS, javascript를 활용해 웹 사이트를 구현하여 Netlify를 통해 웹에 배포.
                            <br />- figma를 활용하여 반응형 웹사이트를 설계하고 구현.
                            <br />- React를 활용하는 프로젝트 진행, git과 github를 통해 팀원과 프로젝트 공유하며 진행.
                        </div>
                    </EduWrap>
                </div>
            </MyTitle>
        </AboutWrap>
    );
};

export default AboutMe;

const AboutWrap = styled.div`
    padding-top: 20px;
    margin: 0 auto;
    margin-bottom: 80px;
    &.about_mo {
        padding-top: 20px;
    }
`;

const MyTitle = styled.div`
    margin: 0 10px;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.6;
    .titleTxt {
        margin-bottom: 60px;
    }
    .titleTxt.pc {
        width: 40%;
    }
    .title {
        font-size: 50px;
        margin-bottom: 30px;
    }
    .hello {
        margin-bottom: 20px;
        font-size: 26px;
        color: #444;
    }
    .overview {
        font-size: 18px;
    }
    .contents.pc {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const EduWrap = styled.div`
    color: #444;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    &.pc {
        width: 54%;
    }
    .edu {
        margin-bottom: 20px;
        font-size: 24px;
    }
    .eduBox {
        padding: 20px;
        border-top: 5px solid #65a0e9;
        box-shadow: 4px 10px 10px 1px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        line-height: 1.6;
        p {
            font-size: 18px;
            font-weight: 700;
        }
        .date {
            font-size: 15px;
            font-weight: 500;
        }
    }
`;
