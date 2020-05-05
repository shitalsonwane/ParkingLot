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
        for(let lot=0;lot<this.parkingSlot.length;lot++){
            for (let slot=0; slot<=this.parkingSlot[lot].length && this.parkingSlot[lot].length<=parkingLotMaxSize;slot++){
                if(this.parkingSlot[lot][slot]==vehicle){
                    delete this.parkingSlot[lot][slot]
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
        for (let  lot=0; lot<=(this.parkingSlot.length);lot++ ){
            for (let slot=0; slot<=parkingLotMaxSize;slot++){
                if(this.parkingSlot[lot][slot]==null){
                    this.parkingSlot[lot][slot]=vehicle
                    return true
                }
            }
        }
        throw new Error('COULD NOT FIND THE SPACE')  
    }
    fineNearestSlotHandicap(vehicle){
        for (let  lot=0; lot<=this.parkingSlot.length;lot++ ){
            for (let slot=0; slot<=(parkingLotMaxSize/2);slot++){
                if(this.parkingSlot[lot][slot]==null){
                    this.parkingSlot[lot][slot]=vehicle
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
        let lot=this.highestNumberFreeSpace()
        for (let slot=0; slot<=parkingLotMaxSize;slot++){
            if(this.parkingSlot[lot][slot]==null){
                this.parkingSlot[lot][slot]=vehicle
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
        for(let lot=0;lot<this.parkingSlot.length;lot++){
            for (let slot=0; slot<=this.parkingSlot[lot].length;slot++){
                if(this.parkingSlot[lot][slot]!=null){
                    let checkVehicle=this.parkingSlot[lot][slot]
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
        for(let lot=0;lot<this.parkingSlot.length;lot++){
            for (let slot=0; slot<=this.parkingSlot[lot].length;slot++){
                if(this.parkingSlot[lot][slot]!=null){
                    let checkVehicle=this.parkingSlot[lot][slot]
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
        for(let lot=0;lot<this.parkingSlot.length;lot++){
            for (let slot=0; slot<=this.parkingSlot[lot].length;slot++){
                if(this.parkingSlot[lot][slot]!=null){
                    let checkVehicle=this.parkingSlot[lot][slot]
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