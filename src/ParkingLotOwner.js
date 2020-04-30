class ParkingLotOwner {
    isParkingLotFull() {
        return true
    }
    isParkingLotAvailable(slot){
        console.log('notification to vehicle owner :- parking slot is available: '+slot)
    }
}
module.exports = ParkingLotOwner 