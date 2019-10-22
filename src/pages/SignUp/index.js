import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';
import { Creators } from '~/store/ducks/auth';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const { signUpRequest } = Creators;

  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Digite de email"
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
