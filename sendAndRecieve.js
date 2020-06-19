// functions for sharing and recieving link Objs{}

class Message{
    constructor(text, from, to){
        this.text = text;
        this.from = from;
        this.to = to;
        this.date = new Date();
    }

    read(){
        console.log(this.text);
        return this.text;
    }
    postage(){
        console.log("to: ", this.to);
        console.log("from: ", this.from);
    }

}

// function send