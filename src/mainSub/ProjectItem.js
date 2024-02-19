import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";


const ProjectItem = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <div>
        <div>Project</div>
        <ItemWrap>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    리액트 여행일정 앱
                </ProjectTitle>
            </div>
            <div className={isMobile? 'item item_mo': 'item'}>
                <ProjectTitle>
                    국립중앙박물관 반응형 홈페이지
                </ProjectTitle>
            </div>
        </ItemWrap>
        </div>
    )
}
export default ProjectItem;


const ItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;

    .item{
        box-sizing: border-box;
        width: 48%;
        height: 200px;
        margin-right: 10px;
        border-top: 5px solid #4285F4;
        box-shadow: 4px 10px 10px 1px rgba(0,0,0, 0.1);
        }
    
    .item.item_mo{
        width: 100%;
        margin-bottom: 40px;
    }





`

const ProjectTitle = styled.div`

`