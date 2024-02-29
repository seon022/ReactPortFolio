import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import Circlebg from '../util/Circlebg';

const AboutMe = () => {
    const { isMobile } = useResponsiveApi();
    return (
        <AboutWrap className={isMobile ? 'about_mo' : ''}>
            <MyTitle>
                <div className={isMobile ? 'title' : 'title pc'}>
                    <Circlebg type={'huge'}>About Me</Circlebg>
                </div>
                <div className="titleTxt">
                    <p className="hello">안녕하세요, 강선영입니다.</p>
                    <p className="overview">
                        상상한 아이디어를 구현하는 과정이 재밌습니다. <br />
                        실패에 굴하지 않고 꾸준히 성장하는 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <MyGoal>
                    The greatest glory in living lies not in never falling, <br />
                    but in rising every time we fall.
                </MyGoal>
            </MyTitle>
        </AboutWrap>
    );
};

export default AboutMe;

const AboutWrap = styled.div`
    padding-top: 60px;
    margin: 0 auto;
    margin-bottom: 120px;
    &.about_mo {
        padding-top: 20px;
    }
`;

const MyTitle = styled.div`
    text-align: center;
    margin: 0 20px;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.6;
    .titleTxt {
        margin-bottom: 40px;
    }
    .title {
        font-size: 50px;
        margin-bottom: 30px;
    }
    .hello {
        margin-bottom: 20px;
        font-size: 28px;
        color: #444;
    }
    .overview {
        font-size: 18px;
    }
`;
const MyGoal = styled.div`
    color: #666;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
`;
