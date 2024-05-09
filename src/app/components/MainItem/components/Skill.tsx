"use client"

import Image from 'next/image'
import React from '@/assets/skills/React.png';
import HTML from '@/assets/skills/HTML.png';
import JavaScript from '@/assets/skills/JavaScript.png';
import Nextjs from '@/assets/skills/Nextjs.png';
import SASS from '@/assets/skills/SASS.png';
import TypeScript from '@/assets/skills/TypeScript.png';
import Vue from '@/assets/skills/Vue.png';

export default function Skill() {
    const skills = [React, Nextjs, Vue, TypeScript, JavaScript, SASS, HTML];

    return (
        <ul className="skillIcons">
          {
                skills.map((item, i) => {
                    return <li key={i}>
                    <Image
                        src={item}
                        width={28}
                        height={28}
                        alt={`${item} Logo`}
                    />
                </li>
                })
          }
          </ul>
    )
}