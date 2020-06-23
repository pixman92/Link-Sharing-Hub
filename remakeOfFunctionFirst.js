
//functions - for New User & Update user

async function newUser(email){

    whereIds=[];

    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
        // let fourth = await fourth(third);
    }catch(e){
        throw e;
    }

    async function one(){
    //    await adding('user', {"myEmail":email});
        console.log('1');
        await db.collection('user').add({"myEmail": email});

    }
    async function two(tmp){
        await whereMe('user', "myEmail", email, async()=>{
        });
            // await three();
    }
    async function three(){
        console.log('id', whereIds);
        console.log("I ran");
        await adding('user/'+whereIds[0]+'/alertStatus', {"alert":newAlert});
        await adding('user/'+whereIds[0]+'/inbox', {'recievedMessages':''});
        await adding('user/'+whereIds[0]+'/outbox', {'sentMessages':''});


    }
}


//===============================
function updateInbox(){

}

function updateOutbox(){

}

var newAlert = false;
async function updateAlert(email){
    whereIds=[];
    getAllArr = [];
    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
    }catch(e){
        throw e;
    }

    async function one(){
       await adding('user', {"myEmail":email});

    }
    async function two(tmp){
        await whereMe('user', "myEmail", email, async()=>{
            console.log(whereIds);  
            // await three();
        })
    }
    async function three(){
        // newAlert == true ? newAlert = false : newAlert = true;
        // await addDoc('user/'+whereIds[0]+'/alertStatus',  {'alert': newAlert});
        await getting('user/'+whereIds[0]+'/alertStatus/', ()=>{
            console.log(getAllArr);
        });
    
    }
    async function four(){
        await addDoc('user'+)
    }
}