import styled from "styled-components";
import ProjectTripple from "../project/ProjectTripple";
import ProjectMuseum from "../project/ProjectMuseum";
import ProjectStarbucks from "../project/ProjectStarbucks";
import ProjectPortfolio from "../project/ProjectPortfolio";
import { useResponsiveApi } from "../context/responsive";
import ProjectUlsan from "../project/ProjectUlsan";
import Circlebg from "../util/Circlebg";

const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <ProjectWrap id="ProjectSection">
            <div className="project"><Circlebg type={'project'} >Project</Circlebg></div>
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
    .item_In{
        max-width: 1240px;
        margin: 0 auto;
    }
    .pr_info{
        margin-bottom:50px;
    }
    .pr_info > div{
        display: flex;
        margin-bottom: 10px;
    }
    .item.mo .contentTxt{
        width: 100%;
    }
    .item.pc .contentTxt{
        width: 64%;
    }
    .item.pc .contentFlex{
        display: flex;
        justify-content: space-between;
    }
    .pr_head {
        display: block;
        margin: 0 10px 10px 0;
        font-weight: 600;
        font-size: 16px;
    }
    .pr_head > div{
        margin-right: 16px;
    }
    .pr_name{
        line-height: 1.6;
        font-size: 24px;
        font-weight: 700;
    }
    .pr_skills{
        margin-top: 40px;
    }
    .pr_subTitle{
        margin-bottom: 20px;
        margin-left: -6px;
        font-size: 19px;
        font-weight: 600;
    }
    .pr_txt{
        font-size: 15px;
        line-height: 1.6;
    }
    .pr_outline{
        width: 100%;
        margin-bottom: 30px;
    }
    .pr_photo{
        padding: 30px 0;
        width: 30%;
        max-width: 280px;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
    }
    .pr_explain{
        margin-bottom: 20px;
    }

`
