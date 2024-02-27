import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectSkill from "../projectSub/ProjectSkill";
import ProjectURL from "../projectSub/ProjectURL";

const ProjectTripple = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item mo': 'item pc'}>
            <ProjectTitle>
                <div className="category">팀 프로젝트</div>
                <div className="pr_name">리액트 여행일정 앱</div>
            </ProjectTitle>
            <ProjectCont>
                <div className="pr_time">
                    <div className="pr_head">진행기간 </div>
                    <div>
                        2024.01 - 2024.02
                    </div>
                </div>
                <PrItemWrap>
                    <div>
                        <p>프로젝트 소개</p>
                        <p>내용</p>
                    </div>
                </PrItemWrap>
                <ProjectSkill 
                    skill1={'React'}
                    skill2={'JavaScript'}
                    skill3={'Styled-components'}
                />
                <ProjectURL 
                    githubURL = {'https://github.com/TeamC-Triple/team-c-triple.git'}
                    webURL = {'https://team-c-triple.web.app/'}
                />
            </ProjectCont>
        </div>
    )
}
export default ProjectTripple;

const PrItemWrap = styled.div`
    margin-bottom: 20px;
    img{
        width: 100%;
    }
`

const ProjectTitle = styled.div`
    margin-bottom: 30px;
    .category{
        margin-bottom: 6px;
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