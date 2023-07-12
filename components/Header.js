import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';


/*import logo from '../public/Patient Records.png';*/
const Header = () => (
  <>
    <div className="Main">
      <div className="Register" >
        <div className="EHRchain">
        {/* {background-image: url('/img1.jpg');
        background-size: cover;
        background-repeat: no-repeat;} */}
        <Link href="/">
          <img
            src='https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.15752-9/357330351_6566394126756962_6540851967248277045_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LrbpO83-nRIAX8AyCZb&_nc_ht=scontent.fbhr4-1.fna&oh=03_AdT-UA0uBAeiI2agkvE8qtNHGQMVSCpnx_TYhxVKPBSHzw&oe=64D32C7E'
            height="80" style={{ paddingTop: '0px', paddingBottom: '2px', display: 'inline-block', float: 'left '}}
            className="d-inline-block align-top"
            alt="EHRChain logo"
            
          ></img>
          </Link>
          
        </div>
      </div>
      <div className="heading">
        <h1 style={{ fontWeight: 'bold', marginLeft:'32rem', marginTop: '10px', marginBottom: '2px', fontFamily: 'Lato', fontSize:'3rem' }}><strong>Welcome to EHRChain</strong> </h1>
        <h2 style={{ fontWeight: 'bold', marginLeft: '0rem', marginTop: '2px',  marginBottom: '50px', fontFamily: 'Lato' }}>Transforming Healthcare with Blockchain Technology</h2>
      </div>
    </div>
    <Menu style={{ marginTop: '30px', marginBottom: '40px', backgroundColor:'#10418B' }}>
      <Link href="/">
        <a
          className="item"
          style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffff' }}
        >
          Home{' '}
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link href="/medical-records">
          <a
            className="item"
            style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffff' }}
          >
            Dashboard
          </a>
        </Link>
        <Link href="/network">
          <a
            className="item"
            style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffff' }}
          >
            ConnectDocs
          </a>
        </Link>
        <Link href="/about">
          <a
            className="item"
            style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffff' }}
          >
            About Us 
          </a>
        </Link>

      </Menu.Menu>
      </Menu>
  </>
);

export default Header;
