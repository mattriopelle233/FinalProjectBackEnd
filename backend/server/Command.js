import factoryQr from "./FactoryQr";
import deleteQRCode from "./endpoints/deleteQRCode";
import getQRCodesByUser from "./endpoints/getQRCodesByUser";
import updateQRCodeName from "./endpoints/updateQRCodeName";
import Observer from "./Observer";
class Command {
    constructor(){
        if (this.constructor == Command){
            throw new error("Abstract classes can't be instantiated.");
        }
    }

        execute(ooption, input, app){
            throw new error("Execute must be called through subclasses");
        }
}

class ConcreteCommand extends Command {
    //option is command to be executed, input is user input
    execute(option, input, app){
        //create qr using input as type
        if(option == "create"){
            factoryQr(app, input);
            var observer = new Observer();
            var handler = function (item){
                console.log("QrCreated: " + item);
            };
            observer.subscribe(handler);
            observer.updateSubscribers('created qr: ');
        }
        //getqrbyusername
        else if(option == "getQr"){
            getQRCodesByUser(app);
            var observer = new Observer();
            var handler = function (item){
                console.log("QrFetched: " + item);
            };
            observer.subscribe(handler);
            observer.updateSubscribers('fetched qr: ');
        }
        //deleteQr
        else if(option == "delete"){
            deleteQRCode(app);
            var observer = new Observer();
            var handler = function (item){
                console.log("QrDeleted: " + item);
            };
            observer.subscribe(handler);
            observer.updateSubscribers('deleted qr: ');
        }
        //updateQr
        else if(option == "update"){
            updateQRCodeName(app);
            var observer = new Observer();
            var handler = function (item){
                console.log("QrUpdated: " + item);
            };
            observer.subscribe(handler);
            observer.updateSubscribers('updated qr: ')
        }
        else{
            throw new error("Option doesn't match delete, update, create, or getQr");
        }
    }
}
