import Header from "./components/Header"
import Text from "./components/Text"
import Skill from "./components/Skill"
import Cloud from "./components/Cloud"
import "./styles/MainItem.scss"

export default function MainItem() {
  return (
      <article id="MainItem">
          <Header/>
          <Text/>
          <Skill/>
          <Cloud/>
      </article>
  )
}