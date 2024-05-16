import '../styles/Tag.scss'

type keywordType = {
    keyword : string[]
}

export default function Tag({keyword} : keywordType){
    return(
        <aside className='tags'>
        {
            Array.isArray(keyword) && keyword.map((item, i) => (
                <span 
                key={i}
                className={item} id="tag">
                    {item}
                </span>
            ))
        }
        </aside>
    )
}