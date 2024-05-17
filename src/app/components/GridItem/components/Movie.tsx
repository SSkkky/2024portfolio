import '../styles/Movie.scss';
import TagComp from './Tag';

export default function Movie(){
    return(
        <article className="movie" id="movie">
            <TagComp keyword={['PERSONAL', 'REACT']}/>
            <h3>SFLIX</h3>
        </article>
    )
}