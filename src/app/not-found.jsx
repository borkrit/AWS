import Image from "next/image";
import styles from "./page.module.css";

export default function NotFound () {
    return(
        <section className={styles.notFound}> 
                <div className={styles.notFound__img}>
                    <p>404</p>
                </div>
                <h1 className="not-found__title">Sorry, page not found</h1>
        </section>
    )
}