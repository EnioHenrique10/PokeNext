import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/images/pokeball.png'
import styles from '../../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navebar}>
            <div className={styles.logo}>
               <Image src={Logo}  alt={"Lgo"} /> 
                
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}