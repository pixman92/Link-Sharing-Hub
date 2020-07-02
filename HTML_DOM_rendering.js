window.onload = ()=>{
    var setup = new MountMe();
    setup.make('#urlText', 'URL Buddy', "");
    setup.addClass('#urlText', 'header');





    // makes nice and neat new Container
    var cont = new MountMe();
    cont.make('#container', '', "")
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
    
    //second box attacked from shortArea to Combo
    textForNewMessage.make('#shortArea', '', '#combo')
    textForNewMessage.make('textarea', '', '#shortArea');
    textForNewMessage.addClass('#combo #toField textarea', 'shortTextClass')
    textForNewMessage.addClass('#combo #shortArea textarea', 'textClass');
    textForNewMessage.make('button', 'Send', '#combo')

    document.querySelector('#container button').addEventListener('click', ()=>{
        alert('yay');
    });



}

function makeMessageGUI(){

}