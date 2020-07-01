function adding(root, data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection(root).add(data);

}

function addDoc(root, docMe, data){
    //function to push updated data up to firebase
    db.collection(root).doc(docMe).set(data, {merge: true});
}

var wholeDoc=[];
var allPathsReturnred=[];
async function getting(main, docMe, callback){
    //pulls either ood/even fields stored in Path
    wholeDoc=[];
    await db.collection(main).doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeDoc.push(snap.data());
    });

    await db.collection(main).doc(docMe).get().then(async (doc)=>{
        console.log(doc.id);
        await allPathsReturnred.push(doc.id);   
    });

    console.log('wholeDoc: ', wholeDoc);
    console.log('allPathsReturnred: ', allPathsReturnred);

    // path = main + '/' + docMe +

    callback();

}

var getAllArr=[]; var getAllId=[]; var bigPATH="";
async function getAll(root, callback){
    getAllArr=[]; getAllId=[];
    //gets all the fields in the Path
    await db.collection(root).get().then(async (snap)=>snap.forEach(async(doc)=>{
        await getAllId.push(doc.id);
        await getAllArr.push(doc.data());
        // console.log('getAllArr', getAllArr);
        // console.log('getAllId', getAllId);
        console.log(doc.id, '===>', doc.data());

    }));

    if(getAllId){
        bigPATH = root;
    }




    callback();
}

//=============================================
//where function stuff
var whereIds=[];
async function whereMe(root, first, second, callback){
    whereIds=[];
    tmp = db.collection(root);

    tmp2 = tmp.where(first, '==', second)

    z
    console.log(whereIds);
    
    callback();



}
//========================================
function secsToDate(seconds) {
    //function takes seconds from doc.data()
    //converts to a whole date String
    var newD = new Date(1970, 0, 1);

    newD.setSeconds(seconds);

    return newD;
}
