"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Raleway-BoldItalic",
  src: '/font/fonts/Raleway/static/Raleway-BoldItalic.ttf',
});
Font.register({
  family: "Raleway-Thin",
  src: '/font/fonts/Raleway/Raleway-Thin.ttf',
});

// Define your image path
const image = '/image/BD8Rb_5f.jpg';
const point = '/image/BD8Rb_5f.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      {/* commencement de la partie de l image de   l utilisateur*/}
      <View style={styles.rows}>
        <View style={styles.left}>
          <View style={styles.colomn}>
            <Image src={image} style={styles.image} />
            <View style={styles.description}>
              <Text style={styles.name}>GILBERT PHILIPPE</Text>
              <Text style={styles.directiion}>Directeur comptable</Text>
            </View>
          </View>
        </View>
        {/*  commemencement de l autre partie */}
        <View>
          <View style={styles.rows}>
            <View style={styles.left}>
              <Text style={styles.textcontact1}>email</Text>
              <Text style={styles.textcontact1}>adress</Text>
              <Text style={styles.textcontact1}>telephone</Text>
              <Text style={styles.textcontact1}>date de naissance</Text>
              <Text style={styles.textcontact1}>nationalite</Text>
              <Text style={styles.textcontact1}>lien</Text>
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
          <View style={styles.objectif}><Text style={styles.title}>OBJECTIF</Text></View>
          <View style={styles.linedeprojectpersonnel}></View>
          <View style={styles.tableau}>
            <Text style={styles.textcontact}>Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.  Il a été popularisé dans les années 1960 grâce à la vente </Text>
          </View>
        </View>
      </View>
      {/*  experience */}
      <View style={styles.container}>
        <Text style={styles.title}>EXPÉRIENCES</Text>
        <View style={styles.linedeprojectpersonnel} />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>PARIS</Text>
            <Text style={styles.text}>juil 2009 - déc 2009</Text>
            <Text style={styles.text}>comptabilité financière avancée</Text>
            <Text style={styles.text}>université</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>PARIS</Text>
            <Text style={styles.text}>juil 2009 - déc 2009</Text>
            <Text style={styles.text}>comptabilité financière avancée</Text>
            <Text style={styles.text}>université</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>PARIS, FR</Text>
          <Text style={styles.text}>FERV 2018 - Présent</Text>
          <Text style={styles.text}>Directeur comptable</Text>
          <Text style={styles.text}>Apex Corporation</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
      </View>
    </View>
      {/*  experience */}
      <View style={styles.container}>
        <Text style={styles.title}>EXPÉRIENCES</Text>
        <View style={styles.linedeprojectpersonnel} />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>PARIS</Text>
            <Text style={styles.text}>juil 2009 - déc 2009</Text>
            <Text style={styles.text}>comptabilité financière avancée</Text>
            <Text style={styles.text}>université</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>PARIS</Text>
            <Text style={styles.text}>juil 2009 - déc 2009</Text>
            <Text style={styles.text}>comptabilité financière avancée</Text>
            <Text style={styles.text}>université</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>PARIS, FR</Text>
          <Text style={styles.text}>FERV 2018 - Présent</Text>
          <Text style={styles.text}>Directeur comptable</Text>
          <Text style={styles.text}>Apex Corporation</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
          <Text style={styles.textWithIcon}>
            <Image source={point} style={styles.point} /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          </Text>
        </View>
      </View>
    </View>
      {/* Ajoute d'autres éléments ici si nécessaire */}
      {/*  experience */}
      <View style={{ flexDirection: 'row', flex: 1 , justifyContent:'space-between' }}>
        {/* Partie gauche */}
        <View style={{ flex: 1, paddingRight: 5 }}>
          <View >
            <Text style={styles.title}>competences</Text>
          </View>
          <View style={styles.linedeprojectpersonnel}></View>
          <View style={styles.containers}>
            <View style={styles.lefts}>
              <Text style={styles.texts}><Image src={point} style={styles.point} /> Compétences en organisation</Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} />  Gestion du group</Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} /> adaptabilite</Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} />  leadership</Text>
              <Text style={styles.texts}><Image src={point} style={styles.point} /> souci du detail</Text>
            </View>
            {/* Ajoutez d'autres éléments si nécessaire */}
          </View>
        </View>

        {/* Partie droite */}
        <View style={{ flex: 1, paddingLeft: 5 }}>
          {/* Premier conteneur en haut */}
          <View >
            <Text style={styles.title}>langues</Text>
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
            <Text style={styles.title}>Anglais</Text>
            <Text style={styles.textcomplete}>Competence professionnelle complete</Text>
            <Text style={styles.texts}></Text>
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
    padding:16,
    fontFamily: "Raleway-BoldItalic",

  },
  container: {
    paddingTop: 16,
    paddingLeft: 5,
  },
  title: {
    color:'blue',
    textTransform:"uppercase",
    fontSize: 12,
    fontFamily: "Raleway-BoldItalic",

  },
  linedeprojectpersonnel: {
    height: 1,
    backgroundColor: 'blue',

  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    width: '50%',
    paddingTop: 8,
    paddingBottom:8,
    paddingRight:12,
  },
  text: {
    paddingRight:12,
    fontFamily: "Raleway-BoldItalic",
    fontSize: 12,

  },
  textWithIcon: {
    fontFamily: "Raleway-BoldItalic",
    fontSize: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  point: {
    width: 8,
    height: 8,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%', // Chaque boîte occupe 50% de la largeur disponible
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#000',
    boxSizing: 'border-box', // Assure que le padding et la bordure sont inclus dans la largeur
  },

  textcomplete: {
    width: "50%",
    fontSize: 10,
  },
  textsi: {
    paddingLeft: 12,
    fontSize: 12,
  },
  texts: {
    fontSize: 12,
  },
  containers: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: "row"
  },

  objectif: {
    paddingTop: 13,
  },
  tableau: {
    paddingTop: 2,
    height: 100,
    width: "42%"
  },
  textcontact1: {
    paddingTop: 3,
    fontSize: 10,
    fontWeight: "thin",
    gap: 10,
    fontFamily: "Raleway-Thin",
  },
  textcontact: {
    paddingTop: 3,
    fontSize: 10,
    fontWeight: "thin",
    gap: 10,
  },
  description: {
    paddingTop: 9,
    width: 103,
  },
  directiion: {
    fontSize: "10",
    color: "blue",
  },
  name: {
    paddingTop: 9,
    fontSize: 38,
    color: "blue",
  },
  image: {
    height: "40%",
    width: '100%',
  },
  colomn: {
    paddingRight:9,
  paddingLeft:9,
    height: '100%',
  },
  rights: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  lfts: {
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


});
export default Pdf;