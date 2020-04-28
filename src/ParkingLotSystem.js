let parkingLotOwner=require('../src/ParkingLotOwner')
let parkingAirportSecurity=require('../src/ParkingAirportSecurity')
let park=function(parkingSlot,parkingLotMaxSize,vehicle,callback){
    parkingLotOwner.isParkingLotFull(parkingSlot,parkingLotMaxSize,function(result){
        parkingAirportSecurity.isParkingLotFull(parkingSlot,parkingLotMaxSize,function(airportResult){
            if (vehicle==null || vehicle==undefined){
                throw new Error('UNKNOWN VEHICLE') 
            }
            if(airportResult==true){
                parkingSlot.push(vehicle)
                callback(result)
            }
            else{
                throw new Error('LOT IS FULL')
            }
        })
    })
}
let unpark=function(vehicle){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        return true
    }
exports.park=park
exports.unpark=unpark