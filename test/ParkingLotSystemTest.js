let ParkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let parkingLotSystem
describe('Testing for park vehicle',function(){
    beforeEach(() => {
        parkingLotSystem = new ParkingLotSystem()
    })
    it('Test case for park the vehicle',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(car))
    })
})