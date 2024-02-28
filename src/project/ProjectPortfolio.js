import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectSkill from "../projectSub/ProjectSkill";
import ProjectURL from "../projectSub/ProjectURL";
import Circlebg from "../util/Circlebg";
import SlickSlider from "../util/SlickSlider";
import { portfolioPhoto } from "../imgArray/ProjectImg";

const ProjectPortfolio = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item mo': 'item pc'} id="Project2">
            <div className="item_In">
                <ProjectCont>
                    <div className="contentFlex">
                        <PrItemWrap className="contentTxt">
                            <ProjectTitle>
                                <div className="category">개인 프로젝트</div>
                                <div className="pr_name">강선영 포트폴리오</div>
                            </ProjectTitle>
                            <div className="pr_info">
                                <div>
                                    <div className="pr_head">진행기간</div>
                                    <div>
                                        2024.02 - 2024.02
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
                                            지금까지 작업한 작업물들을 보여주기 위한 프로젝트입니다.
                                            React를 이용하여 작업하여
                                        </p>
                                    </div>
                                    <div className="pr_explain">
                                        <p className="pr_head">
                                            기능
                                        </p>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </div>
                        </PrItemWrap>
                        {!isMobile? <div className="pr_photo"><SlickSlider data={portfolioPhoto} /></div>
                        : <span></span>}
                        
                    </div>
                    <ProjectSkill 
                        skill1={'React'}
                        skill2={'JavaScript'}
                        skill3={'Styled-components'}
                    />
                    <ProjectURL 
                        githubURL = {"https://github.com/seon022/ReactPortFolio.git"}
                        webURL = {"https://ksy-portfolio.web.app"}
                    />
                </ProjectCont>
            </div>
        </div>
    )
}

export default ProjectPortfolio;

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
    }
`