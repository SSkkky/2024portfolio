"use client"

export default function Text() {
    return (
        <p className="titleText">
            안녕하세요<br></br>
            <b>프론트엔드 개발자
            { window.innerWidth < 1200 ? ' ' : <br></br>}손하늘</b>입니다.
        </p>
    )
}