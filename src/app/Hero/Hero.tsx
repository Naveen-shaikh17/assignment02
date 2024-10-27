
import styles from './Hero.module.css';
import Image from 'next/image';
import nodejs_cover_photo_smaller_size from '../public/nodejs_cover_photo_smaller_size.png'

export default function Hero (){
return(
    <section className={styles.hero}>
<div>
    <Image 
    src={nodejs_cover_photo_smaller_size}
    width={500}
    height={300}
    margin={200}/>
    <h1>WELCOME TO NODE.JS</h1>

      </div>
      </section>
)
}