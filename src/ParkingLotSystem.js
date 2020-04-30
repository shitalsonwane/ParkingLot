let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let parkingLotOwner=new ParkingLotOwner()
let parkingAirportSecurity=new ParkingAirportSecurity()
const parkingLotMaxSize=3
class ParkingLotSystem{
    constructor(){
        this.parkingSlot=[]
    }
    park(vehicle){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        if(this.ParkingLotFull()){
            throw new Error('LOT IS FULL')
        }
        else{
            this.ParkingLotAvailable(vehicle)
            return true
        }
    }
    unpark(vehicle){
        if (vehicle==null || vehicle==undefined){
            throw new Error('UNKNOWN VEHICLE') 
        }
        for(let i=0;i<this.parkingSlot.length;i++){
            if(this.parkingSlot[i]==vehicle){
                console.log('VEHICLE NO '+vehicle.vehicleNo +': parking Slot No is '+(i+1))
                console.log('TIMEOFPARK: '+vehicle.TimeofPark)
                this.parkingSlot.pop(vehicle)
                parkingLotOwner.isParkingLotAvailable((i+1))
                return true
            }
        }
    }
    ParkingLotFull(){
        if(this.parkingSlot.length==parkingLotMaxSize){
            parkingLotOwner.isParkingLotFull()
            parkingAirportSecurity.isParkingLotFull()
            return true
        }
        return false
    }
    ParkingLotAvailable(vehicle){
        this.parkingSlot.push(vehicle)
        if(this.parkingSlot.length<parkingLotMaxSize){
            this.FindEmptySlot()
        }
        else{
            parkingLotOwner.isParkingLotFull()
        }
        return true
    }
    FindEmptySlot(){
        let emptySlot=this.parkingSlot.length+1
        parkingLotOwner.isParkingLotAvailable(emptySlot)
    }
}
module.exports=ParkingLotSystem