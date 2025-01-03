import Link from 'next/link';
import styles from './page.module.css'

export default function Page() {
  return (
    <div>     
	  <br />
	  <h2>Home</h2>	  
	  
	  <p>Welcome to my personal site. I am a researcher in computer vision and machine learning 
	  with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electrical and Electronic 
	  Engineering. I am also interested in web app development. This site is built by using 
	  Next.js, React.js, JavaScript, HTML and CSS. This site is hosted by GitHub Pages.</p>
	  
	  <p className={styles.footer}>This site might use cookies to improve the browsing 
	  experience of users. If you continue to use this site, it will be assumed that you agree 
	  to the use of cookies.</p>     
    </div>
  );
}


