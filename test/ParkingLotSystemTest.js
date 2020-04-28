let parkingLotSystem=require('../src/ParkingLotSystem')
let assert=require('chai').assert
let chai=require('chai')
let sinon=require('sinon')
let parkinglotowner=require('../src/ParkingLotOwner')
let expect=chai.expect
describe('Test cases for ParkingLotSystem',function(){
    beforeEach(() => {
        parkingSlot=[]
        parkingLotMaxSize=3
    })
    //TEST CASE FOR PARK THE VEHICLE
    it('should return true when vehicle is park',function(){
        let car=new Object()
        parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car,function(result){
            expect(result).to.equal(true)
        })
    })
    //TEST CASE FOR UNPARK THE VEHICLE
    it('should return true when vehicle is unpark',function(){
        let car=new Object()
        parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car,function(result){
        let unparkresult=parkingLotSystem.unpark(car)
            expect(unparkresult).to.equal(true)
        })
    })
    //TEST CASE FOR NULL VEHICLE TYPE THROW ERROR
    it('should return exception when unpark vehicle is null',function(){
        try{
            let car=new Object()
            let parkingSlot=new Array()
            const parkingLotMaxSize=3
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car,function(result){
            let unparkresult=parkingLotSystem.unpark(car)
            expect(unparkresult).to.equal(true)
            })
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR NOTIFY OWNER LOT IS FULL
    it('should return exception when lot is full',(done)=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            let car3=new Object()
            let isParkingLotFull=sinon.stub()
            isParkingLotFull.withArgs(parkingSlot,parkingLotMaxSize).yields(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car3,function(result){
                expect(result).to.equal(true)
            done()
            })})})})
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
            done()
        }
    })
    //TEST CASE FOR NOTIFY AIRPORT SECURITY LOT IS FULL
    it('should return exception and notify Airport security when lot is full',(done)=>{            
        try{
            let car=new Object()
            let car1=new Object()
            let car2=new Object()
            let car3=new Object()
            let isParkingLotFull=sinon.stub()
            isParkingLotFull.withArgs(parkingSlot,parkingLotMaxSize).yields(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car1,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car2,function(result){
                expect(result).to.equal(true)
            parkingLotSystem.park(parkingSlot,parkingLotMaxSize,car3,function(result){
                expect(result).to.equal(true)
            done()
            })})})})
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
            done()
        }
    })
})