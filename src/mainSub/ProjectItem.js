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
                <div className={!isMobile? "project3_Wrap" : ""}>
                    <ProjectStarbucks />
                    <ProjectUlsan />
                </div>
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
    .project3_Wrap{
        display: flex;
        justify-content: space-between;
    }
    .project3_Wrap .item.pc{
        width: 49%;
    }
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
    .item.pc .contentTxt.narr{
        width: 50%;
    }
    .item.pc .contentTxt.p3{
        width: 100%;
    }
    .item.pc .contentFlex{
        display: flex;
        justify-content: space-between;
    }
    .item.mo .contentFlex{
        display: block;
        position: relative;
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
        padding: 30px 10px;
        margin-top: 40px;
        width: 30%;
        max-height: 580px;
        max-width: 260px;
        margin-left: 10px;
        border: 1px solid #ccc;
        border-radius: 20px;
        overflow: hidden;
    }
    .item.mo .pr_photo{
        margin: 0 auto;
        margin-top: 40px;
    }

    .pr_photo.p3{   
        margin: 0 auto;
        margin-top: 40px;
    }
    .pr_photo.wide{
        margin-top: 60px;
        max-width: 500px;
        max-height: 260px;
        border: transparent;
        width: 60%;
    }
    .pr_photo img{
        width: 100%;
        height: auto;
    }
    .pr_explain{
        margin-bottom: 20px;
    }

`
