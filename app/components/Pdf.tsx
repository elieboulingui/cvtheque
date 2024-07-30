"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const image = '/image/IMG_0505_Original.jpeg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      <View style={styles.left}>
        <View></View>
        <View style={styles.rectangle}></View>
        <View style={styles.name}><Text>BOULINGUI BOULINGUI</Text></View>
        <View style={styles.names}><Text style={styles.textlorem}>Lorem ipsum dolor sit amet, consectetur adipi  consectetur Lorem ipsum dolor sit amet</Text></View>
        <View style={styles.profil} >
          <Text style={styles.contact}>PROFIL</Text>
        </View>
        <View style={styles.container}><Text style={styles.textinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In nec tempor tortor. Vestibulum et metus nulla. Suspendisse potenti. Mauris auctor massa at orci consectetur, nec commodo orci tristique.</Text></View>
        <View style={styles.formation}><Text style={styles.info}>FORMATIONS</Text></View>
        <View style={styles.containers}>
          <View style={styles.left}>
            <Text style={styles.anneedeformation1}>2018 - 2019</Text>
            <Text style={styles.anneedeformation2}>2018 - 2019</Text>
          </View>

          <View style={styles.ecoledeformation}> <Text style={styles.textinfo}>Ecole  241</Text>
            <Text style={styles.anneedeformationdeux}>Developpement d 'application web ful-stack</Text>
          </View>

        </View>
        <View style={styles.mptic}>           <Text style={styles.nptics}>Developpement d 'application web ful-stack Developpement d 'application web ful-stack Developpement d 'application web ful-stack</Text></View>
        <Text style={styles.genielogiciel}>Genie informatique option logiciel</Text>
        <View style={styles.linedeexperienceprofessionnelle}></View>
        <View style={styles.experience}><Text style={styles.info}>EXPERIENCES PROFESSIONNELLES</Text></View>
        <View style={styles.left}>
          <Text style={styles.coach}>coach au e-startup Challenge</Text>
          <Text style={styles.emploies}>ogoue-labs</Text>

          <Text style={styles.emploies}>Formes les participant circulation sfr</Text>
          <Text style={styles.emploies}>Formes les participant circulation sfr</Text>
          <Text style={styles.emploies}>Formes les participant circulation sfr</Text>

        </View>

        <View style={styles.anneetaf}>   <Text style={styles.anneedemploies}>2000 - 2014</Text></View>
        <View style={styles.anneetafs}>   <Text style={styles.anneedemploies}>2000 - 2014</Text></View>
        <View style={styles.stagiaire}>
          <Text style={styles.contact}>stagiaire au departement it</Text>
          <Text style={styles.emploiesdefinition}>Airtel Gabon</Text>
          <Text style={styles.emploiesdefinition}>Orem ipsum dolor sit amet, consectetur adipi  consectetur Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={styles.hachaton}>
          <Text style={styles.anneedetravails}>2000 - 2014</Text>
          <Text style={styles.contact}>Coach technique a hachaton nation e-Gabon</Text>
          <Text style={styles.formationdeparicipants}>Ogooue-labs</Text>
          <Text style={styles.formationdeparicipants}>Forme les participants au concours sur :</Text>
          <Text style={styles.formationdeparicipants}>Développeur web </Text>
          <Text style={styles.formationdeparicipants}>Data scientist</Text>
          <Text style={styles.formationdeparicipants}>Architecte cloud </Text>
          <Text style={styles.formationdeparicipants}>Ingénieur en sécurité informatique </Text>
        </View>
        <View style={styles.conseildigital}>
          <Text style={styles.aujourdhuit}>04/04/2011 - aujourdhuit</Text>
          <Text style={styles.conseiltext}>Conseiller en formation digital</Text>
          <Text style={styles.conseiltextgris}>Ogoue tech industrie</Text>
          <Text style={styles.conseiltextgris}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Text>
        </View>
        <View style={styles.linedeprojectpersonnel}></View>
        <View style={styles.projet}>
          <Text style={styles.infopresonnel}> PROJET PERSONNELS</Text>
          <View>
            <Text style={styles.anneedeprojet}>2000</Text>
            <Text style={styles.descriptionduproject}> mon cv en ligne</Text>
            <Text style={styles.descriptionduprojectdeux}>outils de creation de cv en ligne</Text>
            <Text style={styles.anneedeprojetdeux}>2017</Text>
            <Text style={styles.descriptionduprojectdeuxpiges}>piges</Text>
            <Text style={styles.descriptionduprojectdeuxpigesdescription}>piges</Text>
            <View>

            </View>
          </View>
        </View>
      </View>


      <View style={styles.right}>
        {/* Image Section */}
        <View style={styles.imagecontainer}>
          <Image style={styles.image} src={image} />
        </View>

        {/* Personal Information Section */}
        <View>
          <Text style={styles.info}>INFORMATIONS PERSONNELLES</Text>
          <Text style={styles.contact}>Telephone : <Text style={styles.information}>+24177888664</Text></Text>
          <Text style={styles.contact}>Email : <Text style={styles.information}>@gmail.com</Text></Text>
          <Text style={styles.contact}>Adresse : <Text style={styles.information}>Lorem ipsum dolor sit amet, Lorem </Text></Text>
          <Text style={styles.contact}>Autres information:</Text>
          <Text style={styles.textinfos}>exemple: permis ,Age, Situation matrimonial</Text>
        </View>

        {/* Separator line */}
        <View style={styles.line}></View>

        {/* Skills Section */}
        <View>
          <Text style={styles.info}>COMPÉTENCES</Text>
          <View style={styles.columnContainer}>
            <SkillItem title="REACT NATIVE" />
            <SkillItem title="REACT JS" />
            <SkillItem title="NODE JS" />
            <SkillItem title="HTML ET CSS" />
            <SkillItem title="ANALYSE UML" />
            <SkillItem title="PHP" />
            <SkillItem title="MYSQL" />
            <SkillItem title="LARAVEL" />
            <SkillItem title="CONCEPTION DE BASE DE DONNÉES" />
          </View>
        </View>

        {/* Separator line */}
        <View style={styles.line}></View>

        {/* Attitudes Section */}
        <View>
          <Text style={styles.info}>ATTITUDES</Text>
          <View>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
            <Text style={styles.text}> - AUTRE INFORMATION</Text>
          </View>
        </View>

        {/* Separator line */}
        <View style={styles.line}></View>
        <View>
          <Text style={styles.info}>LANGUES</Text>
          <View style={styles.languageLeft}>
            <Text style={styles.texts}>francais</Text>
            <Text style={styles.texts}>anglais</Text>
            <Text style={styles.texts}>espagnol</Text>
          </View>
          <View style={styles.languageRight}>
            <Text style={styles.josue}>maternel</Text>
            <Text style={styles.josue}>intermediaire</Text>
            <Text style={styles.josue}>meduin</Text>
          </View>
        </View>
      </View>
      <View style={[styles.linestyle, { display: "flex", width: "100%", borderTopWidth: 14,  bottom: 3, left: 0, right: 0 }]}></View>
    </Page>
  </Document>
);

