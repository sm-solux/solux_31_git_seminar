import { InfoCard } from "../Components";
import { IoIceCreamOutline, IoSchoolOutline, IoLogoReact, IoPeopleOutline } from "react-icons/io5";
import '../Components.css';

function Home() {
    return (
        <div>
            <div className="page-container">

                <InfoCard className="gm"
                    icon={<IoIceCreamOutline />}
                    title="김경민"
                    content="프론트엔드 & 웹 UI 학습자"
                    detail={`기획 의도가 보이는 화면을 만들고 싶습니다. 
단순한 코드 구현을 넘어, 사용자가 정보를 가장 편하게 
받아들일 수 있는 UI 구조를 연구하는 중입니다.`}
                >
                    <div className="gm-box">
                        <div className="box">
                            <p>전공</p>
                            <span>AI</span>
                        </div>
                        <div className="box">
                            <p>관심</p>
                            <span>React</span>
                        </div>
                        <div className="box">
                            <p>성향</p>
                            <span>꾸준함</span>
                        </div>
                    </div>
                </InfoCard>

                <div className="b2">
                    <InfoCard className="box2"
                    icon={<IoSchoolOutline />}
                    content="학습"
                    />
                    <InfoCard className="box2"
                    icon={<IoLogoReact />}
                    content="UI"
                    />
                    <InfoCard className="box2"
                    icon={<IoPeopleOutline />}
                    content="협업"
                    />
                </div>

                <div>
                    <p style={{ color:"#fff", fontWeight:"600", fontSize:"30px", marginBottom:"10px"}}>About Me</p>
                    <div style={{ backgroundColor:"#fff", width:"700px", height:"150px", borderRadius:"15px", padding:"20px" }}>
                    <span style={{ whiteSpace:"pre-wrap", wordBreak:"keep-all", fontSize:"14px" }}>{`저는 새로운 기술을 배우면 바로 작은 결과물로 옮겨보는 편입니다. 
같은 기능이라도 웹에서는 어떻게 보이고, 앱에서는 어떻게 달라지는지 비교하며 구현하는 과정에 흥미를 느낍니다. 
특히 사용자 입장에서 정보가 잘 읽히는 배치와 버튼 흐름을 고민하는 것을 좋아합니다.`}</span>
                    </div>
                </div>

                <div className="keyword">
                    <p style={{ color:"#fff", fontWeight:"600", fontSize:"30px", marginBottom:"10px"}}>핵심 키워드</p>
                    <div style={{ display:"flex", justifyContent:"space-evenly", backgroundColor:"#fff", width:"700px", borderRadius:"15px", padding:"20px" }}>
                        <button>성장과 실천</button>
                        <button>사용자 경험</button>
                        <button>기술적 전문성</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;