// TODO functions to add sent messages here


class Sent{
    // TODO - pull all Sent Messages from logged in user

    constructor(email){
        this.email = email;
        this.arrayOfOutbox = [];

    }

    returnEmail(){
        return this.email;
    }

    setArrayOfOutbox(data){
        this.setArrayOfOutbox = data;
    }

    async getOutbox(){
        var paths = [];
        await whereMe('user', 'myEmail', this.returnEmail(), async()=>{
            console.log(whereIds);
            toPath = 'user/'+whereIds[0]+'/outbox';
        });

        await getAll(toPath, async()=>{
            console.log("ids",whereIds);
            for(var i=0; i<getAllId.length; i++){
                paths.push(toPath+'/'+getAllId[i]);
            }
            console.log(paths);
            console.log(getAllArr);
            this.setArrayOfOutbox(getAllArr);   //pushes saved Outbox data to an Obj{}
        });
        
    }

}