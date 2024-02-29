import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import ProjectSkill from '../projectSub/ProjectSkill';
import ProjectURL from '../projectSub/ProjectURL';
import Circlebg from '../util/Circlebg';
import SlickSlider from '../util/SlickSlider';
import { museumPhoto } from '../imgArray/ProjectImg';

const ProjectMuseum = () => {
    const { isMobile } = useResponsiveApi();

    return (
        <div className={isMobile ? 'item mo' : 'item pc'} id="Project3">
            <div className="item_In">
                <ProjectCont>
                    <div className="contentFlex">
                        <PrItemWrap className="contentTxt narr">
                            <ProjectTitle>
                                <div className="category">개인 프로젝트</div>
                                <div className="pr_name">국립중앙박물관 반응형 홈페이지</div>
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
                                        기존의 국립중앙박물관 홈페이지의 컨텐츠를 강조하는 UI로 변경하고, 반응형 웹으로
                                        구현한 프로젝트입니다.
                                    </p>
                                </div>
                                <div className="pr_explain">
                                    <p className="pr_head">후기</p>
                                    <p>
                                        반응형 웹을 위한 분기점마다 와이어프레임과 시안디자인을 구성해보며 화면 크기에
                                        따라 플렉스 항목과 이미지 리사이징을 고려해야 함을 실습해 볼 수 있었습니다.
                                    </p>
                                </div>
                            </div>
                        </PrItemWrap>
                        <div className="pr_photo wide">
                            <SlickSlider data={museumPhoto} />
                        </div>
                    </div>
                    <ProjectSkill skill1={'React'} skill2={'JavaScript'} skill3={'Styled-components'} />
                    <ProjectURL
                        githubURL={'https://github.com/seon022/project02-museum.git'}
                        webURL={'https://ksy-project-koreamuseum.netlify.app/'}
                    />
                </ProjectCont>
            </div>
        </div>
    );
};
export default ProjectMuseum;

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
    .pr_info {
        margin-bottom: 30px;
    }
    .pr_info > div {
        display: flex;
        margin-bottom: 10px;
    }
    .pr_head {
        font-weight: 600;
    }
    .pr_head > div {
        margin-right: 16px;
    }
`;
