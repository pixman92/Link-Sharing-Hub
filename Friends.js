//TODO - make an Array of friends
//based on emails
// add & remove


class FriendsList{
    constructor(email){
        this.email = email;
    }

    returnEmail(){
        return this.email;
    }

    setId(data){
        this.id = data;
    }

    returnId(){
        return this.id;
    }

    async getWhereId(){
        await whereMe('user', 'myEmail', this.returnEmail(), ()=>{
            this.setId(whereIds[0]);
            return 1;
        });
    }


    //========================================

    async make(){
        var email = this.returnEmail();
        whereMe('user', 'myEmail', email, ()=>{
            console.log('done');
        });
    }

    //========================================

    async run(){
        var meEmail = this.returnEmail();
        var tmp; var tmp2;

        console.log('hello');
        try{
            let first = await one();
            let second = await two(first);
            let third = await three(second);
    
        }
        catch(e){
            throw(e);
        }
        async function one(){
            whereIds=[];
            tmp = db.collection('user');

            tmp2 = tmp.where('myEmail', '==', meEmail);
        }
        async function two(){
            await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
                console.log(doc)
                await whereIds.push(doc.id);
            }));
        }
        async function three(){
            console.log(whereIds);
            console.log("done");
        }
        this.setId(whereIds);        

    }
    printIds(){
        console.log(this.returnId());
    }


    //=========================================
     trial(email){
         whereMe2('user', 'myEmail', email, ()=>{});
     }

    async addToList(userEmail, name){

        var email = this.returnEmail();


        try{
            let first = await one();
            let second = await two(first);
            // let third = await three(second);
        
        }
        catch(e){
            throw(e);
        }   

        async function one(){
            // await this.getWhereId();
            await getAll('user/'+this.returnEmail()+'/friendsList', ()=>{});
        }
        async function two(){
            await adding('user/'+whereIds+'/friendsList', {'userEmail': userEmail, 'name': name});        
        }



    }
    async removeFromList(){

        var id = this.returnId();
        var email = this.returnEmail();

        try{
            let first = await one();
            let second = await two(first);
            // let third = await three(second);
        
        }
        catch(e){
            throw(e);
        }   

        // async function one(){
            
        // }

        async function one(){
            await getAll('user/'+email+'/friendsList', ()=>{});
        }

        async function two(){
            if(getAllArr)
            for(var i=0; i<getAllArr.length; i++){
                if(toCompare==getAllArr[i].userEmail){
                    console.log('index ', i);
                }
            }

        }


    }
}

var whereIds=[];
async function whereMe2(root, first, second, callback){
    whereIds=[];
    var    tmp = db.collection(root);

    var    tmp2 = tmp.where(first, '==', second);
    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);
    
    }
    catch(e){
        throw(e);
    }   

    async function one(){
        await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            await whereIds.push(doc.id);
        }));
            
    }

    async function two(){
        console.log(doc)
        console.log(whereIds);

    }

    
    callback();



}

