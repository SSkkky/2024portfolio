import TagComp from './Tag';
import BottleComp from './components/Bottle';

export default function Happypub(){
    return(
        <article className="happypub">
            <TagComp keyword={['TEAM', 'HTML']}/>
            <BottleComp />
        </article>
    )
}