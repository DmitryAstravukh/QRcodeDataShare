import React, { Fragment } from "react";
import styled from 'styled-components/native';
import * as styleVariables from './../constants/style-variables';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Home = ({ navigation }) => {

  const About = () => {
    Alert.alert(
      'О разработчике',
      'Разработал - Астраух Д.С., гр. 881061',
      [{ text: "Дай бог ему здоровья"}],
      { cancelable: false }
    );
  }

  return (
    <Fragment>
      <Info onPress={About}>
        <AntDesign name="infocirlceo" size={32} color={styleVariables.MAIN_TEXT_COLOR_LIGHT} />
      </Info>
      <Container>

        <QRContainer onPress={() => navigation.push('ContactsList')}>
          <AntDesign name="qrcode" size={160} color={styleVariables.MAIN_TEXT_COLOR_DARK} />
          <Text>Создать QR код</Text>
        </QRContainer>

        <QRContainer>
          <MaterialCommunityIcons name="qrcode-scan" size={150} color={styleVariables.MAIN_TEXT_COLOR_DARK} />
          <Text>Прочитать QR код</Text>
        </QRContainer>

      </Container>
    </Fragment>
    
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
`;

const QRContainer = styled.TouchableOpacity`
  align-items: center;
`;

const Info = styled.TouchableOpacity`
  position: absolute;
  z-index: 99;
  top: -44px;
  right: 10px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${styleVariables.MAIN_COLOR};
`;
