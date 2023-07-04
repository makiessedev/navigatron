import { Form } from '@/components/Form'

export default function Create() {
  return (
    <Form.container>
      <Form.input
        label="Seu e-mail"
        id="email"
        placeholder="Digite seu email"
        name="email"
        type="email"
      />
      <Form.input
        label="Nome de usuário"
        id="username"
        placeholder="Digite seu nome"
        name="username"
      />
      <Form.input
        label="Sua senha"
        id="senha"
        placeholder="Digite sua senha"
        name="senha"
        type="password"
      />
      <Form.input
        label="Confirma sua senha"
        id="senha_confirm"
        placeholder="confirma sua senha"
        name="senha_confirm"
        type="password"
      />
      <Form.button>Cadastrar</Form.button>
    </Form.container>
  )
}
