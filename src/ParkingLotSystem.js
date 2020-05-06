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
        throw new Error('COULD NOT FIND THE SPACE')  
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
    FindEmptySlot(lot){
        if(this.parkingSlot[lot].length<parkingLotMaxSize){
        parkingLotOwner.isParkingLotAvailable()
        }
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
            if(((this.parkingSlot[lot].length)-parkingLotMaxSize) > FreeSpaceLot){
                FreeSpaceLot=lot
            }
        }
        return FreeSpaceLot
    }
    findByColor(color){
        let VehicleswithColors=[]
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for(let lot=0;lot<this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]!=null){
                    let checkVehicle=this.parkingSlot[slot][lot]
                    if(checkVehicle.VehicleColor==color){
                        let information={LOT:(lot+1),SLOT:(slot+1)}
                        VehicleswithColors.push(information)
                    }
                }
            }
        }
        return new Promise(function(reslove,reject){
            if(VehicleswithColors.length>=1){
                reslove(true)
            }
            else{
                reject('COULD NOT FIND VEHICLE WITH GIVEN COLOR')
            }
        })
    }
    findByCompanyNameandColor(companyName,color){
        let CompanynamewithcolorData=[]
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for(let lot=0;lot<this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]!=null){
                    let checkVehicle=this.parkingSlot[slot][lot]
                    if(checkVehicle.VehicleColor==color && checkVehicle.VehicleCompany==companyName){
                        let information={LOT:(lot+1),SLOT:(slot+1),VEHICLENO:checkVehicle.VehicleNo}
                        CompanynamewithcolorData.push(information)
                    }
                }
            }
        }
        return new Promise(function(reslove,reject){
            if(CompanynamewithcolorData.length>=1){
                reslove(true)
            }
            else{
                reject('COULD NOT FIND VEHICLE WITH GIVEN COMPANY AND COLOR')
            }
        })
    }
    findByCompany(Company){
        let VehicleswithCompany=[]
        for (let slot=0; slot<parkingLotMaxSize;slot++){
            for(let lot=0;lot<=this.parkingSlot.length;lot++){
                if(this.parkingSlot[slot][lot]!=null){
                    let checkVehicle=this.parkingSlot[slot][lot]
                    if(checkVehicle.VehicleCompany==Company){
                        let information={LOT:(lot+1),SLOT:(slot+1)}
                        VehicleswithCompany.push(information)
                    }
                }
            }
        }
        return new Promise(function(reslove,reject){
            if(VehicleswithCompany.length>=1){
                reslove(true)
            }
            else{
                reject('COULD NOT FIND VEHICLE WITH GIVEN COMPANY')
            }
        })  
    }
}
module.exports=ParkingLotSystem