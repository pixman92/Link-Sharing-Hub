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
        });
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