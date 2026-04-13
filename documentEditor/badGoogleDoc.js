const fs = require("fs");
class DocumentEditor{
    element = [];
    addText(text){
        this.element.push(text);
    }
    addImage(imagePath){
        this.element.push(imagePath);
    }
    renderDocument(){
        let ans = "";
        for(const temp of this.element){
            ans+=temp + "\n";
        }
        return ans;
    }

    save(){
        const saveContent = this.renderDocument();
        fs.writeFile("./documentEditor/temp.txt",saveContent,function(err){
            if(err){
                console.log("Error : "+err)
            }
            console.log("File written");
        })
        return "Document added";
    }
}

const file1 =  new DocumentEditor;
file1.addText("This is harsh");
file1.addImage("temp.jpg");
console.log(file1.renderDocument());
console.log(file1.save());