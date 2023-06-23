import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from './styled';

function TelaLogin({ mudarTela, capturaInfosLogin }) {
  const login = (event) => {
      capturaInfosLogin(event);
      mudarTela('TelaPrincipal');
  };

  const mostrarTelaCadastro = () => {
      mudarTela('TelaCadastro');
  };

  return (
      <FormContainer>
          <h1>LOGIN</h1>

          <Form
              onSubmit={(event) => {
                  login(event);
              }}
          >
              <StyledLabel>
                  E-mail:
                  <Input name="email" />
              </StyledLabel>

              <StyledLabel>
                  Senha:
                  <Input name="password" type={'password'} />
              </StyledLabel>

              <SendButton type="submit">Entrar</SendButton>

              <RegisterButton onClick={mostrarTelaCadastro}>
                  Cadastre-se
              </RegisterButton>
          </Form>
      </FormContainer>
  );
}

export default TelaLogin;