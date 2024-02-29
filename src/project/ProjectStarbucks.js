import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import ProjectSkill from '../projectSub/ProjectSkill';
import ProjectURL from '../projectSub/ProjectURL';
import Circlebg from '../util/Circlebg';
import SlickSlider from '../util/SlickSlider';
import { starbucksPhoto } from '../imgArray/ProjectImg';

const ProjectStarbucks = () => {
    const { isMobile } = useResponsiveApi();

    return (
        <div className={isMobile ? 'item mo' : 'item pc'}>
            <div className="item_In">
                <ProjectCont>
                    <div className="contentFlex">
                        <PrItemWrap className="contentTxt p3">
                            <ProjectTitle>
                                <div className="category">개인 프로젝트</div>
                                <div className="pr_name">스타벅스 홈페이지 UI 구현</div>
                            </ProjectTitle>
                            <div className="pr_info">
                                <div>
                                    <div className="pr_head">진행기간</div>
                                    <div>2023.12 - 2023.12</div>
                                </div>
                                <div className="pr_mem">
                                    <p className="pr_head">프로젝트 인원</p>
                                    <p>1명</p>
                                </div>
                            </div>
                            <div className="pr_subTitle">
                                <Circlebg type={'wide'}>프로젝트 소개</Circlebg>
                            </div>
                            <div className="pr_txt">
                                <div className="pr_outline">
                                    <p className="pr_head">프로젝트 개요</p>
                                    <p>
                                        스타벅스 홈페이지 클론 코딩한 프로젝트입니다. 대부분 비슷하나 사용성을 높일 수
                                        있도록 서비스 이용자를 고려하여 항목 배치를 재구성했습니다.
                                    </p>
                                </div>
                                <div className="pr_explain">
                                    <p className="pr_head">후기</p>
                                    <p>
                                        서비스 이용자를 예상하여 사용자 경험을 고려하는 설계가 무엇인지 고민해볼 수
                                        있었습니다. 또한, css만을 이용한 애니메이션을 구현해보며 css를 학습할 수
                                        있었습니다.
                                    </p>
                                </div>
                            </div>
                        </PrItemWrap>
                    </div>
                    <div className="pr_photo p3">
                        <SlickSlider data={starbucksPhoto} />
                    </div>
                    <ProjectSkill skill1={'jQuery'} skill2={'HTML'} skill3={'CSS'} />
                    <ProjectURL
                        githubURL={'https://github.com/seon022/project01-starbucks.git'}
                        webURL={'https://ksy-project-starbucks.netlify.app/'}
                    />
                </ProjectCont>
            </div>
        </div>
    );
};
export default ProjectStarbucks;

const PrItemWrap = styled.div`
    img {
        width: 100%;
    }
`;

const ProjectTitle = styled.div`
    margin-bottom: 30px;
    .pr_name {
        font-size: 24px;
        font-weight: 700;
    }
`;
const ProjectCont = styled.div`
    .pr_time {
        display: flex;
        margin-bottom: 20px;
    }
    .pr_time > div {
    }
`;
