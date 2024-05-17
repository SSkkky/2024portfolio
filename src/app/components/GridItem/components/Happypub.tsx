import TagComp from './Tag';
import BottleComp from './components/Bottle';

export default function Happypub(){
    return(
        <section id="Happypub" className="Happypub">
            <TagComp keyword={['TEAM', 'HTML']}/>
            <BottleComp />
        </section>
    )
}