const SkillItem = ({ title }) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.competences}>{title}</Text>
      <View style={styles.espace}> <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '67%' }]}></View>
        <View style={styles.circle}></View>
      </View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 20,
  },
  descriptionduprojectdeuxpigesdescription: {
    position: "absolute",
    marginTop: 59,
    fontSize: 8,
    marginLeft: 63,
  },
  descriptionduprojectdeuxpiges: {
    position: "absolute",
    marginTop: 40,
    fontSize: 8,
    marginLeft: 63,
  },
  descriptionduprojectdeux: {
    position: "absolute",
    marginTop: 24,
    fontSize: 8,
    marginLeft: 63,
  },
  descriptionduproject: {
    position: "absolute",
    marginTop: 8,
    fontSize: 8,
    marginLeft: 63,
  },
  anneedeprojetdeux: {
    marginTop: 24,
    fontSize: 8,
    marginLeft: 13,
  },
  projet: {
    paddingTop:5,
    margin:6,
    paddingBottom:15,
  },
  linedeprojectpersonnel: {
    marginTop: 10,
    marginLeft: 20,
    width: '90%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },
  aujourdhuit: {
    position: "absolute",
    fontSize: 9,
    marginTop: 10,
    marginLeft: 258,
  },
  anneedetravails: {
    position: "absolute",
    fontSize: 9,
    marginTop: 10,
    marginLeft: 306,
  },
  conseildigital: {
    marginTop: 16,
    marginLeft: 10,
  },
  hachaton: {
    marginTop: 16,
    marginLeft: 10,
  },
  anneedeprojet: {
    marginTop: 9,
    fontSize: 8,
    marginLeft: 13,
  },
  conseiltextgris: {
    marginTop: 9,
    fontSize: 8,
    marginLeft: 13,
  },
  conseiltext: {
    marginTop: 9,
    fontSize: 8,
    marginLeft: 13,
  },
  formationdeparicipants: {
    marginTop: 9,
    fontSize: 8,
    marginLeft: 13,
  },
  emploiesdefinition: {
    marginTop: 9,
    fontSize: 8,
    marginLeft: 13,


  },
  stagiaire: {
    marginTop: 23,
    marginLeft: 11,
  },
  anneetafs: {
    position: "absolute",
    marginTop: 406,
    marginLeft: 183,
  },
  anneetaf: {
    position: "absolute",
    marginTop: 316,
    marginLeft: 183,

  },
  anneedemploies: {
    marginTop: 35,
    position: 'relative',
    fontSize: 9,
    marginLeft: 134,
  },
  emploies: {
    marginLeft: 43,
    marginTop: 5,
    fontSize: 8,
  },
  coach: {
    marginLeft: 43,
    marginTop: 15,
    fontSize: 10,
  },
  experience: {
    marginTop: 12,
    marginLeft: 11,
  },
  genielogiciel: {
    fontSize: 8,
    marginTop: 38,
    marginLeft: 115,
  },
  nptics: {
    width: "56%",
    fontSize: 9,

  },
  mptic: {
    position: 'absolute',
    marginTop: 243,
    marginLeft: 116,
  },
  anneedeformationdeux: {
    fontSize: 9,
    marginTop: 8,
    marginLeft: 13,
  },
  ecoledeformation: {
    position: "relative",
    marginRight: 200,
    marginTop: 2,
  },
  containers: {
    flexDirection: 'row',
  },
  sujetdeformation: {
    position: "absolute",
    marginRight: 179,
  },

  anneedeformation2: {
    marginLeft: 48,
    fontSize: 9,
    marginTop: 26,
  },
  anneedeformation1: {
    marginLeft: 48,
    fontSize: 9,
    marginTop: 10,
  },
  formation: {

    marginTop: 112,
    marginLeft: 15,
  },
  container: {
    width: "89%",
    height: "8%",
    fontSize: 11,
    marginLeft: 17,
    position: "absolute",
    marginTop: 118,

  },
  profil: {
    position: "absolute",
    marginTop: 104,
    marginLeft: 17,
  },
  name: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: 73,

  },
  names: {
    position: 'absolute',
    marginTop: 40,
    fontSize: 12,
    marginLeft: 27,


  },
  langue: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  rowContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 10,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
  },

  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: "#E1EBEE",
    marginBottom: 10,
    marginHorizontal: 12,
  },
  positions: {
    position: "absolute",
    marginTop: 47,
    width: 234,
    marginLeft: 185,
  },
  espace: {
    marginTop: 3,
    height: 12,
    width: 12,
    position: "absolute",
    marginLeft: 83,
  },


  information: {
    fontSize: 7,
    marginLeft: 22,
  },
  competences: {
    display: 'flex',
    fontSize: 7,
    marginTop: 6,
    fontWeight: 'bold',
    marginRight: 69,
    marginBottom: 5,
  },
  progressBar: {
    position: 'absolute',
    height: 4,
    marginTop: 3,
    width: 69,
    marginRight: 99,
    backgroundColor: '#c7c6c6',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    height: '100%',

    backgroundColor: '#007bff',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rectangle: {
    marginLeft: 10,
    width: 20,
    height: 70,
    backgroundColor: 'violet',
    borderWidth: 2,
    borderColor: 'violet',
  },
  circle: {
    width: 9,
    height: 9,
    borderRadius: 10,
    marginLeft: -7,
  },

  position: {
    position: "absolute",
    marginTop: 12,
    marginLeft: 94,
  },




  enbasdelabarreviolet: {
    marginTop: 23,
    marginLeft: 33,
  },

  violet: {
    backgroundColor: 'violet',
    height: 88,
    width: 32,
  },

  rest: {
    marginTop: 22,
    fontSize: 8,
  },
  blueLine: {
    width: '60%',
    position: 'absolute',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    marginTop: 3,
    marginLeft: 54,
  },
  blueLines: {
    width: '40%',
    position: 'absolute',
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
    marginTop: 3,
    marginLeft: 54,
  },

  columnContainer: {
    flexDirection: 'column',
    marginTop: 12,
  },
  linedeexperienceprofessionnelle: {
    marginTop: 8,
    marginLeft: 26,
    width: '90%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },

  line: {
    padding:5,
    marginTop: 4,
    marginLeft: 13,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },
  linestyles: {

    position: "relative",
    marginTop: 83,
    marginLeft: 13,
    width: '100%',
    borderTopWidth: 8,
    borderTopColor: 'violet',
  },
  linestyle: {
    position: "absolute",

    marginTop: 870,
    marginLeft: 19,
    width: '100%',
    borderTopWidth: 8,
    borderTopColor: 'violet',
  },
  lines: {
    marginTop: 48,
    marginLeft: 28,
    width: '91%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },



  donnes: {
    margin: 22,
    marginLeft: 34,
    fontSize: 8,
  },

  donne: {
    marginTop: 5,
    marginLeft: 34,
    fontSize: 8,
  },
  textsDesannee: {
    position: "relative",
    marginTop: 5,
    marginLeft: 209,
    fontSize: 8,
  },

  josues: {
    marginTop: 15,
    fontSize: 7,
    marginLeft: 8,
  },
  josue: {
    margin: 8,
    fontSize: 8,
  },
  textinfos: {
    paddingBottom:7,
    marginTop: 6,
    fontSize: 8,
    marginLeft: 13,
  },
  contact: {
    marginTop: 10,
    fontSize: 8,
    marginLeft: 12,

  },
  textinfo: {
    marginTop: 9,
    fontSize: 10,
    marginLeft: 13,
  },
  texts: {
    marginTop: 5,
    margin: 9,
    fontSize: 8,

  },
  text: {
    marginTop: 12,
    marginLeft: 14,
    fontSize: 8,

  },
  textlorem: {
    marginTop: 3,
    margin: 8,
    fontSize: 8,
  },
  infopresonnel:{
    marginTop: 5,
    color: 'violet',
    marginLeft: 10 ,
    fontSize: 8,
  },
  info: {
    marginTop: 5,
    color: 'violet',
    marginLeft: 14,
    fontSize: 8,
  },
  imagecontainer: {
    marginLeft: 75,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
    width: 83,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,

  },
  image: {
    width: '100%',
    height: '100%',
  },
  global: {
    flexDirection: 'row',
  },
  left: {
    width: '70%',
    marginLeft: -20,
  },
  right: {
    width: '30%',
    paddingLeft: 10,
  },
  languageLeft: {
    marginTop: 7,
    marginLeft: 6,
  },

  languageRight: {
    position: "absolute",
    marginTop: 25,
    marginLeft: 83,
  },
});

export default Pdf;