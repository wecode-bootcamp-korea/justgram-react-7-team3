import './Main.scss';
import {Header,Feed} from '../../Components';
function Main() {
  return (
    <>
       <Header />
       <Feed writer={"nxwijixhc "} profileImage={"/images/jiwonProfile.jpg"} ImageURl={"/images/feed1.jpg"} feedContent={"에글링턴 나들이"}/>
       <Feed writer={"na.jaemin0813 "} profileImage={"/images/jaemin.jpg"} ImageURl={"/images/feed2.jpg"} feedContent={"오싱턴 나들이"}/>
       <Feed writer={"haechanahceah "} profileImage={"/images/haechan.jpg"} ImageURl={"/images/feed3.jpg"} feedContent={"벨우즈 브루어리"}/>
    </>
  );
}

export default Main;

