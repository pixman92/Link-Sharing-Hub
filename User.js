var savedIds=[];
var newAlert=false;
class UserMe{
    savedIds = [];
    constructor(email){
        this.email = email;
        // this.newAlert = false;
        // savedIds = [];
        // this.passMeArray = [];

    }       
    //=====================================
    async findingId(){
        savedIds = [];
        // var tmp0 = [];
        var tmp = db.collection('user');

        var tmp2 = tmp.where('myEmail', '==', this.email)

        await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            console.log(doc)
            await whereIds.push(doc.id);
            // await savedIds.push(doc.id);
            savedIds[0] = whereIds[0];
        })); 

        console.log(savedIds);

        savedIds;
        // return this.theId;

    }



    setupInbox(){  
        this.findingId();
        addDoc('user/'+whereIds[0]+'/inbox', 'recievedMessages', {});
    }
    
    setupOutbox(){
        this.findingId();
        addDoc('user/'+whereIds[0]+'/outbox', 'sentMessages', {});
    }
    
//=======================================
    sendAMessage(message, from, to){
        this.findingId();
        adding('user/'+whereIds[0]+'/inbox', {"message": message, "from": from, "date": date});
        this.alert(to);
    }


    // ================================

    set meArray(passMeArray){  
        //var tmp.meArray = <whatever>
        this.passMeArray = passMeArray;
    }
    get meArray(){
        //var tmp.meArray, defines this variable without needing global variable
        return this.passMeArray;
    }

    get newAlertme(){
        return this.newAlert;
    }

    set newAlertme(newAlert){
        this.newAlert = newAlert;
    }

    // set theId(id){
    //     this.savedIds = id;
    // }
    
    // get theId(){
    //     return this.savedIds;
    // }

    // =============================


    async makeAlertFirstTime(){
        try{
            let first = one();
            let second = two(first);
        }catch(e){
            throw e;
        }
        async function one(){
            await findingId();
        }
        function two(me){
            addDoc('user/'+this.savedIds[0]+'/alertStatus', "alert", {"alert":newAlert});
            newAlert == true ? newAlert = false : newAlert = true;
            console.log(newAlert);
        }

    }

    async getNewAlert(){
        this.findingId();
        wholeDoc=[];
        await db.collection('users/'+savedIds[0]).doc('alertMe').get().then(async (snap)=>{
            console.log(snap.data());
            await wholeDoc.push(snap.data());
        });

    }



    alertMe(){
        console.log('hey');
    }
};