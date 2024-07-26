"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';



const image = '/image/IMG_0505_Original.jpeg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
    <View style={styles.linestyle}></View>
      <View style={styles.left}>
        <View></View>
        <View style={styles.rectangle}></View>
        <View style={styles.name}><Text>BOULINGUI BOULINGUI</Text></View>
        <View style={styles.names}><Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipi  consectetur Lorem ipsum dolor sit amet</Text></View>
        <View style={styles.profil} >
          <Text style={styles.contact}>PROFIL</Text>
        </View>
        <View style={styles.container}><Text style={styles.textinfo}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In nec tempor tortor. Vestibulum et metus nulla. Suspendisse potenti. Mauris auctor massa at orci consectetur, nec commodo orci tristique."</Text></View>
        <View style={styles.formation}><Text style={styles.info}>FORMATIONS</Text></View>
        <View style={styles.containers}>
         <View style={styles.left}>
            <Text style={styles.anneedeformation1}>2018 - 2019</Text>
            <Text style={styles.anneedeformation2}>2018 - 2019</Text>
         </View>
       
           <View style={styles.ecoledeformation}> <Text   style={styles.textinfo}>Ecole  241</Text>
           <Text style={styles.anneedeformationdeux}>Developpement d 'application web ful-stack</Text>
           </View>
         
      </View>
      <View style={styles.mptic}>           <Text style={styles.nptics}> Developpement d 'application web ful-stack Developpement d 'application web ful-stack Developpement d 'application web ful-stack</Text></View>
      <Text  style={styles.genielogiciel}> Developpement d 'application web ful-stack</Text>
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
  <Text  style={styles.emploiesdefinition}>Airtel Gabon</Text>
  <Text style={styles.emploiesdefinition}>Orem ipsum dolor sit amet, consectetur adipi  consectetur Lorem ipsum dolor sit amet</Text>
</View>
<View style={styles.hachaton}>
  <Text style={styles.anneedetravails}>20H00 - 2014</Text>
<Text style={styles.contact}>Coach technique a hachaton nation e-Gabon</Text>
<Text style={styles.formationdeparicipants}>Ogooue-labs</Text>
<Text style={styles.formationdeparicipants}>Forme les participants au concours sur :</Text>
<Text style={styles.formationdeparicipants}>Développeur web </Text>
<Text style={styles.formationdeparicipants}>Data scientist</Text>
<Text style={styles.formationdeparicipants}> Architecte cloud </Text>
<Text style={styles.formationdeparicipants}>Ingénieur en sécurité informatique </Text>
</View>
<View style={styles.conseildigital}>
  <Text style={styles.aujourdhuit}>04/04/2011 - aujourdhuit</Text>
  <Text style={styles.conseiltext}>Conseiller en formation digital</Text>
  <Text style={styles.conseiltextgris}>Ogoue tech industrie</Text>
  <Text style={styles.conseiltextgris}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Text>
