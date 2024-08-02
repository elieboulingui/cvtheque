"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Raleway-BoldItalic",
  src: '/font/fonts/Raleway/static/Raleway-BoldItalic.ttf',
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
              <Text style={styles.directiion}>Directeur comptable</Text>
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
      {/*  experience */}
      <View><Text style={styles.text}>EXPÉRIENCES</Text></View>
      <View style={styles.linedeprojectpersonnel}></View>
      <View style={styles.container}>

        <View style={styles.row}>
          <View style={styles.lefts}>
            <Text style={styles.texts}>PARIS , FR</Text>
            <Text style={styles.texts}>FERV 2018 - Présent</Text>
            <Text style={styles.texts}>Directeur compable</Text>
            <Text style={styles.texts}>Apex Corporation</Text>
          </View>
          <View style={styles.rights}>
            <Text style={styles.texts}>PARIS , FR</Text>
            <Text style={styles.texts}>FERV 2018 - Présent</Text>
            <Text style={styles.texts}>Directeur compable</Text>
            <Text style={styles.texts}>Apex Corporation</Text>

          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.lefts}>
            <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>
            <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>

          </View>
          <View style={styles.rights}>
            <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>
            <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>

          </View></View>
        {/*  experience */}
        <View><Text style={styles.text}>EDUCATION</Text></View>
        <View style={styles.linedeprojectpersonnel}></View>
        <View style={styles.container}>

          <View style={styles.row}>
            <View style={styles.lefts}>
              <Text style={styles.texts}>PARIS</Text>
              <Text style={styles.texts}>juil 2009 - déc 2009</Text>
              <Text style={styles.texts}>comptabilite financiere avancée</Text>
              <Text style={styles.texts}>université</Text>
            </View>
            <View style={styles.rights}>
              <Text style={styles.texts}>PARIS</Text>
              <Text style={styles.texts}>juil 2009 - déc 2009</Text>
              <Text style={styles.texts}>comptabilite financiere avancée</Text>
              <Text style={styles.texts}>université</Text>

            </View>,
          </View>

          <View style={styles.row}>
            <View style={styles.lefts}>
              <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>

            </View>
            <View style={styles.rights}>
              <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>

            </View>

          </View>
        </View>

        {/*  experience */}
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {/* Partie gauche */}
          <View style={{ flex: 1, paddingRight: 5 }}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>EXPERIENCE</Text>
            </View>
            <View style={styles.linedeprojectpersonnel}></View>
            <View style={styles.containers}>
              <View style={styles.lefts}>
                <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, </Text>
                <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, </Text>
                <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, </Text>
                <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, </Text>
                <Text style={styles.texts}><Image src={point} style={styles.point} />"Lorem ipsum dolor sit amet, </Text>
              </View>
              {/* Ajoutez d'autres éléments si nécessaire */}
            </View>
          </View>

          {/* Partie droite */}
          <View style={{ flex: 1, paddingLeft: 5 }}>
            {/* Premier conteneur en haut */}
            <View style={styles.textContainer}>
              <Text style={styles.text}>EXPERIENCE</Text>
            </View>
            <View style={styles.linedeprojectpersonnel}></View>
            <View style={styles.containers}>
              <View style={styles.lefts}>
                <Text style={styles.texts}>francais</Text>
                <Text style={styles.texts}>native</Text>
              </View>
              <View style={styles.rights}>
                <Text style={styles.texts}>espagnol</Text>
                <Text style={styles.texts}>elementaire</Text>
              </View>
            </View>
            <View style={styles.lfts}>
            <Text style={styles.texts}>francais</Text>
            <Text style={styles.texts}>native</Text>
          </View>
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
    fontFamily: "Raleway-BoldItalic",

  },
  textContainer: {


  },
  point: {
    paddingLeft: 5,
    height: 5,
    width: 5,
  },
  texts: {
    fontSize: 12,
  },
  containers: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: "row"
  },
  container: {
    backgroundColor: '#ffffff',
  },
  objectif: {
    paddingTop: 13,
  },
  tableau: {
    paddingTop: 12,
    height: 100,
    width: "42%"
  },
  linedeprojectpersonnel: {
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: 'blue',
  },
  textcontact: {
    paddingTop: 3,
    fontSize: 10,
    fontWeight: "thin",
    gap: 10,
  },
  description: {
   paddingTop:9,
    width: 103,
  },
  directiion:{
    fontSize:"10",
    color: "blue",
  },
  text: {
    paddingTop: 9,
    color: "blue",
  },

  image: {
   height:"70%",
   width:'80%',
  },
  colomn: {

    height: '100%',
  },
  rights: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  lfts:{
    textAlign: "justify",
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
  },
  lefts: {
    textAlign: "justify",
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
  },
  right: {
    paddingLeft: 40
  },
  left: {
    paddingRight: 10,
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