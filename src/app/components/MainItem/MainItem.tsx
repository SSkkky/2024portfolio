import Header from "./components/Header"
import Text from "./components/Text"
import Skill from "./components/Skill"

export default function MainItem() {
  return (
      <article className="item item1" >
          <Header/>
          <Text/>
          <Skill/>
          <section className="CloudObject">
          </section>
      </article>
  )
}