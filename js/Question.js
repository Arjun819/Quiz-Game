class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Correct Option No")



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.Question.html("Question:- Which country is known as the 'land of the rising sun'?")
    this.Question.position(100,60)

    this.option1.html("1: United States of America")
    this.option1.position(100,90)

    this.option2.html("2: Germany")
    this.option2.position(100,110)

    this.option3.html("3: Japan")
    this.option3.position(100,130)

    this.option4.html("4: India")
    this.option4.position(100,150)

    this.input1.position(100, 230);
    
    this.button.position(200, 280);
    this.input2.position(300,230)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
this.message.html("Thanks for attempting the quiz!")
this.message.position(300,325)
    })


  }
}
