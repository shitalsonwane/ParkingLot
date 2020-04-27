class ParkingLotSystem{
    park(vehicle){
        return true
    }
    unpark(vehicle){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        return true
    }
}
module.exports=ParkingLotSystem