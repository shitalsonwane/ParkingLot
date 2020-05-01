class ParkingLotOwner {
    isParkingLotFull() {
        return true
    }
    isParkingLotAvailable(lot,slot){
        console.log('notification to vehicle owner :- parking slot is available: '+slot +' in LotNo:'+lot)
    }
}
module.exports = ParkingLotOwner 