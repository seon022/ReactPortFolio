import styled from "styled-components";

import { useResponsiveApi } from "../context/responsive";
import ProjectURL from "../projectSub/ProjectURL";
import ProjectSkill from "../projectSub/ProjectSkill";
import Circlebg from "../util/Circlebg";
import SlickSlider from "../util/SlickSlider";
import { ulsanPhoto } from "../imgArray/ProjectImg";

const ProjectUlsan = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <div className={isMobile? 'item mo': 'item pc'}>
            <div className="item_In">
                <ProjectCont>
                    <div className="contentFlex">
                        <PrItemWrap className="contentTxt p3">
                            <ProjectTitle>
                                <div className="category">개인 프로젝트</div>
                                <div className="pr_name">울산 문화관광 웹사이트</div>
                            </ProjectTitle>
                            <div className="pr_info">
                                <div>
                                    <div className="pr_head">진행기간</div>
                                    <div>
                                        2023.11 - 2023.11
                                    </div>
                                </div>  
                                <div className="pr_mem">
                                    <p className="pr_head">프로젝트 인원</p>
                                    <p>1명</p>
                                </div>
                            </div>
                            <div className="pr_subTitle"><Circlebg  type={'wide'} >프로젝트 소개</Circlebg></div>
                                <div className="pr_txt">
                                    <div className="pr_outline">
                                        <p className="pr_head">
                                            프로젝트 개요
                                        </p>
                                        <p>
                                            울산 문화관광 웹사이트를 재구성하여 구현한 프로젝트입니다. 사용자의 수요를 예상하여 주요 컨텐츠 위주로 웹페이지의 항목을 재구성하려 고민했습니다.
                                        </p>
                                    </div>
                                    <div className="pr_explain">
                                        <p className="pr_head">
                                            후기
                                        </p>
                                        <p>
                                            다른 지역의 관광 홈페이지를 참고하며, 사용자가 어떤 목적을 가지고 웹을 접속했는지를 고민하여 배치를 설계했습니다. 그리고 아이콘을 이용한 퀵메뉴를 만들어 사용성을 높이려 했습니다.
                                        </p>
                                    </div>
                                </div>
                        </PrItemWrap>
                    </div>
                    <div className="pr_photo wide p3"><SlickSlider data={ulsanPhoto} /></div>
                    <ProjectSkill 
                        skill1={'jQuery'}
                        skill2={'HTML'}
                        skill3={'CSS'}
                        />
                    <ProjectURL
                        githubURL = {"https://github.com/seon022/project1-2_UlasnTourWeb.git"}
                        webURL = {"https://ksy-project-ulsantour.netlify.app/"}
                    />
                </ProjectCont>
            </div>
        </div>
    );
}

export default ProjectUlsan;


const PrItemWrap = styled.div`
    img{
        width: 100%;
    }
`

const ProjectTitle = styled.div`
    margin-bottom: 30px;
    .pr_name{
        font-size: 24px;
        font-weight: 700;
    }
`
const ProjectCont = styled.div`
  
    .pr_time{
        display: flex;
        margin-bottom: 20px;
    }
    .pr_time > div{
        margin-right: 20px;
    }
`