</View>
<View style={styles.linedeexperienceprofessionnelle}></View>
      </View>
        
     
      <View style={styles.right}>
        {/* Image Section */}
        <View style={styles.imagecontainer}>
          <Image style={styles.image} src={image} />
        </View>

        {/* Personal Information Section */}
        <View>
          <Text style={styles.info}>INFORMATIONS PERSONNELLES</Text>
          <Text style={styles.contact}>TÉLÉPHONE : <Text style={styles.information}>+24177888664</Text></Text>
          <Text style={styles.contact}>EMAIL : <Text  style={styles.information}>@gmail.com</Text></Text>
          <Text style={styles.contact}>ADRESSE : <Text  style={styles.information}>Lorem ipsum dolor sit amet, Lorem </Text></Text>
          <Text style={styles.contact}>autres information:</Text>
          <Text style={styles.textinfos}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</Text>
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
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
            <Text style={styles.text}> -  AUTRE INFORMATION</Text>
          </View>
        </View>

        {/* Separator line */}
        <View style={styles.line}></View>
        <View>
          <Text style={styles.info}>LANGUES</Text>
          <View style={styles.languageLeft}>
            <Text style={styles.texts}>FRANÇAIS</Text>
            <Text style={styles.texts}>ANGLAIS</Text>
            <Text style={styles.texts}>Espagnol</Text>
          </View>
          <View style={styles.languageRight}>
            <Text style={styles.josue}>MATERNEL</Text>
            <Text style={styles.josue}>INTERMEDIAIRE</Text>
            <Text style={styles.josue}>meduin</Text>
          </View>
        </View>



      </View>
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
  aujourdhuit:{
    position:"absolute",
    fontSize:6,
    marginTop:10,
    marginLeft:308,
  },
  anneedetravails:{
    position:"absolute",
    fontSize:9,
    marginTop:10,
    marginLeft:308,
  },
  conseildigital:{
    marginTop:16,
    marginLeft:10,
  },
  hachaton:{
    marginTop:16,
    marginLeft:10,
  },
  conseiltextgris:{
    color:"#e1e1f6",
    marginTop: 9,
    fontSize: 8,
    marginLeft:13,
  },
  conseiltext:{
    marginTop: 9,
    fontSize: 8,
    marginLeft:13,
  },
  formationdeparicipants:{
    color:"#e1e1f6",
    marginTop: 9,
    fontSize: 8,
    marginLeft:13,
  },
  emploiesdefinition:{
    color:"#e1e1f6",
      marginTop: 9,
      fontSize: 8,
      marginLeft:13,
   
    
  },
  stagiaire:{
    marginTop:23,
    marginLeft:11,
  },
  anneetafs:{
    position:"absolute",
    marginTop:464,
    marginLeft:183,
  },
  anneetaf:{
    position:"absolute",
    marginTop:316,
    marginLeft:183,

  },
  anneedemploies:{
    position:'relative',
    fontSize:9,
    marginLeft:134,
  },
  emploies:{
    marginLeft:43,
    marginTop:15,
    fontSize:10,
    color:"#e1e1f6",
  },
  coach:{
    marginLeft:43,
    marginTop:15,
    fontSize:10,
  },
  experience:{
    marginTop:12,
    marginLeft:13,
  },
  genielogiciel:{
    fontSize:9,
    marginTop:14,
    marginLeft:115,
  },
  nptics:{
    color:"#e1e1f6",
    width:"56%",
    fontSize:6,

  },
  mptic:{
    position:'absolute',
    marginTop:233,
    marginLeft:116,
  },
  anneedeformationdeux:{
    fontSize:9,
    marginTop:8,
    marginLeft:13,
  },
  ecoledeformation:{
    position:"relative",
    marginRight:200,
    marginTop:2,
  },
  containers:{
    flexDirection:'row',
  },
  sujetdeformation:{
    position:"absolute",
    marginRight:179,
  },

  anneedeformation2:{
    marginLeft:48,
    fontSize:9,
    marginTop:30,
    color:"#e1e1f6",
  },
  anneedeformation1:{
  marginLeft:48,
  fontSize:9,
  marginTop:10,
  color:"#e1e1f6",
  },
  formation:{
    marginTop:99,
    marginLeft:16,
  },
  container:{
    width:"89%",
    marginLeft:17,
    position:"absolute",
    marginTop:110,

  },
  profil:{
    position:"absolute",
   marginTop:99,
   marginLeft:17,
  },
  name:{
    position:'absolute',
    marginTop:12,
    marginLeft:73,

  },
  names:{
    position:'absolute',
    marginTop:40,
    fontSize:12,
    marginLeft:27,


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
    backgroundColor: "#f7f7f7",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  positions:{
    position:"absolute",
    marginTop:47,
    width:234,
     marginLeft:185,
  },
  espace:{
    marginTop:3,
    height:12,
    width:12,
    position:"absolute",
    marginLeft:83,
  },
  
 
  information:{
    fontSize:7,
    marginLeft:22,
    color:"#e1e1f6",
  },
  competences: {
    fontSize: 8,
    marginTop:6,
    color:"#e1e1f6",
    fontWeight: 'bold',
    marginRight:43,
    marginBottom: 5,
  },
  progressBar: {
    height: 4,
    marginTop:3,
    width:64,
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
    marginLeft:10,
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
    backgroundColor: '#007bff',
    marginLeft: -7,
  },
 
  position:{
    position:"absolute",
    marginTop:12,
    marginLeft:94,
  },


  

  enbasdelabarreviolet:{
    marginTop:23,
    marginLeft:33,
  },

  violet: {
    backgroundColor: 'violet',
    height: 88,
    width: 32,
  },

  rest: {
    marginTop:22,
    fontSize: 8,
  },
  blueLine: {
    width: '60%',
    position:'absolute',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    marginTop: 3,
    marginLeft:54,
  },
  blueLines: {
    width: '40%',
    position:'absolute',
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
    marginTop: 3,
    marginLeft:54,
  },
 
  columnContainer: {
    flexDirection: 'column',
    marginTop: 8,
  },
  linedeexperienceprofessionnelle:{
    marginTop: 8,
    marginLeft:25,
    width: '88%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },

  line: {
    marginTop: 8,
    marginLeft:13,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },
  linestyles:{
    
    position:"relative",
    marginTop: 83,
    marginLeft:13,
    width: '100%',
    borderTopWidth: 8,
    borderTopColor: 'violet',
  },
  linestyle:{
    
    position:"absolute",
    marginTop: 860,
    marginLeft:19,
    width: '100%',
    borderTopWidth: 8,
    borderTopColor: 'violet',
  },
  lines:{
    marginTop: 48,
    marginLeft:28,
    width: '91%',
    borderTopWidth: 2,
    borderTopColor: 'violet',
  },

  

  donnes:{
    margin: 22,
    marginLeft:34,
    fontSize: 8,
  },

  donne:{
    marginTop: 5,
    marginLeft:34,
    fontSize: 8,
  },
  textsDesannee:{
    position:"relative",
    marginTop: 5,
    marginLeft:209,
    fontSize: 8,
  },

  josues:{
    marginTop: 15,
    fontSize: 7,
    marginLeft:8,
  },
  josue: {
    color:"#e1e1f6",
    margin: 7,
    fontSize: 5,
  },
  textinfos:{
    marginTop: 6,
    fontSize: 8,
    marginLeft:13,
    color:"#e1e1f6",
  },
  contact:{
    marginTop: 9,
    fontSize: 8,
    marginLeft:13,
 
  },
  textinfo:{
    marginTop: 9,
    fontSize: 8,
    marginLeft:13,
    color:"#e1e1f6",
  },
  texts: {
    marginTop: 5,
    margin:8,
    fontSize: 5,
  
  },
  text: {
    marginTop: 5,
    margin:8,
    fontSize: 5,
    color:"#e1e1f6",
  },

  info: {
    marginLeft:12,
    marginTop: 5,
    color: 'violet',
    fontSize: 8,
  },
  imagecontainer: {
    marginLeft:75,
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
    marginTop:7,
    marginLeft:3,
  },
  
  languageRight: {
    position:"absolute",
    marginTop: 27,
    marginLeft:83,
  },
});

export default Pdf;