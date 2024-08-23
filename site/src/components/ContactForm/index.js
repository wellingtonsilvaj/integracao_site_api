import styles from '@/components/ContactForm/ContactForm.module.css';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup';

const ContactForm = ({contentsContacts}) => {

      //Declarar uma nova variável dados com state e atribuir o objeto
      const [data, setData] = useState({
        name: '',
        email:'',
        subject:'',
        content:''

      });

        // Declarar a variável para receber a mensagem
      //  const [message, setMessage] = useState("");
      //Receber os dados dos campos do formulário
      const [message, setMessage] = useState({
        formSave: false,
        type:'',
        message:''
      });

      const valueInput = (e) => setData({...data, [e.target.name]: e.target.value});

      const sendMsg = async (e) => {

        //Atribuir TRUE para apresentar o botão desativado
        setMessage({formSave: true});

        //Bloquear o carregamento da página
        e.preventDefault();
       // console.log(data);

       //Chamar a função validar formulário
       if(!(await validate())) return;

        //Criar a constante com os dados do cabeçalho
        const headers = {
            'headers': {
                //Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }

        //Fazer uma requisição para o servidor utilizando axios, indicando o método da requisição, endereço enviar os dados do formulário e o cabeçalho
        await axios.post("http://localhost:8080/contact-menssage", data, headers)
        .then((response) => { // Acessa o IF quando a API retornar status 200
            
            //Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
            setMessage({
                formSave: false,
                type:'success',
                message:response.data.message
            });
            //Limpar os dados do state e os dados dos campos do formulário
            setData({
                name:'',
                email:'',
                subject:'',
                content:''
            });
        }).catch((err) =>{
              // Acessa o IF quando a API retornar erro
        if (err.response) {
            //Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
            setMessage({
                formSave: false,
                type:'error',
                message:err.response.data.message
            });
          } else {
            //Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
            setMessage({
                formSave: false,
                type:'error',
                message:"Erro: tente mais tarde!"
            });

          }
        });
      }

      //Função validar formulário
      async function validate() {
        let schema = yup.object().shape({
            content: yup.string("Erro: Necessário preencher o campo conteúdo!")
                .required("Erro: Necessário preencher o campo conteúdo!"),
            subject: yup.string("Erro: Necessário preencher o campo assunto!")
                .required("Erro: Necessário preencher o campo assunto!"),
            email: yup.string("Erro: Necessário preencher o campo e-mail!")
                .email("Erro necessáario preencher um e-mail válido!")
                .required("Erro: Necessário preencher o campo e-mail!"),
            name: yup.string("Erro: Necessário preencher o campo nome!")
                .required("Erro: Necessário preencher o campo nome!"),
        });
        try{
            await schema.validate({
                name: data.name,
                email: data.email,
                subject: data.subject,
                content: data.content,
            });
            return true

        } catch (error){
                //Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
                setMessage({
                    formSave: false,
                    type:'error',
                    message: error.errors
                });
                return false;
        }
      }
        return(
                <div class={`${styles.column} ${styles.right}`}>
                <div class={styles.text}>
                    {contentsContacts.titleForm}
                </div>

                {message.type === 'error' ? <p className="alertDanger">{message.message}</p> : ""}
                {message.type === 'success' ? <p className="alertSuccess">{message.message}</p> : ""}

                <form onSubmit={sendMsg}>
                    <div class={styles.fields}>
                        <div class={`${styles.field} ${styles.name}`}>
                            <input name="name" type="text" placeholder="Digite o nome" onChange={valueInput} value={data.name} required/>
                        </div>
                        <div class={`${styles.field} ${styles.email}`}>
                            <input name="email" type="email" placeholder="Digite o e-mail" onChange={valueInput} value={data.email} required />
                        </div>
                    </div>
                
                    <div class={styles.field}>
                        <input name="subject" type="text" placeholder="Digite o assunto" onChange={valueInput} value={data.subject} required/>
                    </div>

                    <div class={`${styles.field} ${styles.textarea}`}>
                        <textarea name="content" cols="30" rows="10" placeholder="Digite o contéudo" onChange={valueInput} value={data.content} required ></textarea>
                    </div>

                    <div class={styles.buttonArea}>    
                        {message.formSave ? <button type="submit" disabled>Enviando...</button> : <button type="submit">Enviar</button>}
                    </div>
                </form>
            </div>
            );
        
}
    export default ContactForm;
