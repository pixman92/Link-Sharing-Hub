//TODO - pull messages from outbox

class Outbox{
    constructor(email, howFarBack){
        this.email = email;
        this.howFarBack = howFarBack;
        this.outbox = [];
    }


    returnEmail(){
        return this.email;
    }

    returnHowFarBack(){
        return this.howFarBack;
    }

    setOutbox(data){
        this.outbox = data;
    }


    async getMessagesFromOutbox(){
        //fecthing all inbox entries
        //pushed into 'getAllArr'[]
        var paths = [];
        await whereMe('user', 'myEmail', this.returnEmail(), async()=>{
            console.log(whereIds);
            toPath = 'user/'+whereIds[0]+'/outbox';
        });

        await getAll(toPath, async()=>{
            console.log("ids", whereIds);    
            for(var i=0; i<getAllId.length; i++){
                paths.push(toPath+'/'+getAllId[i]);
            }
            console.log(paths);
            this.setOutbox(getAllArr);        //pushes saved Inbox data to a variable tied to this Obj{}
        });

        await console.log(getAllArr);
        // console.log(this.currentInbox);
    }


}