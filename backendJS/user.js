class User {
    #username;
    #password;
    #qrImages;
    constructor(username, password){
        this.username = username;
        this.password = password;
        var qrImages = new List([]);
    }
    get getUserName() {
        return this.username;
    }

    set changeUserName(newName){
        this.username = newName;
    }

    get getPassword() {
        return this.password;
    }

    set setPassword(newPass) {
        this.password = newPass;
    }
    deleteQr(toDelete){

    }
    addQr(toAdd){

    }
}


