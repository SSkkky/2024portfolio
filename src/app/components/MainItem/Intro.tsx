import Header from "./components/Header"
import Text from "./components/Text"
import Skill from "./components/Skill"
import Cloud from "./components/Cloud"
import "./styles/Intro.scss"

export default function MainItem() {
  return (
      <article id="MainItem" className="self">
          {/* <Header/> */}
          <Text/>
          <Skill/>
          <Cloud/>
      </article>
  )
}