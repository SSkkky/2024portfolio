export interface ListType {
    "id": number,
    "subTitle" : string,
    "cate" : string,
    "name": string,
    "keyword": string,
    "imageurl": string,
    "deployurl": string,
    "dateteam": string,
    "goal": goal[],
    "link": string,
    "overview": string,
    "function": fn[],
    "skill": skill[],
    "review": string,
    "trouble": trouble[]
}


export type goal = {
    "goal": string
}

export type fn = {
    "fn": string
}

export type skill = {
    "name": string,
    "skills": string
}

export type trouble = {
    "id": number,
    "title": string,
    "problem": string,
    "reason": string,
    "solve": string
}