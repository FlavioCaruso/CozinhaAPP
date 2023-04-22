import {useNavigation} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import {NavigateProps} from '../../../routes';
import * as Yup from 'yup';

export default function useSignIn() {
  const navigation = useNavigation<NavigateProps>();
  var initialValues = {email: 'admin@admin.com', password: 'admin123'};

  const doLogin = (
    params: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      navigation.replace('Recipes');
    }, 2000);
    Keyboard.dismiss();
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato do email errado')
      .required('Campo é obrigatório'),
    password: Yup.string()
      .min(6, 'Sua senha deve conter pelo menos 6 caracteres')
      .required('Este campo é obrigatório'),
  });

  return {initialValues, SignInSchema, doLogin};
}
