toPath = ""; fromPath = "";
class Message{
    // constructor(fromEmail, toEmail, text){
    //     this.fromEmail = fromEmail;
    //     this.toEmail = toEmail;
    //     this.text = text;
    //     this.date = new Date();
    // }

    // fromEmail = ""; toEmail =""; messageText= ""; date = new Date();

    makeAllPublic(fromEmail, toEmail, messageText){
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.messageText = messageText;

        this.date = new Date;
    }

    // async sendToInbox(fromEmail, toEmail,messageText){
    make(){
        messageMake(this.fromEmail, this.toEmail, this.messageText);

    }
    practice(){
        console.log(this.messageText);
        console.log(this.toEmail);
    }

}


async function messageMake(fromEmail, toEmail, messageText){


    try{
        let first = await one();
        let second = await two(first);
        let third = await three(second);

    }
    catch(e){
        throw(e);
    }

async function one(){
    console.log('to');
    console.log(toEmail);
    await whereMe('user', 'myEmail', toEmail, async()=>{
        console.log(whereIds);
        toPath = 'user/'+whereIds[0]+'/inbox';
    });
    // =========================
    console.log('from');
    console.log(fromEmail);
    await whereMe('user', 'myEmail', fromEmail, async()=>{
        console.log(whereIds);
        fromPath = 'user/'+whereIds[0]+'/outbox';
    });


}

async function two(){
    await getAll(toPath, async()=>{
        console.log('whereIds1', whereIds);
    });
}
async function three(){
    //used adding() over addDoc() - to NOT overwrite data, but add to it
    await adding(toPath, {'messageFrom': fromEmail, 'messageTo': toEmail,'messageText': messageText, 'messageDate': new Date});
    // =============================
    await adding(fromPath, {'messageFrom': fromEmail, 'messageTo': toEmail,'messageText': messageText, 'messageDate': new Date});

}}
