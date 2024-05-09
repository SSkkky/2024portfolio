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
    //const skills = [React, Nextjs, Vue, TypeScript, JavaScript, SASS, HTML];
    const skills = [
        {name: 'React', color: '61DAFB'},
        {name: 'Next.js', color: '000000'},
        {name: 'Vue.js', color: '4FC08D'},
        {name: 'TypeScript', color: '3178C6'},
        {name: 'JavaScript', color: 'F7DF1E'},
        {name: 'SASS', color: 'CC6699'},
        {name: 'HTML5', color: 'E34F26'}
    ];

    return (
        <ul className="skillIcons">
          {
                skills.map((item, i) => {
                    return <li key={i}>
                    <Image
                        src={`https://img.shields.io/badge/${item.name}-${item.color}?style=for-the-badge&logo=${item.name}&logoColor=white`}
                        width={60}
                        height={18}
                        alt={`${item} badge`}
                        unoptimized={true}
                    />
                </li>
                })
          }
          </ul>
    )
}