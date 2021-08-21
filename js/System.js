class System{
        constructor() {
          this.input1 = createInput("Answer");
          this.input2 = createInput("Answer");
          this.input3 = createInput("Answer");
          this.button = createButton('Submit');
          this.button2 = createButton('Submit');
          this.button3= createButton('Submit');
          this.question = createElement('h1');
          this.question2 = createElement('h1');
          this.question3 = createElement('h1');
          this.clue = createElement('h2');
          this.clue2 = createElement('h2');
          this.clue3 = createElement('h2');

        }
      
        hide(){
          this.input1.hide();
          this.input2.hide();
          this.input3.hide();
          this.button.hide();
          this.button2.hide();
          this.button3.hide();
          this.input2.hide();
          this.question.hide();
          this.question2.hide();
          this.question3.hide();
          this.clue.hide();
          this.clue2.hide();
          this.clue3.hide();

        }
       position(){
        this.question.position(130, 1200);
        this.question2.position(130, 1200);
        this.question3.position(130, 1200);
        this.input1.position(130, 1200);
        this.input2.position(130, 1200);
        this.input3.position(130, 1200);
        this.button.position(130, 1200);
        this.button2.position(130, 1200);
        this.button3.position(130, 1200);
        this.input2.position(130, 1200);
        this.clue.position(130,1200);
        this.clue2.position(130, 1200);
        this.clue3.position(130, 1200);
        }
      
        display(){
          this.question.html("R E V B A I L A" );
          this.question.position(220, 220);
         /* this.question.style('width', '200px');
          this.question.style('height', '20px');*/
          this.question.style('color', 'white');
          this.input1.position(220, 370);
          this.input1.style('width', '200px');
          this.input1.style('height', '20px');
          this.button.position(290, 420);
          this.clue.html("Hint : Always changing,not constant." );
          this.clue.position(220, 270);
          this.clue.style('color', 'white');

          this.question2.html("A T E D A S B A" );
          this.question2.position(1050, 220);
         /* this.question.style('width', '200px');
          this.question.style('height', '20px');*/
          this.question2.style('color', 'white');
          this.input2.position(1050, 370);
          this.input2.style('width', '200px');
          this.input2.style('height', '20px');
          this.button2.position(1140, 420);
          this.clue2.html("Hint : Stores all information." );
          this.clue2.position(1050, 270);
          this.clue2.style('color', 'white');


          this.question3.html("C U T N I F O N" );
          this.question3.position(650,430);
          /*this.question.style('width', '200px');
          this.question.style('height', '20px');*/
          this.question3.style('color', 'white');
          this.input3.position(650, 580);
          this.input3.style('width', '200px');
          this.input3.style('height', '20px');
          this.button3.position(730, 630);
          this.clue3.html("Hint : Performs a particular tasks." );
          this.clue3.position(650, 480);
          this.clue3.style('color', 'white');

          /*this.option3.html("C: Nile" );
          this.option3.position(150,400);
          this.question.style('width', '200px');
          this.question.style('height', '20px');
          this.title.style('background', 'lavender');

          this.option4.html("D: Yamuna River" );
          this.option4.position(550, 400);
          this.question.style('width', '200px');
          this.question.style('height', '20px');
          this.title.style('background', 'lavender');*/
      





          /*
          this.question.style('width', '200px');
          this.question.style('height', '20px');*/

          this.button.mousePressed(()=>{
            this.input1.hide();
            this.button.hide();
            ans1=this.input1.value();
            sc1=1
            if((ans1==="Variable")||(ans1==="variable")||(ans1==="VARIABLE"))
            {
                score=score+1
            }
          });

          this.button2.mousePressed(()=>{
            this.input2.hide();
            this.button2.hide();
            ans2=this.input2.value();
            sc2=1
            if((ans2==="Database")||(ans2==="database")||(ans2==="DATABASE"))
            {
                score=score+1
            }
          });

          this.button3.mousePressed(()=>{
            this.input3.hide();
            this.button3.hide();
            ans3=this.input3.value();
            sc3=1
            if((ans3==="Function")||(ans3==="function")||(ans3==="FUNCTION"))
            {
                score=score+1
            }
          });

          if(sc1===1)
          {
            textSize(30);
            fill("white")
            text("Your ans: "+ans1,120,330);
          }
          
          if(sc2===1)
          {
            textSize(30);
            fill("white")
            text("Your ans: "+ans2,950,330);
          }
          
          if(sc3===1)
          {
          textSize(30);
          fill("white")
          text("Your ans: "+ans3,550,530);
          }

        }
       


}