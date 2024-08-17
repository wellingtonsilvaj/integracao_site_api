import styles from '@/components/AboutContent/AboutContent.module.css';
const AboutContent = () => {
    return (
            <section className={`${styles.content} ${styles.about}`} >
            <div className={styles.maxWidth} >
                <h2 className={styles.title} >Sobre Empresa</h2>

                <div className={styles.aboutContent} >
                    <div className={`${styles.column} ${styles.left}`} >
                        <img src="/images/aboutContent/banner_top_v4.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`} >
                        <div className={styles.text} >
                           1 Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                              letters, as opposed to using 'Content here, </p>
                    </div>
                </div>

                <div className={styles.aboutContent} >
                    <div className={`${styles.column} ${styles.left}`} >
                        <img src="/images/aboutContent/banner_top_v5.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`} >
                        <div className={styles.text} >
                           2 Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                              letters, as opposed to using 'Content here, </p>
                    </div>
                </div>

                <div className={styles.aboutContent} >
                    <div className={`${styles.column} ${styles.left}`} >
                        <img src="/images/aboutContent/banner_top_v4.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`} >
                        <div className={styles.text} >
                          3  Comigo o serviço é feito dentro do prazo, com segurança e qualidade para você e sua família não terem preocupações.
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                              letters, as opposed to using 'Content here, </p>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default AboutContent;