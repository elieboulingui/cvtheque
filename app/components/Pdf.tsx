"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Raleway-BlackItalic",
  src: '/font/fonts/Raleway/Raleway-BlackItalic.ttf',
});

// Define your image path
const image = '/image/abit.jpg';
const point = '/image/e.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      {/* commencement de la partie de l image de   l utilisateur*/}
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.colomn}>
            <Image src={image} style={styles.image} />
           <View style={styles.description}>
           <Text style={styles.text}>GILBERT PHILIPPE</Text>
           <Text style={styles.text}>Directeur comptable</Text>
           </View>
          </View>
        </View>
        {/*  commemencement de l autre partie */}
        <View>
          <View style={styles.rows}>
            <View style={styles.left}>
              <Text style={styles.textcontact}>email</Text>
              <Text style={styles.textcontact}>adress</Text>
              <Text style={styles.textcontact}>telephone</Text>
              <Text style={styles.textcontact}>date de naissance</Text>
              <Text style={styles.textcontact}>nationalite</Text>
              <Text style={styles.textcontact}>lien</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.textcontact}>elieboulingui2@gmail.com</Text>
              <Text style={styles.textcontact}>montalier</Text>
              <Text style={styles.textcontact}>0746997914</Text>
              <Text style={styles.textcontact}>03032000</Text>
              <Text style={styles.textcontact}>gabonaise</Text>
              <Text style={styles.textcontact}>google</Text>
            </View>
          </View>
          <View style={styles.objectif}><Text style={styles.text}>OBJECTIF</Text></View>
          <View style={styles.linedeprojectpersonnel}></View>
          <View style={styles.tableau}>
            <Text style={styles.textcontact}>Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Text>
          </View>
        </View>

      </View>
      {/*  find la partie header */}
    </Page>
    {/* fin de la creation du cv*/}
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 28,

  },
  objectif:{
    paddingTop:13,
  },
  tableau:{
    paddingTop:12,
    height:100,
    width:"42%"
  },
  linedeprojectpersonnel: {
      width: '90%',
      borderTopWidth: 2,
      borderTopColor: 'violet',
    },
  textcontact: {
    paddingTop: 3,
    fontSize: 10,
    gap: 8,
  },
  description:{
  
    width:103,
    paddingTop:23,
  },
  text: {
    color: "blue",
  },
  image: {
    height: 98,
    width: 102,
  },
  colomn: {

  height:'100%',
  },
  right: {

  },
  left: {
    paddingRight: 19,
  },
  rows: {
    flexDirection: "row",

    justifyContent: 'space-between',
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },


});
export default Pdf;