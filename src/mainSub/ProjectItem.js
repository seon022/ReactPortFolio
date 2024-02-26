import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectTripple from "../project/ProjectTripple";


const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <ProjectWrap id="ProjectSection">
        <div className="project">Project</div>
        <ItemWrap>
            
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