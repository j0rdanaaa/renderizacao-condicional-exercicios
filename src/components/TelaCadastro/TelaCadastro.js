import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from './styled';

function TelaCadastro({ mudarTela, capturaInfosCadastrar }) {
  const cadastrar = (event) => {
      capturaInfosCadastrar(event);
      mudarTela('TelaCadastroEndereco');
  };

  const mostrarTelaLogin = () => {
      mudarTela('TelaLogin');
  };

  return (
      <FormContainer>
          <h1>Cadastro </h1>

          <Form
              onSubmit={(event) => {
                  cadastrar(event);
              }}
          >
              <StyledLabel htmlFor="name">
                  Nome:
                  <Input id="name" name="name" />
              </StyledLabel>

              <StyledLabel htmlFor="email">
                  E-mail:
                  <Input id="email" name="email" />
              </StyledLabel>

              <StyledLabel htmlFor="senha">
                  Senha:
                  <Input id="senha" name="senha" type="password" />
              </StyledLabel>

              <StyledLabel htmlFor="confirmacao">
                  Confirmação da senha:
                  <Input
                      id="confirmacao"
                      name="confirmacao"
                      type="password"
                  />
              </StyledLabel>

              <SendButton type="submit">Cadastrar</SendButton>

              <BackToLoginButton onClick={mostrarTelaLogin}>
                  Já possuo cadastro
              </BackToLoginButton>
          </Form>
      </FormContainer>
  );
}

export default TelaCadastro;