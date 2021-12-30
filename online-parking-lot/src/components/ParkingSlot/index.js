import './index.css'
import UserData from '../UserData';
import ParkingTable from '../ ParkingTable/table';

function ParkingSlot(){
    return(
        <div className='parking-container'>
            <UserData/>
            <ParkingTable/>
        </div>
    )
}
export default ParkingSlot;