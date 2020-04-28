let parkingLotOwner=require('../src/ParkingLotOwner')
let park=function(parkingSlot,parkingLotMaxSize,vehicle,callback){
    parkingLotOwner.isParkingLotFull(parkingSlot,parkingLotMaxSize,function(result){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        if(result==true){
            parkingSlot.push(vehicle)
            callback(result)
        }
        else{
            throw new Error('LOT IS FULL')
        }
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