import Link from 'next/link';
import Image from 'next/image';
import GitLogo from '@/assets/skills/git.png'
import './Header.scss';

export default function Header(){
    return(
      <header id="MainHeader">
        <h1>SKY</h1>
        <section className='selectbox'>
          <button className='active'>ALL</button>
          <button>PERSONAL</button>
          <button>TEAM</button>
        </section>
         <Link
              href={'https://github.com/SSkkky'}
              target="_blank"
            >
              <Image
                src={GitLogo}
                width={28}
                height={28}
                alt="githubLogo"
                />
            </Link>
      </header>
    )
}