import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectSkill from "../projectSub/ProjectSkill";
import ProjectURL from "../projectSub/ProjectURL";

const ProjectMuseum = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item mo': 'item pc'}>
            <ProjectTitle>
                <div className="category">개인 프로젝트</div>
                <div className="pr_name">국립중앙박물관 반응형 홈페이지</div>
            </ProjectTitle>
            <ProjectCont>
                <div className="pr_time">
                    <div className="pr_head">진행기간 </div>
                    <div>
                        2023.12 - 2023.12
                    </div>
                </div>
                <PrItemWrap>
                    <div>
                        <p>프로젝트 소개</p>
                        <p>내용</p>
                    </div>
                </PrItemWrap>
                <ProjectSkill 
                    skill1={'jQuery'}
                    skill2={'HTML'}
                    skill3={'CSS'}
                 />
                <ProjectURL 
                     githubURL = {"https://github.com/seon022/project02-museum.git"}
                     webURL = {"https://ksy-project-koreamuseum.netlify.app/"}
                />
            </ProjectCont>
        </div>
    )
}
export default ProjectMuseum;

const PrItemWrap = styled.div`
    img{
        width: 100%;
    }
`

const ProjectTitle = styled.div`
    margin-bottom: 30px;
    .category{
        margin-bottom: 6px;
    }
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