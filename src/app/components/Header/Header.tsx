import styles from './Header.module.css'; 


function Header() {
    return (
        <div className={styles.cont}>
            <h1 className={styles.title}> Welcome </h1>
        </div>
    );
}
export default Header;