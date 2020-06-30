toPath = ""; fromPath = "";
class Message{
    constructor(fromEmail, toEmail, text){
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.text = text;
        this.date = new Date();
    }

    returnToEmail(){
        return this.toEmail;
    }
    returnFromEmail(){
        return this.fromEmail;
    }
    returnText(){
        return this.text; 
    }
    returnDate(){
        return this.date;
    }

    async run(){
        await whereMe('user', 'myEmail', this.returnToEmail(), async()=>{
            console.log(whereIds);
            toPath = 'user/'+whereIds[0]+'/inbox';
            console.log(toPath);
        });
    }


    async makeMessage(){
        // async function that makes a message, puts in Outbox & Inbox

        var toEmail = this.returnToEmail();
        var fromEmail = this.returnFromEmail();
        var text = this.returnText();
        var date = this.returnDate();



            try{
                let first = await one();
                let second = await two(first);
                let third = await three(second);
        
            }
            catch(e){
                throw(e);
            }
        
        async function one(){
            // to and from 'whereMe()' stuff
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
            await adding(toPath, {'messageFrom': fromEmail, 'messageTo': toEmail,'messageText': text, 'messageDate': date});
            // =============================
            await adding(fromPath, {'messageFrom': fromEmail, 'messageTo': toEmail,'messageText': text, 'messageDate': date});
            
            //==============================
            console.log("to: ", toEmail);
            console.log("to path ", toPath);
            console.log("From: ", fromEmail);
            console.log("from path ", fromPath);
            console.log("message: ", text);

        }
    }
        
    // }

    //================================







    practice(){
        console.log(this.messageText);
        console.log(this.toEmail);
    }

}


