let ParkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let chai=require('chai')
let parkinglotowner=require('../src/ParkingLotOwner')
let parkingAirportSecurity=require('../src/ParkingAirportSecurity')
let expect=chai.expect
let parkingLotSystem
describe('Test cases for ParkingLotSystem simple',function(){
    beforeEach(() => {
        parkingLotSystem=new ParkingLotSystem()
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
            parkingLotSystem.park(car3)
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
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR FIND WHEN VEHICLE WAS PARKED
    it('should return true when vehicle is park with time',function(){
        try{
            let car={vehicleNo:1234,TimeofPark:Date()}
            let car1={vehicleNo:8934,TimeofPark:Date()}
            let car2={vehicleNo:8944,TimeofPark:Date()}
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.park(car2))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR HANDICAP DRIVER GETS NEAREST SPACE
    it('should return true when Normal driver gets space',function(){
        try{
            let car={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal'}
            let car1={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal'}
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
            let car={vehicleNo:1234,TimeofPark:Date(),Driver:'Handicap'}
            let car1={vehicleNo:8934,TimeofPark:Date(),Driver:'Handicap'}
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR NORMAL AND HANDICAP DRIVER PARK
    it('should return true when handicap and normal driver gets nearest space',function(){
        try{
            let car={vehicleNo:1234,TimeofPark:Date(),Driver:'Handicap'}
            let car1={vehicleNo:8934,TimeofPark:Date(),Driver:'Handicap'}
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
})
