class Message{
    toPath = ""; fromPath = "";
    constructor(fromEmail, toEmail, text){
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.text = text;
        this.date = new Date();
    }

    async addToInbox(){
        await whereMe('user', 'myEmail', this.toEmail, ()=>{
            console.log(whereIds);
            this.toPath = 'user/'+whereIds[0]+'/inbox';

            addDoc(this.toPath, whereIds, {'messageFrom': this.messageFrom, 'messageTo': this.thimessageTo,'messageText': this.messageText, 'messageDate': this.date});


        });
    }
}

