"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';


// Define your image path
const image = '/image/BD8Rb_5f.jpg';

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.container}> 
  <View style={styles.lefts}> 
    <Image src={image} style={styles.image}/>
    <View style={styles.padding}>
    <Text style={styles.text}>Pierre Dupont</Text>
    <Text style={styles.text}> Adjointe administrative</Text>
    </View>
  </View>
  <View style={styles.right}>
    <View style={styles.containeright}> 
    <Text style={styles.text2}>Adresse:<Text style={styles.text2}>25 rue des Fleurs 33500 Libourne , France</Text></Text>
    <Text style={styles.text2}>Email:pierre.dupont@gmail.com</Text>
    <Text style={styles.text2}>telefone:<Text style={styles.text}>+33123456789</Text></Text>
    </View>
    <View style={styles.containeright}>
    <Text style={styles.text2}>Date de nascinemento:<Text style={styles.text}>07-06-82</Text></Text>
    <Text style={styles.text2}> Nationnalite: British</Text></View></View></View>
    <View style={styles.dashed}></View>
    <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.black}> <Text  style={styles.color}>OBJECTIF</Text> </View>
    </View>
    <View style={styles.right}>
     <View> <Text style={styles.align}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ipsum vitae velit lacinia lacinia.  </Text></View>
       </View>
    </View>
    <View style={styles.dashed}></View>
    <View style={styles.container}>
       <View  style={styles.left}> 
       <View style={styles.black}> <Text  style={styles.color}>EXPERIENCE</Text> </View>
       <View style={styles.column}>
          <Text style={styles.text1}> jun 2013 - Mars 2017</Text>
          <Text style={styles.text1}>Paris France</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.text1}> jun 2013 - Mars 2017</Text>
          <Text style={styles.text1}>Paris France</Text>
        </View>
       </View>
       
       <View  style={styles.right}>
       <View style={styles.textright}> <Text style={styles.align}>Spécialiste des communications  </Text>
       <Text style={styles.text}>agence de marketing advibes</Text></View>
        <View> <Text style={styles.align}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ipsum vitae velit lacinia lacinia.  </Text>
        <Text style={styles.align}>Spécialiste des communications  </Text>
       <Text style={styles.text}>agence de marketing advibes</Text></View>
        <View> <Text style={styles.align}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ipsum vitae velit lacinia lacinia.  </Text>
        </View>
         </View>
         
    </View>
    <View style={styles.dashed}></View>
    <View style={styles.container}>
       <View  style={styles.left}> 
       <View style={styles.black}> <Text  style={styles.color}>FORMATIONS</Text> </View>
       <View style={styles.column}>
          <Text style={styles.text1}> jun 2013 - Mars 2017</Text>
          <Text style={styles.text1}>Paris France</Text>
        </View>
       </View>
       
       <View  style={styles.right}>
       <View style={styles.textright}> <Text style={styles.align}>Licence d 'art</Text>
       <Text style={styles.text}>universite paris iderot</Text></View>
        <View> <Text style={styles.align}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ipsum vitae velit lacinia lacinia.  </Text>
    </View>
         </View>
         
    </View>
    <View style={styles.dashed}></View>
    <View style={styles.container}>
    <View style={styles.little}>
    <View style={styles.black}> <Text  style={styles.color}>FORMATIONS</Text> </View>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
      <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    </View>
    <View style={styles.meduin}>
    <View style={styles.black}> <Text  style={styles.color}>FORMATIONS</Text> </View>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
      <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    </View>
    <View style={styles.hard}>
    <View style={styles.black}> <Text  style={styles.color}>FORMATIONS</Text> </View>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
      <Text style={styles.textdefin}> jun 2013 - Mars 2017</Text>
    </View>
    </View>
    </Page>
    
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 28,
  },
  little:{
    width:"30%"
  },
  meduin:{
    width:"30%",
  },
  hard:{
    width:"30%"
  },
  textright:{
    paddingTop:40,
  },
  column:{
    paddingTop:23,
    paddingRight:34,
    display:"flex",
    flexDirection:"column",
  },
  columns:{
    paddingTop:50,
    paddingRight:34,
    display:"flex",
    flexDirection:"column",
  },
  align:{
    paddingTop:10,
    fontSize:12,
    textAlign:"left",
  },
  color:{

    color:"white",
    fontSize:10,
  }
  ,
  black:{
    marginTop:10,
    padding:4,
    width:82,
    backgroundColor:"black",

  },
  dashed:{

    borderStyle: 'solid', 
    borderWidth: 1,
    borderColor: 'black',
    borderTopStyle: 'dashed', 
marginTop:14,
  },
  text1:{
    fontSize:10,
  },
  textdefin:{
    fontSize:12,
   paddingTop:6,
  }
  ,
  text2:{
    textAlign:'right',
    fontSize:12,
  },
  text:{
  textAlign:'left',
    fontSize:12,
  },
  containeright:{
    paddingTop:10,
   paddingLeft:100,
  },
  padding:{
     padding:15,
  },
image:{
  height:100,
  width:109,
},
lefts:{
   width:"50%",
   display:'flex',
   flexDirection:'row',
},
  left:{
    width:"50%",
  },
  right:{
    width:'50%'
  },
  container:{
    display:'flex',
    flexDirection:'row',

  },
});
 export default  Pdf;