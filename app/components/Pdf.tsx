"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image ,Font, pdf} from '@react-pdf/renderer';


// Define your image path
const image = '/image/BD8Rb_5f.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.container}>
        <View style={styles.left}>
          <Image src={image} style={styles.image}/>
           <View style={styles.info}>
           <Text style={styles.name} >Pierre Dupont</Text>
           <Text style={styles.jobtitle}>Adjointe administrative</Text>
           </View>
        </View>
        <View style={styles.right}>
          <View  style={styles.containerdeadress}>
          <Text style={ styles.adress}>Adresss : <Text>25  rue des fleurs  33500 LIBOURNE, France</Text></Text>
          <Text  style={ styles.adress}>Email : <Text>pierre.dupont@gmai.com</Text></Text>
          <Text  style={ styles.adress}>Telefone :  <Text>+33 1 25 45 67  89 </Text></Text>
      </View>
      <View  style={styles.containerdeux}>
          <Text  style={ styles.adress}>Data de nascimento: <Text>07-06-82</Text></Text>
          <Text  style={ styles.adress}>Nationnalité<Text>British</Text></Text>
      </View>
        </View>
      
      </View>
    </Page>
    
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 28,
  },
  container: {
    flexDirection: "row",
  },
  adress:{
    fontWeight:'bold',
    textAlign:'right',
    fontSize:12,
  },
  containerdeux:{
    marginTop:60,
    position: 'absolute',
    width: 200,
    marginLeft:68,
  },
  containerdeadress: {
    position: 'absolute',
    width: 200,
    marginLeft:68,

  },
  viewdutext: {
    position: 'absolute',
  },
  carnetteDepierretelephone: {
    position: "absolute",
    marginTop: 30,
    marginRight: 85,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  jobtitle: {
    marginTop: 7,
    fontSize: 10,
  },
  info: {
    marginLeft: 85,
    marginTop: 29,
    position: 'absolute',
  },
  left: {
    width: "40%",
  },
  right: {
    width: "70%",
    padding: 27,
    marginTop: 19,
    position: "absolute",
    marginLeft: 269,
  },
  image: {
    height: 97,
    width: 75,
  },
});
 export default  Pdf;