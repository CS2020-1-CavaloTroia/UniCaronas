import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '~/components/global/Input';
import Button from '~/components/global/Button';
import ButtonLight from '~/components/global/ButtonLight';
import colors from '~/styles/colors';

import {Container, Section, Background, Gradient} from './styles';
import {Text, TouchableOpacity} from 'react-native';

export default function SignIn({navigation}) {
  const FormSchema = Yup.object().shape({
    email: Yup.string().required('Informe seu email institucional.'),
    password: Yup.string().required('Informe sua senha.'),
  });

  return (
    <Container>
      <Background />
      <Gradient>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => console.log(values.email, values.password)}
          validationSchema={() => FormSchema}>
          {({values, handleChange, handleSubmit, errors, touched}) => (
            <>
              <Input
                title="Email"
                titleColor={colors.white}
                background={colors.inputColor}
                textColor={colors.white}
                select={['@discente.ufg.br', '@ufg.br', '@prograd.ufg.br']}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor={`${colors.white}55`}
                value={values.email}
                onChangeText={handleChange('email')}
                textBottomColor={colors.secondaryColor}
                borderColor={colors.secondaryColor}
                textBottom={errors.email && touched.email ? errors.email : null}
              />

              <Input
                title="Senha"
                titleColor={colors.white}
                background={colors.inputColor}
                textColor={colors.white}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Senha"
                placeholderTextColor={`${colors.white}55`}
                value={values.password}
                onChangeText={handleChange('password')}
                textBottomColor={colors.secondaryColor}
                borderColor={colors.secondaryColor}
                textBottom={
                  errors.password && touched.password ? errors.password : null
                }
              />

              <Section align="flex-end">
                <ButtonLight onPress={() => {}} text="Esqueci minha senha" />
              </Section>

              <Section align="center">
                <Button
                  onPress={handleSubmit}
                  text="ACESSAR"
                  loading={false}
                  iconType="Ionicons"
                  iconName="chevron-forward"
                />
              </Section>

              <Section align="center">
                <ButtonLight
                  style={{marginTop: 25}}
                  color={colors.white}
                  onPress={() => {}}
                  text="Não possui uma conta? Cadastre-se"
                />
              </Section>
            </>
          )}
        </Formik>
      </Gradient>
    </Container>
  );
}
