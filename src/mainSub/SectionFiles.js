
import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { useScrollApi } from "../context/scrollEvent";

const SectionFiles = ()=> {
    const { isMobile } = useResponsiveApi();
    const { targetRef } = useScrollApi();
    return(
        <Files className={isMobile? 'files files_Flex' : 'files_pc'} ref={targetRef}>
            <div className="index project">
                <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                    <p className="cursor">click</p>
                </div>
                <p>Project📌</p>
            </div>
            <div className="index GitHub">
                <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                    <p className="cursor">click</p>
                </div>
                <p>GitHub🌱</p>
            </div>
            <div className="index Education">
                <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                    <p className="cursor">click</p>
                </div>
                <p>Education📖</p>
            </div>
        </Files>
    );
}

export default SectionFiles;


const Files = styled.div`
    position: relative;
    text-align: center;
    color: #fff;
    transition: 0.8s;
    &.files_pc{
        justify-content: space-between;
        margin-right: 30px;
        font-size: 15px;
        font-weight: 700;
    }

    &.files_pc > div{
        position: relative;
        margin: 30px 0 50px 0 ;
        transition: 0.4s;
    }
    .index:hover{
        cursor: pointer;
        scale: 1.1;
    }
    .index:hover .cursor{
        opacity: 1;
    }
    .cursor{
        opacity: 0;
        position: absolute;
        right: 12px;
        top: 20px;
        width: 30px;
        height: 30px;
        text-indent: -9999px;
        background-image: url(img/ph_cursor-click-fill.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        z-index: 300;
        transition: 0.8s;
    }


    &.files_Flex{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 40px;
        font-size: 14px;
        font-weight: 700;
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