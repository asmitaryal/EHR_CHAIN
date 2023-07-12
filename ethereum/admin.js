import web3 from './web3';
import admin from './build/PatientFile/CentralContract.json';

const instance = new web3.eth.Contract(
  admin.abi,
  '0x60cf5478d962364186B4501b4Eb292c160e96023'
);

export default instance;
