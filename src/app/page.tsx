import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './Hero/Hero';
import styles from './page.module.css';




export default function Home() {


  return (
    <div className={styles.dabba}>
      <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"  />
    <Header></Header>
    
    <Hero></Hero>
      
     <Footer></Footer>
    </div>
  )
    };
