import Head from 'next/head';
import Menu from '@/components/Menu';
import AboutContent from '@/components/AboutContent';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {

    // Declarar a variável para receber os dados da pagina sobre retornado da API
    const [aboutsCompanies, setAboutsCompanies] = useState([]);

    // Declarar a variável para receber a mensagem
    const [message, setMessage] = useState("");

     // Criar a função com requisição para API recuperar dados para página sobre
    const getAbout = async () => {
      
      // Realizar a requisição para API com axios para a rota recuperar dados para página home
      await axios.get("http://localhost:8080/about-companies")
      .then((response) => { // Acessa o then quando a API retornar status 200

        // Atribuir o conteúdo da pagina sobre no state sobre
        //console.log(response.data.aboutsCompanies);
        setAboutsCompanies(response.data.aboutsCompanies);

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
      getAbout();
    }, []);
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent aboutsCompanies={aboutsCompanies} />
        <Footer />
      </main>
    </>
  )
}
