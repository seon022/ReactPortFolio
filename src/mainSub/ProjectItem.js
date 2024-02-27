import styled from "styled-components";
import ProjectTripple from "../project/ProjectTripple";
import ProjectMuseum from "../project/ProjectMuseum";
import ProjectStarbucks from "../project/ProjectStarbucks";
import ProjectPortfolio from "../project/ProjectPortfolio";
import { useResponsiveApi } from "../context/responsive";
import ProjectUlsan from "../project/ProjectUlsan";

const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <ProjectWrap id="ProjectSection">
            <div className="project">Project</div>
            <ItemWrap>
                <ProjectTripple />
                <ProjectPortfolio />
                <ProjectMuseum />
                <ProjectStarbucks />
                <ProjectUlsan />
            </ItemWrap>
        </ProjectWrap>
    )
}
export default ProjectItem;

const ProjectWrap = styled.div`
    margin-bottom: 40px;
    .project{
        margin-bottom: 60px;
        font-size: 40px;
        font-weight: 700;
    }
`
const ItemWrap = styled.div`
    box-sizing: border-box;
    .item{
        box-sizing: border-box;
        width: 100%;
        border-top: 5px solid #65A0E9;
        box-shadow: 4px 10px 10px 1px rgba(0,0,0, 0.1);
        background-color: #fff;
        }
    .item.pc{
        padding: 50px 20px 40px 20px;
        margin-bottom: 60px;
    }
    .item.mo{
        padding: 30px 10px 20px 10px;
        margin-bottom: 50px;
    }
    .pr_name{
        line-height: 1.6;
        font-size: 24px;
        font-weight: 700;
    }
    .pr_head{
        margin-right: 10px;
    }
    .pr_skills{
        margin-top: 40px;
    }
    .pr_subTitle{
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
    }
`
