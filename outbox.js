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

    sortMe(){
        //sorts array of all returned outbox items
        var sorted = getAllArr.sort((a, b)=>{
            if(a.messageTo < b.messageTo) {return -1;}
            if(a.messageTo > b.messageTo) {return 1;}
            return 0 ;
        }); 
        console.log('sorted', sorted);
    }

}