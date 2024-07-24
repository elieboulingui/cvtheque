"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Define your image path
const image = '/image/BD8Rb_5f.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Section */}
      <View style={styles.left}>
        <View style={styles.name}>
          <Text>GABIN STEEVEN Nguembi</Text>
          <Text style={styles.rest}> JE EJE EJ EJ EJJE EJ EJ EJEJEEJEJEJEJE</Text>
        </View>
        <View style={styles.violet}></View>
        <View style={styles.enbasdelabarreviolet}> <Text>Profil</Text>
       <View style={styles.container}> <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, magna vitae condimentum dignissim, velit purus commodo tortor, sed fringilla lectus mi eget leo. Nullam eu mi semper, vulputate enim eu, fermentum nulla. Nunc vitae malesuada eros. Vestibulum vitae efficitur eros. Proin tempor ultricies purus, a vehicula ex fermentum vel. Duis faucibus, mi id ullamcorper scelerisque, eros ipsum rutrum lorem, nec volutpat urna libero non odio. Mauris quis purus vel eros sollicitudin vestibulum. Aenean consectetur lobortis quam, non venenatis augue auctor in. Etiam a erat nec odio maximus faucibus. Proin et velit at felis dignissim ultricies. Pellentesque id libero eu elit tristique ultricies. Sed condimentum varius lectus, a venenatis purus facilisis eget. Vivamus in quam euismod, condimentum nisi sed, lacinia mi. Nullam ac vestibulum est. Curabitur non ultricies urna.

Fusce efficitur magna vel nisl eleifend, in elementum purus pharetra. Phasellus id libero risus. Mauris interdum arcu eu ligula fermentum, vel lacinia tortor pellentesque. Nulla et leo id libero pharetra fermentum. In hac habitasse platea dictumst. Curabitur ac odio sed mi feugiat feugiat a in erat. Proin vestibulum leo nec mi rhoncus convallis. Nulla facilisi. Duis tristique, ex eu blandit tincidunt, mi augue pellentesque turpis, vitae aliquet leo augue eget orci. Donec ultrices dui quis ipsum fermentum, sed condimentum odio euismod. Phasellus sed sollicitudin justo. Sed vitae nibh condimentum, convallis sem non, tincidunt odio. Nunc gravida risus nisi, vitae tincidunt sapien pellentesque a. Integer eu augue vitae libero eleifend sagittis.
</Text></View>
        </View>
        <View>
          <Text style={styles.infos}> FORMATIONS</Text>
          
          <View style={styles.languageLeft}>
            <Text style={styles.texts}>2018 - 2019 </Text>
            <Text style={styles.annee}>2015 -  2017</Text>
          </View>
          <View style={styles.languageRight}>
            <Text style={styles.donne}>ecole 241</Text>
            <Text style={styles.donnes}>développement d " application web full-stack</Text>
            <Text style={styles.donne}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, magna vitae condimentum dignissim, velit purus commodo tortor, sed fringilla lectus mi eget leo</Text>
           <Text  style={styles.donne}> genie informatique option logiciiel</Text>
          </View>
        </View>
        <View style={styles.lines}></View>
        <Text style={styles.info}>EXPERIENCES PERSONNELLES</Text>
        <View>
        <View style={styles.languageRight}> //languageLefts
            <Text style={styles.textsDesannee}>2018 - 2019 </Text>
        
            <Text style={styles.annees}>2015 -  2017</Text>
          </View>
          <View style={styles.languageLefts}>
            <Text style={styles.donneExperience}>développement d " application web full-stack</Text>
            <Text style={styles.donneExperience}>développement d " application web full-stack</Text>
            <Text style={styles.donneExperience}> développement d " application web full-stack</Text>
           <Text  style={styles.donneExperience}> genie informatique option logiciiel</Text>
          </View>
          <View>     <View style={styles.languageRight}> 
            <Text style={styles.textsDesannee}>2018 - 2019 </Text>
            <Text style={styles.annees}>2015 -  2017</Text>
          </View>
          <View style={styles.languageLefts}>
            <Text style={styles.donneExperience}>développement d " application web full-stack</Text>
            <Text style={styles.donneExperience}>développement d " application web full-stack</Text>
            <Text style={styles.donneExperience}> développement d " application web full-stack</Text>
           <Text  style={styles.donneExperience}> genie informatique option logiciiel</Text>
          </View></View>
        </View>
        <View style={styles.liness}></View>
        <Text style={styles.info}>PROJECTS PRERSONNELS</Text>
        <View style={styles.view}>
        <View style={styles.textinleft}>
          <Text> 2012 - 2013</Text>
           <Text> 2012 - 2015</Text>
        </View>
        <View> <Text style={styles.textinright}> boulingui </Text>
          <Text style={styles.textinright}> MOUNGUENGUI</Text></View>
        </View>
        </View>
      
    

      {/* Right Section */}
      <View style={styles.right}>
        {/* Image Section */}
        <View style={styles.imagecontainer}>
          <Image style={styles.image} src={image} />
        </View>

        {/* Personal Information Section */}
        <View>
          <Text style={styles.info}>INFORMATIONS PERSONNELLES</Text>
          <Text style={styles.text}>TÉLÉPHONE : <Text>+24177888664</Text></Text>
          <Text style={styles.text}>EMAIL : <Text>@gmail.com</Text></Text>
          <Text style={styles.text}>ADRESSE : <Text>cscs</Text></Text>
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

        {/* Languages Section */}
        <View>
          <Text style={styles.info}>LANGUES</Text>
          <View style={styles.languageLeft}>
            <Text style={styles.text}>FRANÇAIS</Text>
            <Text style={styles.text}>ANGLAIS</Text>
            <Text style={styles.text}>Espagnol</Text>
          </View>
          <View style={styles.languageRight}>
            <Text style={styles.text}>FRANÇAIS</Text>
            <Text style={styles.text}>ANGLAIS</Text>
            <Text style={styles.text}>Espagnol</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const SkillItem = ({ title }) => (
  <View style={styles.skillContainer}>
    <Text style={styles.competences}>{title}</Text>
    <View style={styles.blueLine}></View>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 20,
  },
