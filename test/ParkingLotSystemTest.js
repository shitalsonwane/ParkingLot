let ParkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let parkingLotSystem
describe('Test cases for ParkingLotSystem',function(){
    beforeEach(() => {
        parkingLotSystem = new ParkingLotSystem()
    })
    //TEST CASE FOR PARK THE VEHICLE
    it('should return true when vehicle is park',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(car))
    })
    it('should return true when vehicle is unpark',function(){
        let car=new Object()
        parkingLotSystem.park(car)
        assert.isFalse(parkingLotSystem.unpark(car))
    })
})