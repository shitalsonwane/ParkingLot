class ParkingLotOwner {
    isParkingLotFull() {
        return true
    }
    isParkingLotAvailable(){
        throw new Error('SLOTS ARE AVAILABLE IN LOTS')
    }
}
module.exports = ParkingLotOwner 