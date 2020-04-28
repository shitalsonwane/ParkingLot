let isParkingLotFull=function(parkingSlot,parkingLotMaxSize,callback){
    if( parkingSlot.length+1 == parkingLotMaxSize ){
        console.log('notification to vehicle owner :- parking lot is full.')
        callback(false)
    }
    callback(true)
}
exports.isParkingLotFull = isParkingLotFull