
import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { useScrollApi } from "../context/scrollEvent";

const SectionFiles = ()=> {
    const { isMobile } = useResponsiveApi();
    const { targetRef } = useScrollApi();
    return(
        <Files className={isMobile? 'files files_Flex' : 'files_pc'} ref={targetRef}>
            <div className="project">
                <p className={ isMobile? "fileImg mo" : "fileImg"}>파일</p>
                <p>Project📌</p>
            </div>
            <div className="GitHub">
                <p className={ isMobile? "fileImg mo" : "fileImg"}>파일</p>
                <p>GitHub🌱</p>
            </div>
            <div className="Education">
                <p className={ isMobile? "fileImg mo" : "fileImg"}>파일</p>
                <p>Education📖</p>
            </div>
        </Files>
    );
}

export default SectionFiles;


const Files = styled.div`
    text-align: center;
    &.files_pc{
        margin-right: 20px;
    }

    &.files_pc > div{
        margin-bottom: 30px;
    }


    &.files_Flex{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 40px;
    }
   
    .fileImg{
        width: 100%;
        height: 54px;
        text-indent: -9999px;
        background-image: url(img/icon-file.png);
        background-repeat: no-repeat;
        background-size: 100%;
        background-size: 52px 52px;
        background-position: center;
    }
    .fileImg.mo{
        background-size: 40px 40px;
    }

`