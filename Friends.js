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

    }

    async addToList(userEmail, name){
        await this.getWhereId();
        await adding('user/'+this.returnId()+'/friendsList', {'userEmail': userEmail, 'name': name});        

    }
    async removeFromList(toCompare){
        await this.getWhereId();

        await getAll('user/'+this.returnId()+'/friendsList', ()=>{});

        for(var i=0; i<getAllArr.length; i++){
            if(toCompare==getAllArr[i].userEmail){
                console.log('index ', i);
            }
        }

    }
}