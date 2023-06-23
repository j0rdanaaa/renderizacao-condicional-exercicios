import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TelaLogin from './components/TelaLogin/TelaLogin'
import TelaCadastro from './components/TelaCadastro/TelaCadastro'
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaCadastroEndereco from './components/TelaCadastroEndereco/TelaCadastroEndereco'
const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: lightslategray;
  }
`;
const MainContainer = styled.main`
    height: 100vh;
`;
function App() {
    // => MUDANÇA DE TELA:
    // estados:
    const [telaAtual, setTelaAtual] = useState('TelaLogin');
    // função que seta estado:
    const mudarTela = (novaTela) => {
        setTelaAtual(novaTela);
    };
    // FORM LOGIN
    // estados:
    const [dadosFormLogin, setDadosFormLogin] = useState({
        email: '',
        password: '',
    });
    // função que seta estado:
    const capturaInfosLogin = (event) => {
        event.preventDefault();
        setDadosFormLogin({
            email: event.target.email.value,
            password: event.target.password.value,
        });
    };

    // mostrando dados no console
    useEffect(() => {
        if (dadosFormLogin.email) {
            console.log('DADOS DO FORM LOGIN:', dadosFormLogin);
        }
    }, [dadosFormLogin]);

    // => FORM CADASTRAR:
    // estados:
    const [dadosFormCadastrar, setDadosFormCadastrar] = useState({
        name: '',
        email: '',
        senha: '',
        confirmacao: '',
    });
    // função que seta estado:
    const capturaInfosCadastrar = (event) => {
        event.preventDefault();
        setDadosFormCadastrar({
            ...dadosFormCadastrar,
            name: event.target.name.value,
            email: event.target.email.value,
            senha: event.target.senha.value,
            confirmacao: event.target.confirmacao.value,
        });
    };

    // mostrando dados no console
    console.log('DADOS DO FORM CADASTRAR:',dadosFormCadastrar);
    useEffect(() => {
        if (dadosFormCadastrar.name) {
           
        }
    }, [dadosFormCadastrar]);

    // => FORM CONFIRMAR:
    // estados:
    const [dadosFormCadastrarEndereco, setDadosFormCadastrarEndereco] =
        useState({
            endereco: '',
            numero: '',
            complemento: '',
            telefone: '',
        });
    // função que seta estado:
    const capturaInfosCadastrarEndereco = (event) => {
        event.preventDefault();
        setDadosFormCadastrarEndereco({
            ...dadosFormCadastrarEndereco,
            endereco: event.target.endereco.value,
            numero: event.target.numeroResidencia.value,
            complemento: event.target.complemento.value,
            telefone: event.target.telefone.value,
        });
    };

    // mostrando dados no console
    useEffect(() => {
        if (dadosFormCadastrarEndereco.endereco) {
         
        }
    }, [dadosFormCadastrarEndereco]);

    // => RENDERIZAÇÃO DE TELA:
    const renderizaTela = () => {
        switch (telaAtual) {
            case 'TelaLogin':
                return (
                    <TelaLogin
                        mudarTela={mudarTela}
                        capturaInfosLogin={capturaInfosLogin}
                    />
                );
            case 'TelaCadastro':
                return (
                    <TelaCadastro
                        mudarTela={mudarTela}
                        capturaInfosCadastrar={capturaInfosCadastrar}
                    />
                );
            case 'TelaCadastroEndereco':
                return (
                    <TelaCadastroEndereco
                        mudarTela={mudarTela}
                        capturaInfosCadastrarEndereco={
                            capturaInfosCadastrarEndereco
                        }
                    />
                );
            case 'TelaPrincipal':
                return <TelaPrincipal mudarTela={mudarTela} />;
            default:
                return <p>Tela inválida</p>;
        }
    };
    return (
        <MainContainer>
            <GlobalStyled />
            {renderizaTela()}
        </MainContainer>
    );
}
export default App;