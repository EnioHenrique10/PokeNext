import Image from "next/image"
import styles from '../styles/About.module.css'
import LogoIma from '../../public/images/charizard.png'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo minima tenetur consectetur mollitia eveniet maiores quod neque repellat. Aliquid exercitationem esse provident consequatur dolorum fugiat, ut excepturi maiores mollitia.</p>
            <Image src={LogoIma} alt={"logoIma"} />
        </div>
    )
}