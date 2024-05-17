import '../styles/Minchomap.scss'
import TagComp from './Tag';

export default function Minchomap(){
    return(
        <section id="Minchomap" className="Minchomap">
            <TagComp keyword={['PERSONAL', 'VUE']}/>
            민초맵
        </section>
    )
}