import Link from 'next/link';
import Image from 'next/image';
import GitLogo from '@/assets/skills/git.png'

export default function Header() {
    return (
        <header className="mainItemHeader">
            <b className="siteTitle">2024<br></br>PORTPOLIO</b>
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