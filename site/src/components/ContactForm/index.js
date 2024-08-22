import styles from '@/components/ContactForm/ContactForm.module.css';
import axios from 'axios';
import { useState } from 'react';

const ContactForm = ({contentsContacts}) => {

      //Declarar uma nova variável dados com state e atribuir o objeto
      const [data, setData] = useState({
        name: '',
        email:'',
        subject:'',
        content:''

      });

        // Declarar a variável para receber a mensagem
        const [message, setMessage] = useState("");
      //Receber os dados dos campos do formulário

      const valueInput = (e) => setData({...data, [e.target.name]: e.target.value});

      const sendMsg = async (e) => {
        //Bloquear o carregamento da página
        e.preventDefault();
        console.log(data);

        //Criar a constante com os dados do cabeçalho
        const headers = {
            'headers': {
                //Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }

        //Fazer uma requisição para o servidor utilizando axios, indicando o método da requisição, endereço enviar os dados do formulário e o cabeçalho
        await axios.post("http://localhost:8080/contact-menssage", data, headers)
        .then((response) => {
            setMessage(response.data.message)
        }).catch((err) =>{
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
        return(
                <div class={`${styles.column} ${styles.right}`}>
                <div class={styles.text}>
                    {contentsContacts.titleForm}
                </div>

                {message ? <p>{message}</p> : "" }

                <form onSubmit={sendMsg}>
                    <div class={styles.fields}>
                        <div class={`${styles.field} ${styles.name}`}>
                            <input name="name" type="text" placeholder="Digite o nome" onChange={valueInput}  />
                        </div>
                        <div class={`${styles.field} ${styles.email}`}>
                            <input name="email" type="email" placeholder="Digite o e-mail" onChange={valueInput}  />
                        </div>
                    </div>
                
                    <div class={styles.field}>
                        <input name="subject" type="text" placeholder="Digite o assunto" onChange={valueInput}  />
                    </div>

                    <div class={`${styles.field} ${styles.textarea}`}>
                        <textarea name="content" cols="30" rows="10" placeholder="Digite o contéudo" onChange={valueInput} ></textarea>
                    </div>

                    <div class={styles.buttonArea}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            );
        
}
    export default ContactForm;