view:{
   flexDirection:'row',
   marginTop:23,

},
  container:{
    height:45,
    width:298,
  },
  
  lorem:{
    marginTop:6,
    letterSpacing:1,
    fontSize:6,
  },
  enbasdelabarreviolet:{
    marginTop:23,
    marginLeft:33,
  },
  name: {
    position:"absolute",
    marginTop:13,
    marginLeft:57,
    marginBottom: 10,
  },
  violet: {
    backgroundColor: 'violet',
    height: 88,
    width: 32,
  },
  textinleft:{
    fontSize:12,
     
  },
  textinright:{
    fontSize:12,
    marginLeft:23,

  },
  rest: {
    marginTop:22,
    fontSize: 8,
  },
  blueLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginTop: 2,
    marginBottom: 6,
  },
  columnContainer: {
    flexDirection: 'column',
    marginTop: 8,
  },
  skillContainer: {
    marginBottom: 8,
  },
  competences: {
    fontSize: 7,
    backgroundColor: 'grey',
    marginBottom: 2,
    paddingTop: 2,
    paddingLeft: 2,
  },
  line: {
    marginTop: 8,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'violet',
  },
  lines:{
    marginTop: 48,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'violet',
  },
  liness:{
    marginTop: 58,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'violet',
  },
  annees:{
    position:"relative",
    marginTop: 85,
    marginLeft:209,
    fontSize: 8,
    
  },
  annee:{
    marginTop: 55,
    fontSize: 8,
  },
  donnes:{
    margin: 22,
    marginLeft:34,
    fontSize: 8,
  },
  donneExperience:{
    marginTop: 5,
    marginRight:74,
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
  texts:{
    marginTop: 5,
    fontSize: 8,
  },
  text: {
    marginTop: 5,
    fontSize: 8,
  },
  infos: {
    marginTop: 10,
    color: 'violet',
    marginLeft:29,
    fontSize: 8,
  },
  info: {
    marginTop: 10,
    color: 'violet',
    fontSize: 8,
  },
  imagecontainer: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
    width: 43,
    height: 53,
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
    paddingRight: 10,
  },
  right: {
    width: '30%',
    paddingLeft: 10,
  },
  languageLeft: {
    marginTop:12,
    marginLeft:32,
  },
  languageLefts: {
    marginTop:28,
    marginRight:62,
  },
  
  languageRight: {
    position:"absolute",
    marginTop: 27,
    marginLeft:83,
  },
});

export default Pdf;
