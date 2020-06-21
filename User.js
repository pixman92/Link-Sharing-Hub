class UserMe{
    constructor(email){
        this.email = email;
        this.newAlert = false;;
    }

    setupInbox(){
        whereMe('user', 'myEmail', this.email, ()=>{
            addDoc('user/'+whereIds[0]+'/inbox', 'recievedMessages', {});
        });
    }
    
    setupOutbox(){
        whereMe('user', 'myEmail', this.email, ()=>{
            addDoc('user/'+whereIds[0]+'/outbox', 'sentMessages', {});
        });
    }
    
//=======================================
    sendAMessage(message, from, to){
        whereMe('user', 'myEmail', to, ()=>{
            adding('user/'+whereIds[0]+'/inbox', {"message": message, "from": from, "date": date});
            this.alert(to);
      });
    }

    async makeNoise(second){
        //  whereMe('user', 'myEmail', alertThem, ()=>{
        // });

        var tmp = db.collection('user');

        var tmp2 = tmp.where('myEmail', '==', second)

        await tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            console.log(doc)
            await whereIds.push(doc.id);
        }));
        addDoc('user/'+whereIds[0]+'/alertMe', 'alertMe', {"alert": this.newAlert});
        this.newAlert == true ? this.newAlert = false : this.newAlert = true;
        console.log(this.newAlert);
    }

    alertMe(){
        console.log('hey');
    }
};