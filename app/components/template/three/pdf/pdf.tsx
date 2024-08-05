
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

const dyagramme='/image/Group.png';
const star="/image/star.png";
const profileImage = '/image/téléchargement.jpeg';
const imageDekier="/image/Vectors.png";
const imageDeguitare="/image/Vecto.png";
const imageDecoeur ="/image/Vector.png"

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxP.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 10,
    fontFamily: 'Roboto',
  },
  enBasDeAboutMe:{
    alignItems:"center",
    marginTop:8,
    height:27,
    width:129,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  leftColumn: {
    width: '70%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '30%',
    backgroundColor: '#1f3b5c',
    color: 'white',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  enBasDeAboutMes:{
    alignItems:"center",
    marginLeft:1,
    marginTop:2,
    height:27,
    width:379,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  view:{
    position:'absolute',
    marginLeft:253,
    marginTop:363,
    fontSize: 12,
    marginBottom: 5,
  },
  viewnextDeFins:{
    position:'absolute',
    marginLeft:253,
    marginTop:855,
    fontSize: 12,
    marginBottom: 5,  
  },
  viewnextDeFin:{
    position:'absolute',
    marginLeft:253,
    marginTop:822,
    fontSize: 12,
    marginBottom: 5,  
  },
  viewnexts:{
    position:'absolute',
    marginLeft:253,
    marginTop:662,
    fontSize: 12,
    marginBottom: 5,  
  },
  viewnext:{
    position:'absolute',
    marginLeft:253,
    marginTop:523,
    fontSize: 12,
    marginBottom: 5,  
  },
  textleft:{
    fontSize: 12,
    marginBottom: 5,
  },
  texts:{
    fontSize: 12,
    marginBottom: 5,
    color:"blue",
  },
  profileImage: {
    width: 60,
    marginLeft:33,
    height: 60,
    borderRadius: '50%',
    marginBottom: 10,
  },
  contactInfo: {
    marginBottom: 10,
  },
  progressBarContainer: {
    marginBottom: 10,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'blue',
    borderRadius: 4,
    marginBottom: 4,
  },
  progressBarEnglish: {
    width: '100%',
    backgroundColor: 'white',
  },
  progressBarSpanish: {
    width: '75%',
    backgroundColor: 'white',
  },
  progressBarGerman: {
    width: '34%',
    backgroundColor: 'white',
  },
});

const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}wrap={false}>
      <View style={styles.leftColumn}>
        <Text style={styles.header}>JAMES MOORE</Text>
        <Text style={styles.texts}>Experienced Project Manager</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.text}>📞 +1 000 *** ****</Text>
          <Text style={styles.text}>📧 jamesmoore@gmail.com</Text>
          <Text style={styles.text}>🔗 linkedin.com/james-moore</Text>
          <Text style={styles.text}>📍 New York City, NY</Text>
        </View>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <View style={styles.enBasDeAboutMes}></View>
        <Text style={styles.text}>
          Result-orientated project team leader with 5 years of experience covering project and product management including developing, implementing and supporting complex infrastructures for fast growing startups. A fast and eager learner, I am detail oriented and adapt to changing project requirements quickly to meet business goals. Comfortable with ambiguity and able to thrive in a fast-paced environment.
        </Text>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        <View style={styles.enBasDeAboutMes}></View>
        <Text style={styles.text}>Senior IT Product Manager  </Text>
        <View style={styles.view}><Text style={styles.textleft}> 02/2019 - Ongoing</Text> <Text style={styles.text}> San Francisco, CA</Text> </View>
        <Text style={styles.texts}>Rover Games</Text>
        
        <Text style={styles.text}>- Accelerated outbound sales cycle by 330% by designing and implementing customer acquisition platform for training and managing technical sales personnel.</Text>
        <Text style={styles.text}>- Established and curated strategic partnerships with 6 out of 10 top state manufacturing companies which resulted in $20M additional annual revenue.</Text>
        <Text style={styles.text}>- Led re-architect effort of a core SaaS product to reduce the platform deployment time for clients by 2 months.</Text>

        <Text style={styles.text}>Project Manager </Text>
        <Text  style={styles.texts}> Tesla</Text>
        <View  style={styles.viewnext}>  <Text style={styles.text}>2012 - 2019 </Text>
         <Text>Los Angeles, CA</Text></View>
       
        <Text style={styles.text}>- Lead a team of developers to build a proprietary CRM system for enterprise and its strategic partners, optimizing sales process and increasing sales revenue by 24%.</Text>
        <Text style={styles.text}>- Curated a $2M business implementation project that saves ~$3.5M on operational inefficiencies between sales and development departments annually.</Text>

        <Text style={styles.text}>Project Coordinator  Wolf Industry</Text>
        <Text  style={styles.texts}>Wolf Industry</Text>
        <View style={styles.viewnexts}> <Text style={styles.text}>2009 - 2012  </Text> <Text>Los Angeles, CA</Text> </View>
       
        <Text style={styles.text}>- Maintained and documented inventory of over 4,000 items.</Text>
        <Text style={styles.text}>- Proposed & managed a project which reduced outbound logistics costs by 7% while reducing average delivery times and increasing delivery precision.</Text>

        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.enBasDeAboutMes}></View>
        <Text style={styles.text}>Industrial Engineering, MSc  </Text>
        <View  style={styles.viewnextDeFin}><Text style={styles.text}>2000 - 2002</Text> 
       
        </View>
        <View  style={styles.viewnextDeFins}><Text style={styles.text}>2000 - 2002</Text> 
       
        </View>
        <Text  style={styles.texts}> University of California, Berkeley </Text>
        <Text style={styles.text}>Industrial Engineering, BSc </Text>
        <Text  style={styles.texts}> University of California, Berkeley </Text>
      </View>
      <View style={styles.rightColumn}>
        <Image style={styles.profileImage} src={profileImage} />
        <Text style={styles.sectionTitle}>STRENGTHS</Text>
        <View style={styles.enBasDeAboutMe}></View>
        <Text style={styles.text}> <Image src={star}/> Strategic Planner: Developing steps along the way to achieve "big picture" results with market & stakeholder input.</Text>
        <Text style={styles.text}><Image src={star}/> Flexible: Comfortable with ambiguity and able to thrive in a fast-paced environment.</Text>
        
        <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
        <View style={styles.enBasDeAboutMe}></View>
        <Text style={styles.text}><Image src={star}/> Cost Saving Of $100M: Through efficient project management and teamwork, my team saved the division at Tesla over $100 Million in the engine assembly department.</Text>
        <Text style={styles.text}> < Image src={dyagramme}/>Exceeded throughput target by 90%: Cutting loading time & fixing key security issues by moving key remote workers successfully online at scale.</Text>
        
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.enBasDeAboutMe}></View>
        <Text style={styles.text}>- Product Development • Scrum • SQL • Tableau • JIRA • Stakeholder Management</Text>
        
        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <View style={styles.enBasDeAboutMe}></View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.text}>- English: Native</Text>
          <View style={[styles.progressBar, styles.progressBarEnglish]}></View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.text}>- Spanish: Advanced</Text>
          <View style={[styles.progressBar, styles.progressBarSpanish]}></View>
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.text}>- German: Intermediate</Text>
          <View style={[styles.progressBar, styles.progressBarGerman]}></View>
        </View>
        
        <Text style={styles.sectionTitle}>PASSIONS</Text>
        <View style={styles.enBasDeAboutMe}></View>
        <Text style={styles.text}> <Image src={imageDecoeur}/>  Family</Text>
        <Text style={styles.text}> <Image src={imageDekier}/> Adrenaline Sports</Text>
        <Text style={styles.text}><Image src={ imageDeguitare}/> Composing music</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;