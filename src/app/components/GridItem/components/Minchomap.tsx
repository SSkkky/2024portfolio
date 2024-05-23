import '../styles/Minchomap.scss'
import TagComp from './Tag';

export default function Minchomap(){
    return(
        <section id="Minchomap">
            <TagComp keyword={['PERSONAL', 'VUE']}/>
            민초맵
        </section>
    )
}