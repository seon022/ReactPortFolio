import styled from "styled-components";


const ProjectItem = ()=>{
    return(
        <Item>
            <ProjectTitle></ProjectTitle>
        </Item>
    )
}
export default ProjectItem;



const Item = styled.div`
    height: 200px;
    border-top: 5px solid #4285F4;
    margin-left: 20px;
    box-shadow: 4px 10px 10px 1px rgba(0,0,0, 0.1);
`

const ProjectTitle = styled.div`

`