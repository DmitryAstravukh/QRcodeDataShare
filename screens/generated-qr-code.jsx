import React, { Fragment }from "react";
import * as styleVariables from './../constants/style-variables';
import { WebView } from 'react-native-webview';
import QRCode from 'react-native-qrcode';


export const GeneratedQRCode = ({ route: { params: { contact } } }) => {

  const splitedString = `${contact.id};${contact.name};${contact.link};`;

  return (
    <Fragment>
      <QRCode size={580} value={splitedString} fgColor={styleVariables.MAIN_TEXT_COLOR_LIGHT} />
    </Fragment>
  ) 
}

