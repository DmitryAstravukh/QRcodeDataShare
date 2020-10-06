import React from "react";
import * as styleVariables from './../constants/style-variables';
import QRCode from 'react-native-qrcode';


export const GeneratedQRCode = ({ route: { params: { contact } } }) => {
  return <QRCode size={580} 
                 value={JSON.stringify(contact)} 
                 fgColor={styleVariables.MAIN_TEXT_COLOR_LIGHT} 
         />
}

