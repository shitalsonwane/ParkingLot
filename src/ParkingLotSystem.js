let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let parkingLotOwner=new ParkingLotOwner()
let parkingAirportSecurity=new ParkingAirportSecurity()
let park=function(parkingSlot,parkingLotMaxSize,vehicle){
    if (vehicle==null || vehicle==undefined){
        throw new Error('UNKNOWN VEHICLE') 
    }
    if(parkingSlot.length==parkingLotMaxSize){
        parkingLotOwner.isParkingLotFull()
        parkingAirportSecurity.isParkingLotFull()
        throw new Error('LOT IS FULL')
    }
    else{
        parkingSlot.push(vehicle)
        if(parkingSlot.length<parkingLotMaxSize){
            parkingLotOwner.isParkingLotAvailable()
        }
        return true
    }
}
let unpark=function(vehicle){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        parkingSlot.pop(vehicle)
        parkingLotOwner.isParkingLotAvailable()
        return true
    }
exports.park=park
exports.unpark=unpark