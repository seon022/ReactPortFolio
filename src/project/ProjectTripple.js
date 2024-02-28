import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import ProjectSkill from "../projectSub/ProjectSkill";
import ProjectURL from "../projectSub/ProjectURL";
import Circlebg from "../util/Circlebg";
import { tripplePhoto } from "../imgArray/ProjectImg";
import SlickSlider from "../util/SlickSlider";


const ProjectTripple = ()=>{
    const { isMobile } = useResponsiveApi();

    return(
        <div className={isMobile? 'item mo': 'item pc'}>
            <ProjectTitle>
                <div className="category">팀 프로젝트</div>
                <div className="pr_name">리액트 여행일정 앱</div>
            </ProjectTitle>
            <ProjectCont>
                <div className="pr_info">
                    <div>
                        <div className="pr_head">진행기간</div>
                        <div>
                            2024.01 - 2024.02
                        </div>
                    </div>  
                    <div className="pr_mem">
                        <p className="pr_head">프로젝트 인원</p>
                        <p>4명</p>
                    </div>
                </div>
                <PrItemWrap>
                    <div className="pr_subTitle"><Circlebg  type={'wide'} >프로젝트 소개</Circlebg></div>
                    <div className="pr_ex">
                            <div className="pr_txt">
                            <div className="pr_outline">프로젝트 개요</div>
                            <p>여행 일정 앱인 트리플을 참고하여, 추천 여행 코스를 볼 수 있고 여행일정을 짤 수 있는 기능을 모바일 사이즈 UI로 구현한 프로젝트입니다. 
                            <br />    
                            여행계획을 짜기 어려워하는 사용자를 타겟으로 
                            <br />    
                            여행 일정을 세우는 기능과 지난 여행계획을 볼 수 있는 기능을 구현하는 것을 주안점으로 두고 진행했습니다.
                            <br />   
                            또한 팀원들과 함께 피그마로 디자인 프로토타입을 구현하며 더 나은 UX를 위해 고민했습니다.
                            </p>
                            <div>
                                <p className="pr_head">
                                    구현기능
                                </p>
                                <p>
                                    여행 일정을 세우는 부분은 지역, 날짜를 선택하고, 사용자가 선택한 여행스타일 키워드에 따라 관광지를 보여주는 기능, 여행비용 기록, 메모 기록을 구현하고자 했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="pr_photo"><SlickSlider data={tripplePhoto} /></div>
                    </div>
                </PrItemWrap>
                <ProjectSkill 
                    skill1={'React'}
                    skill2={'JavaScript'}
                    skill3={'Styled-components'}
                />
                <ProjectURL 
                    githubURL = {'https://github.com/TeamC-Triple/team-c-triple.git'}
                    webURL = {'https://team-c-triple.web.app/'}
                />
            </ProjectCont>
        </div>
    )
}
export default ProjectTripple;

const PrItemWrap = styled.div`
    margin-bottom: 20px;
    img{
        width: 100%;
    }
`

const ProjectTitle = styled.div`
    margin-bottom: 30px;
`
const ProjectCont = styled.div`
`