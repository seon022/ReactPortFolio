import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import { Link } from 'react-scroll';
import { useRef, useState } from 'react';

const SectionFiles = () => {
    const { isMobile } = useResponsiveApi();
    const [sideQuick, setSideQuick] = useState(false);
    const gotoRef = useRef();

    const clickGoTo = () => {
        setSideQuick(true);
    };

    return (
        <div>
            {!isMobile ? (
                <Folder onClick={clickGoTo} className={sideQuick ? 'clicked' : 'popAni'} ref={gotoRef}>
                    <p>Click!</p>
                    <p>GoTo</p>
                </Folder>
            ) : (
                <span></span>
            )}
            <Files className={!isMobile ? `files_pc ${sideQuick ? 'onClick' : ''}` : 'files_mo'}>
                <div className={isMobile ? 'hideInMobile' : 'close'} onClick={() => setSideQuick(false)}>
                    Close
                </div>
                <Link to="aboutSection" smooth={true}>
                    <div className="index">
                        <div className={isMobile ? 'fileImg mo' : 'fileImg'}>
                            파일
                            <p className="cursor">click</p>
                        </div>
                        <p>About📌</p>
                    </div>
                </Link>
                <Link to="ProjectSection" smooth={true}>
                    <div className="index">
                        <div className={isMobile ? 'fileImg mo' : 'fileImg'}>
                            파일
                            <p className="cursor">click</p>
                        </div>
                        <p>Project 01</p>
                    </div>
                </Link>
                <Link to="Project2" smooth={true}>
                    <div className="index">
                        <div className={isMobile ? 'fileImg mo' : 'fileImg'}>
                            파일
                            <p className="cursor">click</p>
                        </div>
                        <p>Project 02</p>
                    </div>
                </Link>
                <Link to="Project3" smooth={true}>
                    <div className="index">
                        <div className={isMobile ? 'fileImg mo' : 'fileImg'}>
                            파일
                            <p className="cursor">click</p>
                        </div>
                        <p>Project 03</p>
                    </div>
                </Link>
            </Files>
        </div>
    );
};

export default SectionFiles;

const Folder = styled.div`
    @keyframes PopAni {
        0% {
            transform: translate(0);
        }
        25% {
            transform: translate(8px);
        }
        50% {
            transform: translate(0);
        }
        75% {
            transform: translate(8px);
        }
    }
    position: fixed;
    left: -10px;
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70px;
    height: 70px;
    line-height: 1.2;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0 10px 10px 0;
    z-index: 1000;
    transition: 0.4s;
    cursor: pointer;
    &.clicked {
        left: -100%;
    }
    &.popAni:hover {
        scale: 1.05;
    }
    &.popAni {
        animation: PopAni 1.4s 2;
    }
`;

const Files = styled.div`
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    padding: 10px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.6s;
    z-index: 1000;
    &.files_pc {
        top: 40px;
        left: -100%;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px 0 10px 10px;
    }
    &.files_pc.onClick {
        left: 0;
    }

    &.files_pc > div:first-child {
        position: absolute;
        top: 22px;
        right: -58px;
        width: 60px;
        padding: 8px 10px;
        margin-bottom: 10px;
        border-radius: 10px 10px 0 0;
        transform: rotate(90deg);
        background-color: rgba(0, 0, 0, 0.2);
    }
    .cursor {
        display: none;
        position: absolute;
        right: -2px;
        top: 20px;
        width: 30px;
        height: 30px;
        text-indent: -9999px;
        background-image: url(img/ph_cursor-click-fill.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        z-index: 300;
        transition: 0.2s;
    }
    .index {
        margin-bottom: 20px;
    }
    &.files_mo .index {
        margin-bottom: 0;
    }
    .index:hover .cursor {
        display: block;
    }

    &.files_mo {
        top: 0;
        left: 16px;
        right: 16px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 10px 6px 10px;
        font-size: 13px;
        font-weight: 500;
        border-radius: 0 0 10px 10px;
    }

    .fileImg {
        position: relative;
        width: 100%;
        height: 54px;
        text-indent: -9999px;
        background-image: url(img/icon-file.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-size: 50px 50px;
        background-position: center;
    }
    .fileImg.mo {
        background-size: 36px 36px;
    }
`;
