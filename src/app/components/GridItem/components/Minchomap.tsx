import '../styles/Minchomap.scss'
import TagComp from './Tag';

export default function minchomap(){
    return(
        <article className="minchomap" id="minchomap">
            <TagComp keyword={['PERSONAL', 'VUE']}/>
            민초맵
            </article>
    )
}