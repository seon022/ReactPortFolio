import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";


const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <ProjectWrap id="ProjectSection">
        <div className="project">Project</div>
        <ItemWrap>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    <div>팀 프로젝트</div>
                    <div>리액트 여행일정 앱</div>
                </ProjectTitle>
                <ProjectCont>
                    <div className="pr_skills">
                        <div className="pr_head">
                            skills
                        </div>
                        <div className="skillBox">
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>styled-components</p>
                        </div>
                    </div>
                    <div className="pr_time">
                        <div className="pr_head">진행기간 : </div>
                        <div>
                            2024.01 - 2024.02
                        </div>
                    </div>
                </ProjectCont>
            </div>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    <div>개인 프로젝트</div>
                    <div>국립중앙박물관 반응형 홈페이지</div>
                </ProjectTitle>
                <ProjectCont>
                    <div className="pr_skills">
                        <div className="pr_head">
                            skills
                        </div>
                        <div className="skillBox">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="pr_time">
                        <div className="pr_head">진행기간 : </div>
                        <div>
                            2023.11 - 2023.11
                        </div>
                    </div>
                </ProjectCont>
            </div>
            
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    울산 관광페이지
                </ProjectTitle>
            </div>
        </ItemWrap>
        </ProjectWrap>
    )
}
export default ProjectItem;

const ProjectWrap = styled.div`
    .project{
        margin: 0 20px 40px 20px;
        font-size: 30px;
        font-weight: 700;
    }
`
const ItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    .item{
        /* box-sizing: border-box;
        width: 48%; */
        
        width: 100%;
        height: 200px;
        margin-right: 10px;
        border-top: 5px solid #4285F4;
        box-shadow: 4px 10px 10px 1px rgba(0,0,0, 0.1);
        }
    
    .item.item_mo{
        margin-bottom: 40px;
    }
`

const ProjectTitle = styled.div`
    margin: 20px 0 20px 10px;
    font-size: 16px;
    font-weight: 900;
`
const ProjectCont = styled.div`
    .pr_skills{
        font-weight: 700;
        margin-bottom: 20px;
    }
    .pr_head{
        margin-left: 10px;
        font-weight: 700;
        font-size: 15px;
    }
    .skillBox{
        display: flex;
        margin-left: 10px;
    }

    .skillBox p{
        padding: 4px 10px;
        margin-right: 10px;
        border-radius: 10px;
        background-color: skyblue;
        font-weight: 700;
        color: #fff;
    }
    .pr_time{
        display: flex;
    }
    .pr_time > div{
        margin-right: 20px;
    }
`