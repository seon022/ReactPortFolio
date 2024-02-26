import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectTripple from "../project/ProjectTripple";


const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <ProjectWrap id="ProjectSection">
        <div className="project">Project</div>
        <ItemWrap>
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
                    <ProjectTripple />
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
            <div className={isMobile? 'item item_mo': 'item'}>
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
                        <p className="github"><a href="https://github.com/seon022/project02-museum.git" target="_blank">https://github.com/seon022/project02-museum.git</a></p>
                        <p className="projectSite"><a href="https://ksy-project-koreamuseum.netlify.app/">https://ksy-project-koreamuseum.netlify.app/</a></p>
                    </div>
                </ProjectCont>
            </div>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    <div className="category">개인 프로젝트</div>
                    <div className="pr_name">스타벅스 홈페이지 UI 구현</div>
                </ProjectTitle>
                <ProjectCont>
                    <div className="pr_time">
                        <div className="pr_head">진행기간 </div>
                        <div>
                            2023.12 - 2023.12
                        </div>
                    </div>
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
                        <p className="github"><a href="https://github.com/seon022/project01-starbucks.git" target="_blank">https://github.com/seon022/project01-starbucks.git</a></p>
                        <p className="projectSite"><a href="https://ksy-project-starbucks.netlify.app/">https://ksy-project-starbucks.netlify.app/</a></p>
                    </div>
                </ProjectCont>
            </div>
            <div className={isMobile? 'item item_mo': 'item'}>
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
                        <p className="github"><a href="https://github.com/seon022/project1-2_UlasnTourWeb.gitt" target="_blank">https://github.com/seon022/project1-2_UlasnTourWeb.git</a></p>
                        <p className="projectSite"><a href="https://ksy-project-ulsantour.netlify.app/">https://ksy-project-ulsantour.netlify.app/</a></p>
                    </div>
                </ProjectCont>
            </div>
        </ItemWrap>
        </ProjectWrap>
    )
}
export default ProjectItem;

const ProjectWrap = styled.div`
    margin-bottom: 40px;
    .project{
        margin: 0 20px 40px 20px;
        font-size: 40px;
        font-weight: 700;
    }
`
const ItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    .item{
        width: 100%;
        margin: 0 20px 30px 0;
        border-top: 5px solid #4285F4;
        box-shadow: 4px 10px 10px 1px rgba(0,0,0, 0.1);
        }
    .item > div{
        margin-bottom: 50px;
    }
    .item.item_mo{
        margin-bottom: 40px;
    }
    
    .item.item_mo > div{
        margin-bottom: 40px;
    }
`

const ProjectTitle = styled.div`
    margin: 20px 0 20px 10px;
    .category{
        margin-bottom: 6px;
    }
    .pr_name{
        font-size: 24px;
        font-weight: 700;
    }
`
const ProjectCont = styled.div`
    .pr_skills{
        font-weight: 700;
        margin-bottom: 20px;
    }
    .pr_head{
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 15px;
    }
    .skillBox{
        display: flex;
        margin-left: 10px;
        margin-bottom: 40px;
    }
    .skillBox p{
        padding: 4px 10px;
        margin-right: 10px;
        border-radius: 10px;
        font-weight: 700;
        color: #fff;
    }

    .sk_react{
        background-color: skyblue;
    }
    .sk_javascript{
        background-color: lightcoral;
    }
    .sk_styled{
        background-color: grey;
    }
    .pr_time{
        display: flex;
        margin-bottom: 20px;
    }
    .pr_time > div{
        margin-right: 20px;
    }
    .projectURL{
        margin-left: 10px;
        font-size: 15px;
    }
    .projectURL a{
        display: inline-block;
        padding: 6px 10px 6px 34px;
        margin-bottom: 10px;
        border-radius: 20px;
        color: #222;
        background-color: rgba(0,0,0, 0.1);
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: left 8px center;
    }
    .projectURL .github a{
        background-image: url(img/icons8-github.svg);
    }
    .projectURL .projectSite a{
        background-image: url(img/icons8-clover.png);
    }




`