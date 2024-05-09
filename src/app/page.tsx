import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main id="mainContainer">
      <article className="item item1">
        <header className="mainItemHeader">
          <b className="siteTitle">2024<br></br>PORTPOLIO</b>
          <div>깃</div>
        </header>
        <p className="titleText">안녕하세요<br></br><b>프론트엔드 개발자<br></br>손하늘</b>입니다.</p>
        <section className="skillIcons">
          
        </section>
        <section className="CloudObject">

        </section>
      </article>
      <article className="item item2">초딩</article>
      <article className="item item3">나이키</article>
      <article className="item item4">민초맵</article>
      <article className="item item5">해피펍</article>
      <article className="item item6">영화</article>
      <article className="item item7">스킬</article>
    </main>
  );
}
