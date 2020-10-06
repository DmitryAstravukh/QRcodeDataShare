import React, { Fragment, useState, useEffect } from "react";
import styled from 'styled-components/native';
import * as styleVariables from './../constants/style-variables';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner'; 
import { View, StyleSheet, Button } from 'react-native';

export const Home = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedView, setScannedView] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedView(false);
    navigation.push('ScannedData', { data });
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const About = () => {
    Alert.alert(
      'О разработчике',
      'Разработал - Астраух Д.С., гр. 881061',
      [{ text: "Дай бог ему здоровья"}],
      { cancelable: false }
    );
  }

  if(scannedView) {
    return (
      <ScannedContainer>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <CancelScanBtn onPress={() =>{setScanned(false); setScannedView(false)} }>
          <CancelScanBtnText>Отмена</CancelScanBtnText>
        </CancelScanBtn> 
      </ScannedContainer>
    ) 
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

        <QRContainer onPress={() => setScannedView(true)}>
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
  right: 14px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${styleVariables.MAIN_COLOR};
`;


const CancelScanBtn = styled.TouchableOpacity`
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: ${styleVariables.MAIN_TEXT_COLOR_DARK};
`;

const CancelScanBtnText = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${styleVariables.MAIN_TEXT_COLOR_LIGHT};
`;

const ScannedContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;