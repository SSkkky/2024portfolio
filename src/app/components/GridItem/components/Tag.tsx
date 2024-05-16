import '../styles/Tag.scss'

type keywordType = {
    keyword : string
}

export default function Tag({keyword} : keywordType){
    return(
        <span className={keyword} id="tag">{keyword}</span>
    )
}