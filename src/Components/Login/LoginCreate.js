import React from 'react';

import userForm from '../../Hooks/userForm';
import useFetch from '../../Hooks/useFetch';

import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';

import Input from '../Forms/Input';
import Button from '../Forms/Button';

import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = userForm();
  const email = userForm('email');
  const password = userForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />

      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginForm;