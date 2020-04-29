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
            let emptySlot=parkingSlot.length+1
            parkingLotOwner.isParkingLotAvailable(emptySlot)
        }
        else{
            parkingLotOwner.isParkingLotFull()
        }
        return true
    }
}
let unpark=function(vehicle){
    if (vehicle==null || vehicle==undefined){
        throw new Error('UNKNOWN VEHICLE') 
    }
    for(let i=0;i<parkingSlot.length;i++){
        if(parkingSlot[i]==vehicle){
            console.log('Your vehicle parking Slot No:'+(i+1))
            parkingSlot.pop(vehicle)
            parkingLotOwner.isParkingLotAvailable(i+1)
            return true
        }
    }
}
exports.park=park
exports.unpark=unpark