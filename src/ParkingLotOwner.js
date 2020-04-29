class ParkingLotOwner {
    isParkingLotFull() {
        console.log('notification to vehicle owner :- parking lot is full.')
    }
    isParkingLotAvailable(slot){
        console.log('notification to vehicle owner :- parking slot is available: '+slot)
    }
}
module.exports = ParkingLotOwner 