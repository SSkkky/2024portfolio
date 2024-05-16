import '../styles/About.scss';
import TagComp from './Tag';
import { motion } from "framer-motion";

export default function About(){
    return(
        <article className="about" id="about">
            <motion.div
            className='me'
            initial={{opacity : 1}}
            whileHover={{
                scale : 1.2,
                transition: {
                    type : 'spring',
                    stiffness : 400,
                    damping : 10,
                    delay: 0.05
                }
            }}>
                ㅇㅅㅇb
            </motion.div>
        </article>
    )
}