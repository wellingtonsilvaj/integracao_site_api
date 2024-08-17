import styles from '@/components/ContactForm/ContactForm.module.css';

        const ContactForm = () => {
            return(
                <div class={`${styles.column} ${styles.right}`}>
                <div class={styles.text}>
                    Mensagem de contato
                </div>
                <form>
                    <div class={styles.fields}>
                        <div class={`${styles.field} ${styles.name}`}>
                            <input type="text" placeholder="Digite o nome" required />
                        </div>
                        <div class={`${styles.field} ${styles.email}`}>
                            <input type="email" placeholder="Digite o e-mail" required />
                        </div>
                    </div>
                
                    <div class={styles.field}>
                        <input type="text" placeholder="Digite o assunto" required />
                    </div>

                    <div class={`${styles.field} ${styles.textarea}`}>
                        <textarea cols="30" rows="10" placeholder="Digite o contéudo" required></textarea>
                    </div>

                    <div class={styles.buttonArea}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            );
        }

    export default ContactForm;

