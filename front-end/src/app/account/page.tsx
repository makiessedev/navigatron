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
        label="Senha"
        id="senha"
        placeholder="Digite sua senha"
        name="senha"
      />
      <Form.button>Login</Form.button>
    </Form.container>
  )
}
