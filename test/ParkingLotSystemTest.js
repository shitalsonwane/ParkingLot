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
    //TEST CASE FOR PARK THE NULL VEHICLE
    it('should return true when vehicle is park',function(){
        try{
            assert.isTrue(parkingLotSystem.park(null))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR UNPARK THE VEHICLE
    it('should return true when vehicle is unpark',function(){
        try{
            let car=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            let unparkresult=parkingLotSystem.unpark(car)
                expect(unparkresult).to.equal(true)
        }
        catch(error){
            assert.equal(error.message,'SLOTS ARE AVAILABLE IN LOTS')
        }
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
            let car = [car1={},car2={},car3={},car4={},car5={},car6={},car7={},car8={},car9={},car10={},car11={}]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR NOTIFY AIRPORT SECURITY LOT IS FULL
    it('should return exception and notify Airport security when lot is full',()=>{            
        try{
            let car = [car1={},car2={},car3={},car4={},car5={},car6={},car7={},car8={},car9={},car10={},car11={}]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'LOT IS FULL')
        }
    })
    //TEST CASE FOR NOTIFY OWNER THAT SLOT IS AVAILABLE
    it('should return exception and notify owner when lot is available',()=>{            
        try{
            let car = [car1={},car2={},car3={}]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
                        assert.isTrue(parkingLotSystem.unpark(car1))
       }
        catch(error){
            assert.equal(error.message,'SLOTS ARE AVAILABLE IN LOTS')
        }
    })
    //TEST CASE TO TO FIND WHICH SLOT ARE EMPTY
    it('should return exception and notify owner which slot is available',()=>{            
        try{
            let car = [car1={},car2={},car3={}]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
            assert.isTrue(parkingLotSystem.unpark(car1))
        }
        catch(error){
            assert.equal(error.message,'SLOTS ARE AVAILABLE IN LOTS')
        }
    })
    //TEST CASE FOR FIND PARKED VEHICLE TO UNPARK
    it('should return true when vehicle is unpark with slot no',function(){
        try{
            let car=new Object()
            let car1=new Object()
            assert.isTrue(parkingLotSystem.park(car))
            assert.isTrue(parkingLotSystem.park(car1))
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR FIND WHEN VEHICLE WAS PARKED 
    it('should return true when vehicle is park with time',function(){
        try{
            let car1={vehicleNo:1234,TimeofPark:Date()}
            let car2={vehicleNo:8934,TimeofPark:Date()}
            let car=[car1,car2]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'UNKNOWN VEHICLE')
        }
    })
    //TEST CASE FOR HANDICAP DRIVER GETS NEAREST SPACE
    it('should return true when Normal driver gets space',function(){
        try{
            let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal'}
            let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal'}
            let car=[car1,car2]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'COULD NOT FIND THE SPACE')
        }
    })
    //TEST CASE FOR HANDICAP DRIVER GETS NEAREST SPACE
    it('should return true when handicap driver gets nearest space',function(){
        try{
            let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Handicap'}
            let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Handicap'}
            let car=[car1,car2]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'COULD NOT FIND THE NEAREST SPACE')
        }
    })
    //TEST CASE FOR LARGE VEHICLE PARK IN HIGHEST NUMBER OF SPACE AVAILABLE LOTS
    it('should return true when large vehicle park in highest no of free space lot',function(){
        try{
            let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal',VehicleType:'Large'}
            let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal',VehicleType:'Large'}
            let car=[car1,car2]
            car.map(vehicle => {
                assert.isTrue(parkingLotSystem.park(vehicle))
            })
        }
        catch(error){
            assert.equal(error.message,'COULD NOT FIND HIGHEST NO OF FREE SPACE IN ANY LOT')
        }
    })
})
describe('Test cases for Police Investigation',function(){
    beforeEach(() => {
        parkingLotSystem=new ParkingLotSystem()
        parkingLotOwner=new ParkingLotOwner()
        parkingAirportSecurity=new ParkingAirportSecurity()
    })
    //FIND VEHICLE LOCATION WITH UNDEFIED VEHICLE COLORS RETURN EXCEPTION
    it('should return exception when undefied vehicle find with color',function(){
        let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal'}
        let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByColor('White').then(function(result){
            expect(result).to.equal(true)
        }).catch(error=>{
            assert.equal(error,'COULD NOT FIND VEHICLE WITH GIVEN COLOR')
        })
    })
    //FIND VEHICLE LOCATION WITH VEHICLE COLORS RETURN TRUE 
    it('should return true when vehicle find with color',function(){
        let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal',VehicleColor:'White'}
        let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal',VehicleColor:'White'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByColor('White').then(function(result){
            expect(result).to.equal(true)
        }).catch(error=>{
            assert.equal(error,'COULD NOT FIND VEHICLE WITH GIVEN COLOR')
        })
    })
    //FIND VEHICLE LOCATION WITH VEHICLE UNDEFINED COLOR AND COMPANY RETURN EXCEPTION
    it('should return exception when vehicle find with undefined color and company',function(){
        let car1={vehicleNo:1234,TimeofPark:Date(),Driver:'Normal'}
        let car2={vehicleNo:8934,TimeofPark:Date(),Driver:'Normal'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByCompanyNameandColor('Toyota','Blue').then(function(result){
            expect(result).to.equal(true)
        }).catch(err=>{
            assert.equal(err,'COULD NOT FIND VEHICLE WITH GIVEN COMPANY AND COLOR')
        })
    })
    //FIND VEHICLE LOCATION WITH VEHICLE COLOR AND COMPANY RETURN TRUE
    it('should return true when vehicle find with color and company',function(){
        let car1={vehicleNo:1234,TimeofPark:Date(),VehicleColor:'Blue',VehicleCompany:'Toyota'}
        let car2={vehicleNo:8934,TimeofPark:Date(),VehicleColor:'Blue',VehicleCompany:'Toyota'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByCompanyNameandColor('Toyota','Blue').then(function(result){
            expect(result).to.equal(true)
        }).catch(err=>{
            assert.equal(err,'COULD NOT FIND VEHICLE WITH GIVEN COMPANY AND COLOR')
        })
    })
    //FIND VEHICLE LOCATION UNDEFIED VEHICLE COMPANY RETURN EXCEPTION
    it('should return exception when vehicle find with undefind company',function(){
        let car1={vehicleNo:1234,TimeofPark:Date()}
        let car2={vehicleNo:8934,TimeofPark:Date()}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByCompany('BMW').then(function(result){
            expect(result).to.equal(true)
        }).catch(err=>{
            assert.equal(err,'COULD NOT FIND VEHICLE WITH GIVEN COMPANY')
        })       
    })
    //FIND VEHICLE LOCATION WITH VEHICLE COLOR AND COMPANY RETURN TRUE
    it('should return true when vehicle find with company',function(){
        let car1={vehicleNo:1234,TimeofPark:Date(),VehicleCompany:'BMW'}
        let car2={vehicleNo:8934,TimeofPark:Date(),VehicleCompany:'BMW'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findByCompany('BMW').then(function(result){
            expect(result).to.equal(true)
        }).catch(err=>{
            assert.equal(err,'COULD NOT FIND VEHICLE WITH GIVEN COMPANY')
        })  
    })
    //FIND VEHICLE LOCATION WITH VEHICLE WHICH PARKED IN LAST 30 MIN
    it('should return true when vehicle find with Time',function(){
        let car1={vehicleNo:1234,TimeofPark:parkingLotSystem.currentTime(),VehicleCompany:'BMW'}
        let car2={vehicleNo:8934,TimeofPark:parkingLotSystem.currentTime(),VehicleCompany:'BMW'}
        let car=[car1,car2]
        car.map(vehicle => {
            assert.isTrue(parkingLotSystem.park(vehicle))
        })
        parkingLotSystem.findParkedCarsWithLastMin(parkingLotSystem.currentTime(),30).then(function(result){
            expect(result).to.equal(true)
        }).catch(err=>{
            assert.equal(err,'COULD NOT FIND VEHICLE IN GIVEN TIME')
        })  
    })
})
