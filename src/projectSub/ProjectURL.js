import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';

const ProjectURL = ({ githubURL, webURL }) => {
    const { isMobile } = useResponsiveApi();
    return (
        <URLWrap>
            <div className={isMobile ? 'projectURL' : 'projectURL pc'}>
                <p className="github">
                    <a href={githubURL} target="_blank">
                        {githubURL}
                    </a>
                </p>
                <p className="projectSite">
                    <a href={webURL} target="_blank">
                        {webURL}
                    </a>
                </p>
            </div>
        </URLWrap>
    );
};
export default ProjectURL;

const URLWrap = styled.div`
    width: 100%;
    .projectURL {
        font-size: 15px;
    }
    .projectURL.pc p {
        display: inline-block;
        margin-right: 10px;
    }
    .projectURL p {
        height: 40px;
        margin-bottom: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 20px;
    }
    .projectURL a {
        display: block;
        box-sizing: border-box;
        padding: 10px 10px 6px 34px;
        background-repeat: no-repeat;
        color: #222;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .projectURL .github a {
        background-size: 24px auto;
        background-position: left 8px top 8px;
        background-image: url(img/icons8-github.svg);
    }
    .projectURL .projectSite a {
        background-size: 22px auto;
        background-position: left 8px top 10px;
        background-image: url(img/icons8-home.png);
    }
`;
