let ParkingLotOwner=require('../src/ParkingLotOwner')
let ParkingAirportSecurity=require('../src/ParkingAirportSecurity')
let parkingLotOwner=new ParkingLotOwner()
let parkingAirportSecurity=new ParkingAirportSecurity()
const parkingLotMaxSize=3
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
        for (let slot=0; slot<=parkingLotMaxSize;slot++){
            for(let lot=0;lot<this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]==vehicle){
                    delete this.parkingSlot[slot][lot]
                    parkingLotOwner.isParkingLotAvailable()
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
        if(vehicle.Driver=='Handicap'){
            this.fineNearestSlotHandicap(vehicle)
        }
        else if(vehicle.VehicleType=='Large'){
            this.largeVehicleParking(vehicle)
        }
        else {
            this.checkForParkingSlot(vehicle)
        }
    }
    checkForParkingSlot(vehicle){
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for (let lot=0; lot<=(this.parkingSlot.length);lot++ ){
                if(this.parkingSlot[slot][lot]==null){
                    this.parkingSlot[slot][lot]=vehicle
                    return true
                }
            }
        }
    }
    fineNearestSlotHandicap(vehicle){
        for (let slot=0; slot<=(parkingLotMaxSize/2);slot++){
            for (let lot=0; lot<=this.parkingSlot.length;lot++ ){
                if(this.parkingSlot[slot][lot]==null){
                    this.parkingSlot[slot][lot]=vehicle
                    return true
                }
            }
        }
        throw new Error('COULD NOT FIND THE NEAREST SPACE') 
    }
    largeVehicleParking(vehicle){
        let slot=this.highestNumberFreeSpace()
        for (let lot=0; lot<this.parkingSlot.length;lot++ ){
            if(this.parkingSlot[slot][lot]==null){
                this.parkingSlot[slot][lot]=vehicle
                return true
            }
        }
        throw new Error('COULD NOT FIND HIGHEST NO OF FREE SPACE IN ANY LOT')  
    }
    highestNumberFreeSpace(){
        let FreeSpaceLot=0
        for (let lot=0; lot<this.parkingSlot.length;lot++ ){
            if(((this.parkingSlot[lot].length)-parkingLotMaxSize) < FreeSpaceLot){
                FreeSpaceLot=lot
            }
        }
        return FreeSpaceLot
    }
    SearchVehicle(search){
        let SearchVehicles = []
        let keys = Object.keys(search)
        let values = Object.values(search)
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for(let lot=0;lot<this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]!=null){
                    if(this.parkingSlot[slot][lot][keys[slot]] == values[slot] &&
                        this.parkingSlot[slot][lot][keys[slot + 1]] == values[slot + 1]){
                        let information={LOT:(lot+1),SLOT:(slot+1)}
                        SearchVehicles.push(information)
                    }
                }
            }
        }
        return new Promise(function(reslove,reject){
            if(SearchVehicles.length>=1){
                reslove(true)
            }
            else{
                reject('COULD NOT FIND VEHICLE WITH GIVEN SEARCH OBJECT')
            }
        })
    }
    findParkedCarsWithLastMin(currenttime,Time) {
        let VehicleswithTime=[]
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for(let lot=0;lot<this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]!=null){
                    let checkVehicle=this.parkingSlot[slot][lot]
                    let ParkTime=checkVehicle.TimeofPark.Hours*60+checkVehicle.TimeofPark.Min
                    let Checktime=currenttime.Hours*60+currenttime.Min
                    var Difference=ParkTime-Checktime
                    if(Difference <= Time){
                        let information={LOT:(lot+1),SLOT:(slot+1)}
                        VehicleswithTime.push(information)
                    }
                }
            }
        }
        return new Promise(function(reslove,reject){
            if(VehicleswithTime.length>=1){
                reslove(true)
            }
            else{
                reject('COULD NOT FIND VEHICLE IN GIVEN TIME')
            }
        }) 
    }
    currentTime(){
        let hours=new Date().getHours()
        let min=new Date().getMinutes()
        let currenttime={Hours:hours,Min:min}
        return currenttime
    }
}
module.exports=ParkingLotSystem