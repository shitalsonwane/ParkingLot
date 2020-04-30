let parkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let chai=require('chai')
let sinon=require('sinon')
let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let expect=chai.expect
let parkingLotOwner
let parkingAirportSecurity
describe('Test cases for ParkingLotSystem',function(){
    beforeEach(() => {
        parkingSlot=[]
        parkingLotMaxSize=3
        parkingLotOwner=new ParkingLotOwner()
        parkingAirportSecurity=new ParkingAirportSecurity()
    })
    //TEST CASE FOR PARK THE VEHICLE
    it('should return true when vehicle is park',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
    })
    //TEST CASE FOR UNPARK THE VEHICLE
    it('should return true when vehicle is unpark',function(){
        let car=new Object()
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
        let unparkresult=parkingLotSystem.unpark(car)
            expect(unparkresult).to.equal(true)
    })
    //TEST CASE FOR NULL VEHICLE TYPE THROW ERROR
    it('should return exception when unpark vehicle is null',function(){
        try{
            let car=new Object()
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
            let unparkresult=parkingLotSystem.unpark(car)
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
            isParkingLotFull=sinon.stub(parkingLotOwner,'isParkingLotFull')
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car3))
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
            isParkingLotFull=sinon.stub(parkingAirportSecurity,'isParkingLotFull')
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car3))
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
            sinon.stub(parkingLotOwner,'isParkingLotAvailable')
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2))
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
            sinon.stub(parkingLotOwner,'isParkingLotAvailable')
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
            assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR FIND PARKED VEHICLE TO UNPARK
    it('should return true when vehicle is unpark with slot no',function(){
        let parkingLotAvailable=sinon.stub(parkingLotOwner,'isParkingLotAvailable')
        parkingLotAvailable.withArgs(3)
        let car=new Object()
        let car1=new Object()
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
        assert.isTrue(parkingLotSystem.unpark(car1))
    })
    //TEST CASE FOR FIND WHEN VEHICLE WAS PARKED 
    it('should return true when vehicle is park with time',function(){
        let parkingLotAvailable=sinon.stub(parkingLotOwner,'isParkingLotAvailable')
        parkingLotAvailable.withArgs(3)
        let car={vehicleNo:1234,TimeofPark:Date()}
        let car1={vehicleNo:8934,TimeofPark:Date()}
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car))
        assert.isTrue(parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1))
        assert.isTrue(parkingLotSystem.unpark(car1))
    })
})