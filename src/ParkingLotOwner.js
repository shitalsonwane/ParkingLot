class ParkingLotOwner {
    isParkingLotFull() {
        return true
    }
    isParkingLotAvailable(lot,slot,vehicle){
        console.log('notification to vehicle owner :- parking slot for '+ vehicle.Driver +' is available: '+slot +' in LotNo:'+lot)
    }
}
module.exports = ParkingLotOwner 