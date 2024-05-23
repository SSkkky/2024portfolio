import '../styles/Movie.scss';
import TagComp from './Tag';

export default function Movie(){
    return(
        <section id="Movie">
            <TagComp keyword={['PERSONAL', 'REACT']}/>
            <h3>SFLIX</h3>
        </section>
    )
}