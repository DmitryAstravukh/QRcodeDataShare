import React, { Fragment } from 'react';
import styled from 'styled-components/native';
import * as styleVariables from './../constants/style-variables';
import * as Linking from 'expo-linking';

export const ScannedData = ({ route: { params: { data } } }) => {
  
  const {name, number, link} = JSON.parse(data);

  return (
    <Fragment>

      <ContactItem>
        <ContactItemText numberOfLines={1}>{`Имя - ${name}`}</ContactItemText>
      </ContactItem>

      <ContactItem>
        <ContactItemText numberOfLines={1}>{`Номер - ${number}`}</ContactItemText>
      </ContactItem>

      <ContactItem onPress={() => Linking.openURL(link)}>
        <ContactItemText numberOfLines={1}>{`Ссылка - ${link}`}</ContactItemText>
      </ContactItem>

    </Fragment>
  );
  
}

const ContactItem = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${styleVariables.THEME_ITEM_COLOR};
  flex-direction: row;
  height: 55px;
  padding: 2px 5px 5px 5px;
  align-items: center;
  margin-bottom: 5px;
`;

const ContactItemText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${styleVariables.MAIN_TEXT_COLOR_DARK};
  flex: 0 0 90%;
`;