let ParkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
describe('Testing for park vehicle',function(){
    it('Test case for park the vehicle',function(){
        let car=new Object()
        let parkingLotSystem=new ParkingLotSystem()
        assert.isTrue(parkingLotSystem.park(car))
    })
})