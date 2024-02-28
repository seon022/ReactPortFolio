import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectSkill from "../projectSub/ProjectSkill";
import ProjectURL from "../projectSub/ProjectURL";
import Circlebg from "../util/Circlebg";

const ProjectPortfolio = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item mo': 'item pc'} id="Project2">
            <ProjectTitle>
                <div className="category">개인 프로젝트</div>
                <div className="pr_name">강선영 포트폴리오</div>
            </ProjectTitle>
            <ProjectCont>
                <div className="pr_time">
                    <div className="pr_head">진행기간 </div>
                    <div>
                        2024.02 - 2024.02
                    </div>
                </div>
                <PrItemWrap>
                    <div>
                        <div className="pr_subTitle"><Circlebg  type={'wide'} >프로젝트 소개</Circlebg></div>
                        <p>내용</p>
                    </div>
                </PrItemWrap>
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