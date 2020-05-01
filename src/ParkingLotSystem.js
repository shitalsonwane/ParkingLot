let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let parkingLotOwner=new ParkingLotOwner()
let parkingAirportSecurity=new ParkingAirportSecurity()
const parkingLotMaxSize=10
class ParkingLotSystem{
    constructor(){
        this.parkingSlot=[[],[],[]]
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
        for(let lot=0;lot<this.parkingSlot.length;lot++){
            for (let slot=0; slot<=this.parkingSlot[lot].length && this.parkingSlot[lot].length<=parkingLotMaxSize;slot++){
                if(this.parkingSlot[lot][slot]==vehicle){
                    console.log('VEHICLE NO '+vehicle.vehicleNo +': parking Slot No is '+(slot+1)+' in LotNo:'+(lot+1))
                    console.log('TIMEOFPARK: '+vehicle.TimeofPark)
                    delete this.parkingSlot[lot][slot]
                    parkingLotOwner.isParkingLotAvailable((lot+1),(slot+1))
                    return true
                }
            }
        }
    }
    ParkingLotFull(){
        let count=0
        for ( let lot=0; lot<=this.parkingSlot.length;lot++ ){
            if(this.parkingSlot[lot].length!=parkingLotMaxSize && this.parkingSlot.length>count){
                count++
                return false 
            }
            else{
                parkingLotOwner.isParkingLotFull()
                parkingAirportSecurity.isParkingLotFull()
                return true
            }
        }
    }
    ParkingLotAvailable(vehicle){
        for (let  lot=0; lot<=this.parkingSlot.length;lot++ ){
            for (let slot=0; slot<=this.parkingSlot[lot].length && this.parkingSlot[lot].length<=parkingLotMaxSize;slot++){
                if(this.parkingSlot[lot][slot]==undefined){
                    this.parkingSlot[lot][slot]=vehicle
                    if(this.parkingSlot[lot].length<parkingLotMaxSize){
                        this.FindEmptySlot(lot,slot)
                    }
                    else{
                        parkingLotOwner.isParkingLotFull()
                    }
                    return true
                }
            }
        }
    }
    FindEmptySlot(lot,slot){
        parkingLotOwner.isParkingLotAvailable((lot+1),(slot+2))
    }
}
module.exports=ParkingLotSystem