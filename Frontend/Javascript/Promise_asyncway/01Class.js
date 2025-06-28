//In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

class Rectangle{
        constructor( width , height , color){
               this.width= width;
               this.height=height;
               this.color=color;
        }
    
        area(){
              const area = this.width* this.height;
              return area;
        }

        print(){
              console.log(`painting with color ${ this.color}`);
        }
}

const rect = new Rectangle(2,4 ,"blue") // instance of the rectangle class , object of the rectangle class>>>>>> 
const area = rect.area();
rect.print();
console.log(area);

