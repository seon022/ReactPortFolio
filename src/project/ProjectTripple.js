import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";

const ProjectTripple = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item item_mo': 'item'}>
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
                <div className="pr_skills">
                    <div className="pr_head">
                        skills
                    </div>
                    <div className="skillBox">
                        <p className="sk_react">React</p>
                        <p className="sk_javascript">JavaScript</p>
                        <p className="sk_styled">styled-components</p>
                    </div>
                </div>
                <div className="projectURL">
                    <p className="github"><a href="https://github.com/seon022/ReactPortFolio.git" target="_blank">https://github.com/seon022/ReactPortFolio.git</a></p>
                    <p className="projectSite"><a href="https://team-c-triple.web.app/" target="_blank">https://team-c-triple.web.app/</a></p>
                </div>
            </ProjectCont>
        </div>
    )
}
export default ProjectTripple;

const PrItemWrap = styled.div`
    margin: 0 0 40px 20px;
    .appEx{
        width: 20vw;
    }
    img{
        width: 100%;
    }
`