let ParkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let chai=require('chai')
let sinon=require('sinon')
let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let expect=chai.expect
let parkingLotSystem
let parkingLotOwner
let parkingAirportSecurity
describe('Test cases for ParkingLotSystem',function(){
    beforeEach(() => {
        parkingLotSystem=new ParkingLotSystem()
        parkingLotOwner=new ParkingLotOwner()
        parkingAirportSecurity=new ParkingAirportSecurity()
        isParkingLotFull=sinon.stub(parkingLotOwner,'isParkingLotFull')
        sinon.stub(parkingLotOwner,'isParkingLotAvailable')
    })
    afterEach(()=>{
        parkingLotOwner.isParkingLotFull.restore()
        parkingLotOwner.isParkingLotAvailable.restore()
    })
    //TEST CASE FOR PARK THE VEHICLE
    it('should return true when vehicle is park',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(car))
    })
    //TEST CASE FOR UNPARK THE VEHICLE
    it('should return true when vehicle is unpark',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(car))
        let unparkresult=parkingLotSystem.unpark(car)
            expect(unparkresult).to.equal(true)
    })
    //TEST CASE FOR NULL VEHICLE TYPE THROW ERROR
    it('should return exception when unpark vehicle is null',function(){
        try{
            let car=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            let unparkresult=parkingLotSystem.unpark(null)
            expect(unparkresult).to.equal(true)
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR NOTIFY OWNER LOT IS FULL
    it('should return exception when lot is full',()=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            let car3=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.park(car2))
            assert.isTrue(parkingLotSystem.park(car3))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR NOTIFY AIRPORT SECURITY LOT IS FULL
    it('should return exception and notify Airport security when lot is full',()=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            let car3=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.park(car2))
            assert.isTrue(parkingLotSystem.park(car3))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR NOTIFY OWNER THAT SLOT IS AVAILABLE
    it('should return exception and notify owner when lot is available',()=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.park(car2))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE TO TO FIND WHICH SLOT ARE EMPTY
    it('should return exception and notify owner which slot is available',()=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.park(car2))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR FIND PARKED VEHICLE TO UNPARK
    it('should return true when vehicle is unpark with slot no',function(){
        try{
            let car=new Object()
            let car1=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR FIND WHEN VEHICLE WAS PARKED 
    it('should return true when vehicle is park with time',function(){
        try{
            let car={vehicleNo:1234,TimeofPark:Date()}
            let car1={vehicleNo:8934,TimeofPark:Date()}
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR HANDICAP DRIVER GETS NEAREST SPACE
    it('should return true when handicap driver gets nearest space',function(){
        try{
            let car={vehicleNo:1234,TimeofPark:Date()}
            let car1={vehicleNo:8934,TimeofPark:Date()}
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
})