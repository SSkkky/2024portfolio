import '../styles/Movie.scss';
import TagComp from './Tag';

export default function movie(){
    return(
        <article className="movie" id="movie">
            <TagComp keyword='PERSONAL'/>
            <h3>SFLIX</h3>
        </article>
    )
}