window.onload = async ()=>{
    var setup = new MountMe();
    setup.make('#urlText', 'URL Buddy', "");
    setup.addClass('#urlText', 'header');


    var foot = new MountMe();
    foot.make('#footMain', '', '#urlText');             //main attachment to body
    //TODO - make button 'divs' to click => hide/show
    foot.make('#footSub', '', '#footMain');             // sub foot
    foot.addClass('#footSub', 'footer');                // add footer style
    foot.make('#footSubDivEnd', '', '#footSub');        // sub sub foot
    foot.addClass('#footSubDivEnd', 'gridFooter');      // add grid style
    foot.make('#footSub01', 'New Message', '#footSubDivEnd');   //item 1
    foot.make('#footSub02', 'Outbox', '#footSubDivEnd');        //item 2
    foot.make('#footSub03', 'Inbox', '#footSubDivEnd');         //item 3

    makeNewMessageGUI();

    
    await clickable();        //addEventListener(s) for footer



}

function makeNewMessageGUI(){
     // makes nice and neat new Container
     var cont = new MountMe();
     cont.make('#newMessagePage', '', '');
     cont.make('#container', '', "#newMessagePage");
     cont.addClass('#container', 'w3-container');
 
     var textForNewMessage = new MountMe();
     //new message Static text
     textForNewMessage.make('div', 'New Message', '#container');
     //combo ID - emcompasses 2boxes and button
     
     //first box attached from toField to Combo
     var toBox = new MountMe();
     toBox.make('#combo', '', "#container");
     textForNewMessage.make('#toField', '', '#combo');
     textForNewMessage.make('div', 'To: ', '#toField');
     textForNewMessage.make('textarea', '', '#toField');
     textForNewMessage.addClass('#toField textarea', 'toFieldClass');
     
     //second box attacked from shortArea to Combo
     textForNewMessage.make('#URL', '', "#combo");
     textForNewMessage.make('div', 'URL to share: ', '#URL')
     textForNewMessage.make('textarea', '', '#URL');
     textForNewMessage.addClass('#URL textarea', 'URL')
 
 
     textForNewMessage.make('#textForMessage', '', '#combo')
     textForNewMessage.make('div', 'Message: ', '#textForMessage')
     textForNewMessage.make('textarea', '', '#textForMessage');
     // textForNewMessage.addClass('#combo #toField textarea', 'shortTextClass')
     textForNewMessage.addClass('#combo #textForMessage textarea', 'textClass');
     textForNewMessage.make('button', 'Send', '#combo')
 
 
     // NEW MESSAGE button addEventListener
     document.querySelector('#container button').addEventListener('click', ()=>{
         //from, to, shared, text
         var from = 'sam@gmail.com'
         var to = document.querySelector('#combo #toField textarea').value;
         var shared = document.querySelector('#combo #URL textarea').value;
         var text = document.querySelector("#combo #textForMessage textarea").value;
 
 
         var myMessage = new Message(from, to, shared, text);
         myMessage.makeMessage()
     
     });

}


function makeOutboxGUI(){
    var outbox = new Outbox();
    outbox.getMessagesFromOutbox();


    

}


//========================================

function makeInboxGUI(){

}

//========================================
//TODO - Footer div addEventListener(s)
function clickable(){
    document.querySelector('#footSub01').addEventListener('click', ()=>{
        hide();
        show("newMessagePage");
    });
    document.querySelector('#footSub02').addEventListener('click', ()=>{
        hide();
        alert('inbox');
        show("inbox");
    });
    document.querySelector('#footSub03').addEventListener('click', ()=>{
        hide();
        alert('outbox');
        show("outbox");
    });
}










//========================================
// var arrayMe = ["newMessagePage", "inbox", "outbox"];
var arrayMe = ["newMessagePage"];
function hide(){
        for (var i = 0; i < arrayMe.length; i++) {
            document.getElementById(arrayMe[i]).style.display='none';
        }

}

function show(id){
    document.getElementById(id).style.display='block';
}