const fs  = require("fs");

class DocumentElement{
    render(){
        throw new Error("Not implemented");
    }
}

class TextElement extends DocumentElement{
    #text;
    constructor(text){
        super();
        this.#text = text;
    }
    
    render(){
        return  this.#text;
    }
}

class ImageElement extends DocumentElement{
    #imagePath;
    constructor(imagePath){
        super();
        this.#imagePath = imagePath;
    }

    render(){
        return "[Image : " + this.#imagePath + "]";
    }
}

class NewLine extends DocumentElement{
    render(){
        return "\n";
    }
}

class TabSpaceElement extends DocumentElement{
    render(){
        return "\t";
    }
}

class Document{
    #element = [];
    addElement(element){
        this.#element.push(element);
    }

    render(){
        let result = "";
        for(const temp of this.#element){
            result+=temp.render();
        }
        return result;
    }

}


class Persistence{
    save(){
        throw new Error("Not implemented");
    }
}

class FileSave extends Persistence{
    save(data){
        fs.writeFileSync("documentEditor/tempGood.txt",data,function(err){
            if(err){
                throw new Error(err);
            }

            return "File saved to /documentEditor/tempGood.txt"
        })
    }
}

class DbSave extends Persistence{
    save(data){
        return "Saved to Db";
    }
}


class DocumentEditor{
    #document;
    #peristance;
    renderedDocument;

    constructor(document ,db){
        this.#document = document;
        this.#peristance = db;
        this.renderedDocument = "";
    }

    addText(text){
        this.#document.addElement(new TextElement(text));
    }
    addNewLine(){
        this.#document.addElement(new NewLine());
    }
    addImage(imagePath){
        this.#document.addElement(new ImageElement(imagePath));
    }
    addTab(){
        this.#document.addElement(new TabSpaceElement());
    }

    renderDocument(){
        this.renderedDocument = this.#document.render();
        return this.renderedDocument;
    }

    saveDocument(){
        this.#peristance.save(this.renderedDocument);
    }
}

const document = new Document();
const persistace = new FileSave();

const editor = new DocumentEditor(document , persistace,"");
editor.addText("Hi , I am Harsh");
editor.addNewLine();
editor.addText("I am a b.tech student and my stream is Computer science and Engineering");
editor.addImage("Image.png");
editor.renderDocument();
editor.saveDocument();