window.onload = ()=>{
    var setup = new MountMe();
    setup.make('#urlText', 'URL Buddy', "");
    setup.addClass('#urlText', 'header');


    makeNewMessageGUI();


   



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
     var toBox = new MountMe();
     //combo ID - emcompasses 2boxes and button
     
     //first box attached from toField to Combo
     toBox.make('#combo', '', "#container");
     textForNewMessage.make('#toField', '', '#combo');
     textForNewMessage.make('textarea', '', '#toField');
     textForNewMessage.addClass('#toField textarea', 'toFieldClass');
     
     //second box attacked from shortArea to Combo
     textForNewMessage.make('#URL', '', "#combo");
     textForNewMessage.make('textarea', '', '#URL');
     textForNewMessage.addClass('#URL textarea', 'URL')
 
 
     textForNewMessage.make('#textForMessage', '', '#combo')
     textForNewMessage.make('textarea', '', '#textForMessage');
     // textForNewMessage.addClass('#combo #toField textarea', 'shortTextClass')
     textForNewMessage.addClass('#combo #textForMessage textarea', 'textClass');
     textForNewMessage.make('button', 'Send', '#combo')
 
 
     // NEW MESSAGE button addEventListener
     document.querySelector('#container button').addEventListener('click', ()=>{
         //from, to, shared, text
         var from = 'sam@gmial.com'
         var to = document.querySelector('#combo #toField textarea').value;
         var shared = document.querySelector('#combo #URL textarea').value;
         var text = document.querySelector("#combo #textForMessage textarea").value;
 
 
         var myMessage = new Message(from, to, shared, text);
         myMessage.makeMessage()
     
     });

}


function makeOutboxGUI(){
    var outbox = new outbox()
}










//========================================
var arrayMe = ["newMessagePage", "inbox", "outbox"];
function hide(){
        for (var i = 0; i < arrayMe.length; i++) {
            document.getElementById(arrayMe[i]).style.display='none';
        }

}

function show(id){
    document.getElementById(id).style.display='block';
}