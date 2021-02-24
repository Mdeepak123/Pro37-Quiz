class Question{
    constructor() {
        this.title = createElement('h1')
        this.enterName = createInput("Enter Your Name Here....");
        this.enterAnswer = createInput("Enter Correct Option No..");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
      }
    
      hide(){
        this.title.hide();
        this.enterName.hide();
        this.button.hide();
        this.enterAnswer.hide();
      }
    
      display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);
    
        this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
        this.question.position(150, 80);
        
        this.option1.html("1: Everyone " );
        this.option1.position(150, 100);

        this.option2.html("2: Envelope" );
        this.option2.position(150, 120);

        this.option3.html("3: Estimate " );
        this.option3.position(150, 140);
        
        this.option4.html("4: Example" );
        this.option4.position(150, 160);
    
        this.enterName.position(150, 230);
        this.enterAnswer.position(350, 230);
        this.button.position(290, 300);
    
        this.button.mousePressed(()=>{
          this.title.hide();
          this.enterName.hide();
          this.enterAnswer.hide();
          this.button.hide();
          contestant.name = this.enterName.value();
          contestant.answer = this.enterAnswer.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
        });
}
}