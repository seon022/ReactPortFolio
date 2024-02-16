import styled from "styled-components";
import BrowserContents from "../browserTem/BrowserContents";
import ProjectItem from "./ProjectItem";
import AboutMe from "./AboutMe";

const M2Contents = ()=> {
    return(
        <BrowserContents>
            <AboutMe />
            <ProjectItem />
        </BrowserContents>
    );
}

export default M2Contents;
