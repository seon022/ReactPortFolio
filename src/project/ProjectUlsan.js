import styled from "styled-components";

import { useResponsiveApi } from "../context/responsive";
import ProjectURL from "../projectSub/ProjectURL";
import ProjectSkill from "../projectSub/ProjectSkill";

const ProjectUlsan = ()=>{
    const { isMobile } = useResponsiveApi();

    <div className={isMobile? 'item mo': 'item pc'}>
        <ProjectTitle>
            <div className="category">개인 프로젝트</div>
            <div className="pr_name">울산 문화관광 웹사이트</div>
        </ProjectTitle>
        <ProjectCont>
            <div className="pr_time">
                <div className="pr_head">진행기간 </div>
                <div>
                    2023.11 - 2023.11
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
}

export default ProjectUlsan;


const PrItemWrap = styled.div`
    margin: 0 0 40px 20px;
    .appEx{
        width: 20vw;
    }
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
        margin-left: 20px;
        margin-bottom: 20px;
    }
    .pr_time > div{
        margin-right: 20px;
    }
`