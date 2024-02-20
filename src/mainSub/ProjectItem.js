import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";


const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <ProjectWrap>
        <div className="project">Project</div>
        <ItemWrap>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    리액트 여행일정 앱
                </ProjectTitle>
                <ProjectCont>
                    <div className="pr_skills">
                        <div className="pr_head">
                            skills
                        </div>
                        <div>
                            <p>React</p>
                            <p>JavaScript</p>
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
                    국립중앙박물관 반응형 홈페이지
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

`