import React from 'react';
import {
    Form,
    FormContainer,
    Input,
    SendButton,
    StyledLabel,
} from '../TelaLogin/styled';
import { BackToLoginButton } from '../TelaCadastro/styled';

const TelaCadastroEndereco = ({ mudarTela, capturaInfosCadastrarEndereco }) => {
    const cadastrar = (event) => {
        mudarTela('TelaPrincipal');
        capturaInfosCadastrarEndereco(event);
    };
    const mostrarTelaLogin = () => {
        mudarTela('TelaLogin');
    };
    return (
        <FormContainer>
            <h1>Cadastro Endereco </h1>

            <Form
                onSubmit={(event) => {
                    cadastrar(event);
                }}
            >
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" />
                </StyledLabel>

                <StyledLabel htmlFor="numeroResidencia">
                    Número da Residência:
                    <Input id="numeroResidencia" />
                </StyledLabel>

                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>

                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input id="telefone" />
                </StyledLabel>

                <SendButton type="submit">Confirmar</SendButton>

                <BackToLoginButton onClick={mostrarTelaLogin}>
                    Já possuo cadastro
                </BackToLoginButton>
            </Form>
        </FormContainer>
    );
};

export default TelaCadastroEndereco;