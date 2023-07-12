import web3 from './web3';
import Doctor from './build/PatientFile/DoctorContract.json';

const instance = new web3.eth.Contract(
  Doctor.abi,
  '0x1e54A51eA7A5344F00033727E42F1eeab85074E8'
);

export default instance;
