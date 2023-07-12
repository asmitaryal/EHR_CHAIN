// import Images from 'next/image';
import { Card, Grid, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
export default function Home() {
  return (
    
    <div>
      <Layout>
        <Grid>
          <Grid.Row>
          <div class="ui centered image" style={{ marginBottom:'50px'}}>
          <Image
              fluid
              src='https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.15752-9/358594809_1239962036697505_5708307223169390831_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=e7_5RkuqGXAAX9_LB0V&_nc_oc=AQljnZ9qm5y1jam3E4lRE--_DfNq_8uYaXTyT9UmplPhDh-ZVZgEfu0jVNUI225-Wu0ZRjCfYHCIi-RtzIHVfqFw&_nc_ht=scontent.fbhr4-1.fna&oh=03_AdR_FgeoJYQ0-714jdJkXqcFj1rsHlhJ7xzlSlw1Zoq42g&oe=64D0AE1E'
              size="massive"
              alt="Banner"
            ></Image>
  {/* <img src="path/to/your/image.jpg" alt="Image"> */}
          </div>

            
          </Grid.Row>
          
        </Grid>
      </Layout>

      { <footer className={styles.footer}>
        
      <Grid relaxed columns='equal' divided >
<Grid.Column>
<Card>
    <Image src='blockchain.jpg' wrapped ui={false} />
    <Card.Content textAlign='center'>
      <h2 style={{font:'Open Sans'}}><i><strong>Based on Blockchain</strong></i></h2>
      <Card.Meta style={{color:'black'}}>The entire system of EHRChain is based on blockchain
             technology, making it practically secure.</Card.Meta>
    </Card.Content>
  </Card>
  </Grid.Column>

  <Grid.Column>
  <Card>
    <Image  src='smart contract.jpg' wrapped ui={false} />
    <Card.Content textAlign='center'>
      <h2><i><strong>Smart Contracts</strong></i></h2>
      <Card.Meta style={{color:'black'}}>EHRchain is a smart contract-based project, running in ethereum in blockchain.</Card.Meta>
    </Card.Content>
  </Card>
  </Grid.Column>
  
  
  <Grid.Column>
    <Card>
    <Card>
    <Image src='IPFS.jpg' wrapped ui={false} />
    <Card.Content textAlign='center'>
      <h2><i><strong>IFPS Storage</strong></i></h2>
      <Card.Meta style={{color:'black'}}>All the media is stored on InterPlanetary File System
      ()IPFS network, making it completely safe and private.</Card.Meta>
    </Card.Content>
  </Card>
  </Card>
  </Grid.Column>
</Grid>
      </footer> }
      <Footer/>
     </div>
     
  );       
}; 
