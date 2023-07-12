import web3 from './web3';
import Patient from './build/PatientFile/PatientContract.json';

const instance = new web3.eth.Contract(
  Patient.abi,
  '0x261580585115D3e3274FB69cE5193bAE593268C0'
);
export default instance;
