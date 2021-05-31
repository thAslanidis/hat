const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class field {
    constructor(height,width,percentage){
        
        this.height=height;
        this.width=width;
        this.percentage=percentage;
        this.map=[];
    }
    
    get maps(){
        return this.map;
    };
    set maps(a){
        this.map = a;
    };

    print(){
        let i=0
        for(i=0;i < this.map[0].length ;i++){
            console.log(this.map[i].join(' '));
        }
    }
    generateField(){
        let HatY=0;
        let HatX=0;
        do{
        HatY=Math.floor(Math.random() * this.width);
        HatX=Math.floor(Math.random() * this.height);
        }while(HatY==0 && HatX==0);

        for (let i=0 ;i<this.height ; i++)
        {
            for (let j=0; i<this.width ; j++){                
            
                let a= Math.floor(Math.random() * 100)
                    if (a<this.percentage && this.map[i][j] !='^' ) {
                    this.map[i][j]='O';
                }
                else if(this.map[i][j] !='^'){
                    this.map[i][j]='░';
                }
            }
        }
    }
}
let myField = new field(8,8,20);
  positionX=0;
  positionY=0;
  myField.generateField();
  while(true) {
   myField.print();
   
   let trela = myField.maps;

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