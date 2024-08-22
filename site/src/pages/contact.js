import Head from 'next/head';
import styles from '@/styles/Contact.module.css';
import Menu from '@/components/Menu';
import ContactContent from '@/components/ContactContent';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Contact() {

  // Declarar a variável para receber os dados do topo retornado da API
  const [contentsContacts, setContentsContacts] = useState([]);

   // Declarar a variável para receber a mensagem
   const [message, setMessage] = useState("");

    // Criar a função com requisição para API recuperar dados para página contato
  const getContact = async () => {

    // Realizar a requisição para API com axios para a rota recuperar dados para página contato
    await axios.get("http://localhost:8080/contents-contacts")
    .then((response) => { // Acessa o then quando a API retornar status 200

      // Atribuir o conteúdo do topo no state contactContent
        //console.log(response.data.contactContent);
        setContentsContacts(response.data.contentsContacts);

      }).catch((err) => { // Acessa o catch quando a API retornar erro

        // Acessa o IF quando a API retornar erro
        if (err.response) {
          // Atribuir a mensagem no state message
          //console.log(err.response.data.message);
          setMessage(err.response.data.message);
        } else {
          // Atribuir a mensagem no state message
          //console.log("Erro: Tente mais tarde!");
          setMessage("Erro: Tente mais tarde!");
        }
      });
  }

   // useEffect é usado para lidar com efeitos colaterais em um componente. Por exemplo, atualizar o estado do componente, fazer chamadas a APIs, manipular eventos, entre outros.
   useEffect(() => {
    // Chamar a função com requisição para API
    getContact();
  }, []);

  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
            <h2 className={styles.title}>{contentsContacts.titleContact}</h2>
            <div className={styles.contactContent}>
              <ContactContent contentsContacts={contentsContacts} />
              <ContactForm  contentsContacts={contentsContacts}/>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
