let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let parkingLotOwner=new ParkingLotOwner()
let parkingAirportSecurity=new ParkingAirportSecurity()
let park=function(parkingSlot,parkingLotMaxSize,vehicle){
    if (vehicle==null || vehicle==undefined){
        throw new Error('UNKNOWN VEHICLE') 
    }
    if(ParkingLotFull(parkingSlot,parkingLotMaxSize)){
        throw new Error('LOT IS FULL')
    }
    else{
        ParkingLotAvailable(vehicle,parkingSlot,parkingLotMaxSize)
        return true
    }
}
let unpark=function(vehicle){
    if (vehicle==null || vehicle==undefined){
        throw new Error('UNKNOWN VEHICLE') 
    }
    for(let i=0;i<parkingSlot.length;i++){
        if(parkingSlot[i]==vehicle){
            console.log('VEHICLE NO '+vehicle.vehicleNo +': parking Slot No is '+(i+1))
            console.log('TIMEOFPARK: '+vehicle.TimeofPark)
            parkingSlot.pop(vehicle)
            parkingLotOwner.isParkingLotAvailable(i+1)
            return true
        }
    }
}
let ParkingLotFull=function(parkingSlot,parkingLotMaxSize){
    if(parkingSlot.length==parkingLotMaxSize){
        parkingLotOwner.isParkingLotFull()
        parkingAirportSecurity.isParkingLotFull()
        return true
    }
    return false
}
let ParkingLotAvailable=function(vehicle,parkingSlot,parkingLotMaxSize){
    parkingSlot.push(vehicle)
    if(parkingSlot.length<parkingLotMaxSize){
        FindEmptySlot(parkingSlot)
    }
    else{
        parkingLotOwner.isParkingLotFull()
    }
    return true
}
let FindEmptySlot=function(parkingSlot){
    let emptySlot=parkingSlot.length+1
    parkingLotOwner.isParkingLotAvailable(emptySlot)
}
exports.park=park
exports.unpark=unpark