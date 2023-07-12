import React from 'react';
import Link from 'next/link';
import { Grid, Card, Button, Image } from 'semantic-ui-react';
import Footer from "./Footer";

const LoginCards = (props) => {
  return (
    <>
    
    <div className='container'
    ><br></br> <br></br>
      <Grid relaxed columns='3' >

<Grid.Column>
    <Card>
      <Card.Content>
        <Card.Header textAlign='center' marginBottom='2px'><h2><i><strong>Patient</strong></i></h2></Card.Header>
        <Card.Meta textAlign='center' style={{color:'teal'}}>Patient Accounts</Card.Meta>
        <Image src='patient.png'></Image>
        <Card.Description style={{color:'teal'}}>
          <ul>
            <li>Can Sign/Login up as patient</li>
            <li>Can view/add own records</li>
            <li>Can grant/revoke permissions to add/view records</li>
          </ul>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        {/* <div className="ui two buttons"> */}
        <Link href="/medical-records/patient">
          <a>
            <Button basic color="blue">
              Login
            </Button>
          </a>
        </Link>
        <Link href="/medical-records/patient/signUp">
          <a>
            <Button basic color="red">
              Sign Up
            </Button>
          </a>
        </Link>
        {/* </div> */}
      </Card.Content>
    </Card>
  </Grid.Column>

  <Grid.Column>
    <Card > 
      <Card.Content>
        <Card.Header textAlign='center' marginBottom='3px'><h2><i><strong>Admin</strong></i></h2> </Card.Header>
        <Card.Meta textAlign='center' style={{color:'teal'}}>Owner/Medical Council</Card.Meta>
        <Image  Align='center' src='myadmin.png' height= '160px' width= '235x'></Image>
        <Card.Description style={{color:'teal'}}>
          <ul>
            <li>Can add Admins</li>
            <li>Can remove Admins</li>
            <li>Owner of the contract can tranfer his ownership</li>
          </ul>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <Link href="/medical-records/admin">
          <a>
            <Button basic color="blue">
              Login
            </Button>
          </a>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
  
  
  <Grid.Column>
    <Card>
      <Card.Content>
      <Card.Header textAlign='center'><h2><i><strong>Doctor</strong></i></h2> </Card.Header>
        <Card.Meta textAlign='center' style={{color:'teal'}}>Doctors approved by Medical Council</Card.Meta>
        <Image src='doctor.png' height= '155px' width= '233x'></Image>
        <Card.Description style={{color:'teal'}}>
          <ul>
            <li>{`Can view patient's records with permission`}</li>
            <li>{`Can add patient's records with permission`}</li>
          </ul>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <Link href="/medical-records/doctor">
          <a>
            <Button basic color="blue">
              Login
            </Button>
          </a>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
</Grid>
<Footer/>
</div>
 
    </>
  );
};

export default LoginCards;
