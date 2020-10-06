import React from "react";
import {  useSelector } from "react-redux";
import styled from 'styled-components/native';
import * as styleVariables from './../constants/style-variables';

export const ContactsList = ({ navigation }) => {

  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      {
        contacts.map(contact => {
          return (
            <ContactItem key={contact.id} onPress={() => navigation.push('GeneratedQRCode', { contact }) }>
              <ContactItemText numberOfLines={1}>{contact.name}</ContactItemText>
            </ContactItem>
          )
        })
      }
    </Container>
  )
}

const Container = styled.ScrollView`
  padding: 5px;
`;

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
