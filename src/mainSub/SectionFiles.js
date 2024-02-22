
import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const SectionFiles = ()=> {
    const { isMobile } = useResponsiveApi();
    const [sideQuick, setSideQuick] = useState(false);

    useEffect(()=>{

    },[]);

    return(
        <div>
            {!isMobile? <Folder onClick={() => setSideQuick(true)} className={ sideQuick? 'goto clicked': 'goto' } >
                            <p>Click!</p>
                            <p>GoTo</p>
                        </Folder> 
            : <span></span>}
            <Files className={!isMobile ? `files_pc ${sideQuick? 'onClick': ''}`: 'files_mo'}>
                <Link to="about" spy={true} smooth={true} >
                    <div className="index project">
                        <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                            <p className="cursor">click</p>
                        </div>
                        <p>About📌</p>
                    </div>
                </Link>
                <Link to="Project" spy={true} smooth={true} >
                    <div className="index Project">
                        <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                            <p className="cursor">click</p>
                        </div>
                        <p>Project🌱</p>
                    </div>
                </Link>
                <Link to="Education" spy={true} smooth={true} >
                    <div className="index Education">
                        <div className={ isMobile? "fileImg mo" : "fileImg"}>파일
                            <p className="cursor">click</p>
                        </div>
                        <p>Education📖</p>
                    </div>
                </Link>
            </Files>
        </div>
    );
}

export default SectionFiles;

const Folder = styled.div`
    position: fixed;
    left: 0;
    top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70px;
    height: 50px;
    line-height: 1.2;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0 , 0.4);
    border-radius: 0 10px 10px 0;
    z-index: 1000;
    transition: 0.4s;
    &.clicked{
        left: -100%;
    }
`

const Files = styled.div`
    position: fixed;
    box-sizing: border-box;
    padding: 10px;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0 , 0.2);
    border-radius: 10px;
    transition: 0.6s;
    z-index: 1000;
    
    &.files_pc{
        top: 30px;
        left: -100%;
        width: 100px;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 700;
    }
    &.files_pc.onClick{
        left: 10px;
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


    &.files_mo{
        top: 10px;
        left: 20px;
        right: 20px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
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