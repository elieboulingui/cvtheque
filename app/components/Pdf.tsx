"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Raleway-BlackItalic",
  src: '/font/fonts/Raleway/Raleway-BlackItalic.ttf',
});

// Define your image path
const image = '/image/abit.jpg';
const point ='/image/e.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      <View style={styles.container}>
    // page de 1
        <View style={styles.information}>
          {/* commencement de la partie de l image de   l utilisateur*/}
          <View style={styles.left}>
            <Image source={image} style={styles.image} />
          </View>
          
          <View style={styles.right}>
            <Text style={styles.name}>Abit</Text>
            <Text style={styles.title}>Adjoint administrative</Text>
          </View>
          {/* fin de la partie de gauche  et commencement a remplir les informations de la page */}
          
          <View style={styles.right}>
          <View style={styles.lieu}>
          <Text style={styles.text}>Adress: <Text style={styles.address}>akanda chateaux a </Text> </Text>
            <Text style={styles.text}>Email <Text style={styles.address}>abitinamotoka@gmail.com</Text> </Text>
            <Text style={styles.text}>telefone<Text >+241087565</Text></Text>

          </View>
          <View style={styles.lieu}>
          <Text style={styles.text}>Data de nascimento: <Text style={styles.address}>07-06-82</Text> </Text>
            <Text style={styles.text}>Nationalité:<Text  style={styles.address} >British</Text></Text>

          </View>
          </View>
        
        </View>
        <View style={styles.separator}></View>
  {/* fin de la partie de gauche  et commencement a faire les objectifs de pierre*/}
  <View style={styles.information}>
        <View style={styles.left}> 
        <View style={styles.black}> <Text style={styles.colorText}>OBJECTIF</Text></View>
        </View>
        <View style={styles.right}>
          <Text style={styles.texts}>It looks like you might be referring to the French term "lormé," which is likely a typo or an incorrect term. If you're asking about something specific like "form" or "format" in design or code, could you </Text>
        </View>
        </View>
        <View style={styles.separator}></View>
         {/* fin  de la partie de objectif de pierre  commencement de son experience*/}
         <View style={styles.information}>
        <View style={styles.left}> 
        <View style={styles.black}> <Text style={styles.colorText}>EXPERIENCES</Text></View>
        <View style={styles.column}>
          <View>
            <Text  style={styles.mois}>juin 2013 - mars 2017</Text>
            <Text  style={styles.address}>Paris,France</Text>
          </View>
          <View style={styles.padding}>
          <Text  style={styles.mois}>juin 2013 - mars 2017</Text>
          <Text  style={styles.address}>Paris,France</Text>
          </View>
        </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.textmois}>It looks like you might be referring</Text>
          <Text style={styles.address}>It looks like you might be referring</Text>
          <Text style={styles.anglais}>It looks like you might be referring to the French term "lormé," which is likely a typo or an incorrect term. If you're asking about something specific like "form" or "format" in design or code, could you </Text>
          <Text style={styles.textmois1}>It looks like you might be referring</Text>
          <Text style={styles.address}>It looks like you might be referring</Text>
          <Text style={styles.anglais}>It looks like you might be referring to the French term "lormé," which is likely a typo or an incorrect term. If you're asking about something specific like "form" or "format" in design or code, could you </Text>
        </View>
        
        </View>
        <View style={styles.separator}></View>
               {/* fin de la partie experience commencement de la partie formation*/}
               <View style={styles.information}>
        <View style={styles.left}> 
        <View style={styles.black}> <Text style={styles.colorText}>EXPERIENCES</Text></View>
        <View style={styles.column}>
          <View>
            <Text  style={styles.mois}>juin 2013 - mars 2017</Text>
            <Text  style={styles.address}>Paris,France</Text>
          </View>
        </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.textmois}>It looks like you might be referring</Text>
          <Text style={styles.address}>It looks like you might be referring</Text>
          <Text style={styles.anglais}>It looks like you might be referring to the French term "lormé," which is likely a typo or an incorrect term. If you're asking about something specific like "form" or "format" in design or code, could you </Text>
        
        </View>
        
        </View>
        
              {/* fin de la partie experience commencement de la partie formation*/}
              
              <View style={styles.containers}>
              <View style={styles.left}> 
              <View style={styles.separators}></View>
    <View style={styles.black}> <Text style={styles.colorText} >HABILIDADES</Text> </View>
    <Text style={styles.textdefin}><Image src={point} style={styles.cercle}/> Methoddologie scrum collaborative</Text>
    <Text style={styles.textdefin}><Image src={point} style={styles.cercle}/>conception de l "experience utilisateur(UX)</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Stratégies d ' affaire B2B</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Francais - Avancé</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Résolution de conflit</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Apache</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Prévision budgétaire</Text>
    <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Gestion du temps</Text>
      <Text style={styles.textdefin}><Image src={point}style={styles.cercle}/>Leadership</Text>
    </View>
    <View style={styles.left}> 
    <View style={styles.separators}></View>
    <View style={styles.black}> <Text style={styles.colorText}>IDIOMAS</Text> </View>
       <Text style={styles.styles}>Anglais</Text>
    <Text style={styles.style}>competence</Text>
    <Text style={styles.style}>professionnelle complete</Text>
    <Text style={styles.styles}>Francais</Text>
    <Text style={styles.style}>competence</Text>
    <Text style={styles.style}>professionnelle complete</Text>
    </View>
    <View style={styles.left}> 
    <View style={styles.separators}></View>
    <View style={styles.black}> <Text  style={styles.colorText}>REFERENCIAS</Text> </View>
    <Text style={styles.styles}>Marie Dupont</Text>
    <Text style={styles.style}>Email : marie.dupont@example.com</Text>
    <Text style={styles.style}>téléphone : +33 6 12 34 5678</Text>
    <Text style={styles.style}>Adresse : 12 Rue des Fleurs, 75000 Paris, France.</Text>
    <Text style={styles.styles}>Nom : Marie Dupont</Text>
    <Text style={styles.style}>Email : marie.dupont@example.com</Text>
    <Text style={styles.style}>téléphone : +33 6 12 34 5678</Text>
      <Text style={styles.style}>Adresse : 12 Rue des Fleurs, 75000 Paris, France</Text>

    </View>
    </View>
      </View>
    </Page>
 {/* fin de la creation du cv*/}
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 28,
 
  },

  styles:{
    fontSize:12,
  paddingTop:13,
  },
  style:{
  fontSize:10,

  },
  cercle:{
    height:4,
  },
  containers:{
    paddingTop:14,
    display:'flex',
    justifyContent:"space-around",
    flexDirection:'row',
  },
  textdefin:{
    fontSize:8,
   paddingTop:8,
  },
  textdefins:{
    fontSize:12,
    paddingTop:10,
  },
  padding:{
    paddingTop:59,
  },
  colorText:{
    padding: 10,
    color:"white",
    fontSize:9,
  },
  column:{
    display:"flex",
    flexDirection:"column",
  },
  mois:{
    fontSize: 9, 
    paddingTop:14,
  },
  address: {
    fontSize: 9,
    fontFamily:"Raleway-BlackItalic",
  },
  black: {
  
    backgroundColor: '#000', 
    maxWidth: 20, 
    minWidth: 90,
    alignItems: 'center', 
    textAlign:"center",
    justifyContent: 'center', 
  },

  separator: {
    width: '99%',
   marginLeft:10, 
    backgroundColor: 'transparent', 
    borderStyle: 'dashed', 
    borderColor: '#000', 
    borderWidth: 1, 
  },
  separators: {
   marginBottom:12,
    width: '100%',
    backgroundColor: 'transparent', 
    borderStyle: 'dashed', 
    borderColor: '#000', 
    borderWidth: 1, 
  },
  textmois1:{
    fontFamily:"Raleway-BlackItalic",
    paddingTop:21,
    fontSize: 12,
    textAlign: 'left',
  },
  textmois:{
    fontFamily:"Raleway-BlackItalic",
    paddingTop:45,
    fontSize: 12,
    textAlign: 'left',
  },
  anglais:{
    paddingTop:12,
    fontSize: 10,
    textAlign: 'left',
  },
  texts:{
    fontSize: 12,
    textAlign: 'left',
  },
  text: {
    fontFamily:"Raleway-BlackItalic",
    fontSize: 12,
    
    textAlign: 'right',
  },
  lieu:{
  padding:6,
    paddingRight:12,
  },
  left: {
    flex: 1,
    paddingTop: 9,
    paddingLeft:7,
  },
  right: {
    flex: 2,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  name: {
    paddingTop:36,
    fontSize: 15,
  },
  title: {
    fontSize: 10,

  },
  image: {
    padding:6,
    paddingBottom:9,
    height: 100,
  },
  information: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  }

});
export default Pdf;