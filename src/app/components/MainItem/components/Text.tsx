"use client"
import { useState, useEffect } from "react"

export default function Text() {
    const [resWidth, setResWidth] = useState(false);
    useEffect(()=>{
        const handleResize = () => {
            window.innerWidth < 1200 && window.innerWidth > 430 ? setResWidth(true) : setResWidth(false)
        }
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <p className="titleText">
            안녕하세요<br></br>
            <b>프론트엔드 개발자<br/>손하늘</b>입니다.
        </p>
        // <p className="titleText">
        //     안녕하세요<br></br>
        //     <b>프론트엔드 개발자
        //     { resWidth ? ' ' : <br/>}손하늘</b>입니다.
        // </p>
    )
}