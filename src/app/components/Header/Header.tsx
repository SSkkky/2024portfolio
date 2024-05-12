import Link from 'next/link';
import Image from 'next/image';
import ButtonComp from './components/Button';
import GitLogo from '@/assets/skills/git.png'
import './Header.scss';

export default function Header(){

    return(
      <header id="MainHeader">
        <h1>SKY</h1>
        <ButtonComp></ButtonComp>
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