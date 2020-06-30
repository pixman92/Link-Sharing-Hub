


class NewUser{
    constructor(email){ 
        this.email = email;
    }

    returnEmail(){
        return this.email;
    }

    async create(){
        var email = this.returnEmail();
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
            // console.log('1');
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
            // await adding('user/'+whereIds[0]+'/inbox', {'':''});
            // await adding('user/'+whereIds[0]+'/outbox', {'':''});
    
    
        }  
    }


}