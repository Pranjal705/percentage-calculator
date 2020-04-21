//var name = "Pranjal";
//var age = 20;
//var message = "Hi " + name + ". " + "You are " + age + ' years old.';
//console.log(message);

//var sum = 15 + 10;
//var sub = 15 - 10;
//var mul = 10 * 15;
//var div = 10 / 3;
//var mod = 10 % 3;
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//console.log(msg);
//
//var myAccountBalance = 300;
//var nikeShoes = 788.78;
//var coupon = 500;
//if(myAccountBalance >= nikeShoes)
//    {
//        myAccountBalance -= nikeShoes;
//        var msg = "We just bought a dope shoes.";
//        console.log(msg);
//    }
//else if(myAccountBalance >= nikeShoes-coupon)
//    {
//        console.log("We just bought a dope shoes.");
//    }
//else
//{
// console.log("Not enough money.");
//}

//var val1 = 23;
//var val2 = "23";
//if (val1===val2){
//    console.log("These are the same.");
//}
//else
//    {
//        console.log("one is different from other.");
//    }

//var studentNames = ["Harry","Raquel","Rio"];
//var naughtyStudents = [];
//naughtyStudents.push(studentNames[0]);
//console.log(studentNames);
//console.log(naughtyStudents);
//var index = naughtyStudents.indexOf("Harry");
//console.log(index);
//if (index > -1)
//    {
//    naughtyStudents.splice(index,1);    
//    }
//
//console.log(naughtyStudents);


//var friendNames = ["Shaswat","Adarsha","Gorilla","Deepak","Sunny"];
//for (var i=0; i<friendNames.length ; i++)
//    {
//        console.log(friendNames[i]);
//    }


/*
function rectangleAreas(length,breadth)
{
 return length*breadth;   
}

var rectangles =[];

rectangles.push(rectangleAreas(10,15));
rectangles.push(rectangleAreas(23,43));
rectangles.push(rectangleAreas(34,21));

console.log("The rectangles' list is: " + rectangles);

*/

//var student0 = {
//    firstName: "Pranjal",
//    lastName: "Gupta",
//    age: 20
//    
//}
//
//var student1 = {};
//student1.firstName="Rahul";
//student1.lastName="Nepali";
//student1.age=21;
//
//var student2 = {};
//student2.firstName="Pranav";
//student2.lastName="Jha";
//student2.age=20;
//
//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);
//
//console.log(students);

//#### But the above process is not effficient as we have to repeat ourselves. So, we will3##### 
//##### make a reusable object and that's where the OOPs come.######

//students =[];
//function Student(first,last,age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function(){
//        return  "Hi i am " + this.firstName + " and i am " + this.age +" years old.";
//    }
//}
//
//students.push( new Student("Pranjal","Gupta",20));
//students.push( new Student("Pranav","Jha",19));
//students.push( new Student("Rahul","Nepali",21));
//
//
//
//
//for (var index=0; index < students.length; index++ ){
//    console.log(students[index].greeting());
//    
//}
//

//var Names = [];
//
//function BalanceInquiry(Name,CurrentBalance){
//    this.AccountHolderName = Name;
//    this.CurrentBalance = CurrentBalance;
//    this.AccountStatus = function(){
//        return "Hi, " + this.AccountHolderName + ". Your current Balance is: " + this.CurrentBalance +".";
//    }
//}
//
//Names.push( new BalanceInquiry("Swati Rani Gupta",12030000));
//Names.push(new BalanceInquiry("Ankita Rani Gupta",24000));
//Names.push(new BalanceInquiry("Pranjal Gupta",10000));
//
//for( var index=0; index < Names.length ; index++){
//    console.log(Names[index].AccountStatus());
//}

//######## Percentage calculator ##############

var numField1 = document.getElementById("numField1");//getElementById grabs id we have created in the html file
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
//numField1.value="test"; #it displays the value in the numfield1.
//resultField.innerText="test"; #it displays the text in the result.
var form = document.getElementById("IsWhatPercentOf");
form.addEventListener("submit",function(event){
    if(!numField1.value || !numField2.value){
        alert("Please! enter the values!");
    }
    else{
        var x = parseFloat(numField1.value);//parsefloat converts string into float value.
        var y = parseFloat(numField2.value);
        var percent = (x/y)*100;
        resultField.innerText = (x + " is " + percent+"%" + " of " +y+".");
        event.preventDefault();//it prevents the submit button to refresh the page.
    }
})









