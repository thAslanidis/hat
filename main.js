const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class field {
    constructor(map){
        this.map=map;        
    }
    print(){
        let i=0
        for(i=0;i < this.map[0].length ;i++){
            console.log(this.map[i].join(' '));
        }
    }
    get maps(){
        return this.map;
    };
    set maps(a){
        this.map = a;
    };
}
let myField = new field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  positionX=0;
  positionY=0;
  
  while(true) {
   myField.print();
   
   let trela=myField.maps;

    const direc = prompt("What direction you will take ? r=right l=left d=down u=up :");
    

    if (direc === "r"){
        positionX += 1;        
    }else if(direc === "l"){
        positionX += -1; 
    }else if(direc === "d"){
        positionY +=1;
    }else if(direc === "u"){
        positionY += -1;
    }

    if (positionY>=trela.length || positionY<0 ||positionX>=trela[0].length ||positionX<0 ){
        console.log("end of game you are out of the field ");
        break;
    }
    if (trela[positionY][positionX]===hole){
        console.log("end of game you are in a hole ");
        break;
    }
    if (trela[positionY][positionX]===hat){
        console.log("You win ! the hat has been found");
        break;
    }
    
    trela[positionY][positionX]=pathCharacter;
    
    myField.maps=trela;
  }