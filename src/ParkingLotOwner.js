class ParkingLotOwner {
    isParkingLotFull() {
        throw new Error('LOT IS FULL')
    }
    isParkingLotAvailable(){
        throw new Error('SLOTS ARE AVAILABLE IN LOTS')
    }
}
module.exports = ParkingLotOwner 