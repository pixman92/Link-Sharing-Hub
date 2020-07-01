class Inbox{
    // pulls all Inbox data
    // switches Alert on/off
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

        console.log(this.currentInbox);
        
        
    
    }

    async changeStatus(status){
        

    }
    
    async pullStatus(){
        //pulls status of 'new in inbox'?
        var email = this.returnEmail();
        await whereMe('user', 'myEmail', email, async()=>{
            console.log(whereIds);
            toPath = 'user/'+whereIds[0]+'/alertStatus';
        });
        await getAll(toPath, async()=>{
            console.log('whereIds1', whereIds);
            //get all results in array
            console.log(getAllArr);
        });
    }



}



//=================================
// function for change AlERT Status
// TODO
// changes read status of inbox
async function changeStatus(email, status){
        // var newAlert = false;
        // var email = this.returnEmail();
        try{
            let first = await one();
            let second = await two(first, status);
        }catch(e){
            throw e;
        }
        async function one(){
            await whereMe('user', 'myEmail', email, ()=>{});
        }
        async function two(tmp, status){
            // newAlert == true ? newAlert = false : newAlert = true;
            // if(status==true){
            //     newAlert = true;
            // }else{
            //     newAlert = false;
            // }

            newAlert = status;
            await addDoc('user/'+whereIds[0]+'/alertStatus', "alert", {"alert":newAlert});
            console.log(newAlert);
        }
    }