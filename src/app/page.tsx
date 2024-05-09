import MainItem from './components/MainItem/MainItem'
import '@/styles/module/main/main.scss'

export default function Home() {
  return (
    <main id="mainContainer">
      <MainItem />
      <article className="item item2">초딩</article>
      <article className="item item3">나이키</article>
      <article className="item item4">민초맵</article>
      <article className="item item5">해피펍</article>
      <article className="item item6">영화</article>
      <article className="item item7">스킬</article>
    </main>
  );
}
