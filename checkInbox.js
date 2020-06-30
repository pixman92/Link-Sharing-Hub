// TODO: check for new Inbox items



// TODO send a message | add it to outbox | add it user's inbox
class Inbox{
    constructor(email){
        this.email = email;
        this.currentInbox = [];
    }
    returnEmail(){
        return this.email;
    }
    setCurrentInbox(data){
        this.currentInbox = data;
    }


    async fetch(){    
        //fecthing all inbox entries
        //pushed into 'getAllArr'[]
        var paths = [];
        await whereMe('user', 'myEmail', this.returnEmail(), async()=>{
            console.log(whereIds);
            toPath = 'user/'+whereIds[0]+'/inbox';
        });

        await getAll(toPath, async()=>{
            console.log("ids",whereIds);    
            for(var i=0; i<getAllId.length; i++){
                paths.push(toPath+'/'+getAllId[i]);
            }
            console.log(paths);
            this.setCurrentInbox(getAllArr);        //pushes saved Inbox data to a variable tied to this Obj{}
        });
        
        
    
    }

    isThereSomethingNew(){
        // TODO - is there anything new in inbox?
    }

    // pullAllMessages(){

    // }


}
