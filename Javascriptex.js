// $('#calculator') document(function(){
//     var number = "";
//     var newnumber = "";
//     var operator = "";
//     var totaldiv = $("#total");
//     totaldiv.text("0");
//     $("#numbers > a").click(function(){
//     number += $(this).text();
//     totaldiv.text(number);
//     testNumLength(number);
//     });
//     //Add another .click() here!

//   var calculator = document.querySelectorAll('#calculator totaldiv span screen'){
//     span = n1;
//     span = n2;
    

// function do_calculation() {

     var a, b, result; 
     // why declare result here ^
     function setValues(){
     a = Number(document.getElementById('a').value);
     b = Number(document.getElementById('b').value);
     }
     // var result_div =document.getElementById("result_span");
       
       function add(){
        setValues();
        result= a+b;
        alert('the total is'+ result)
       }
         function subtract(){
        setValues();
        result= a-b;
        alert('the total is'+ result)
       }
         function multiply(){
        setValues();
        result= a*b;
        alert('the total is'+ result)
       }
         function divide(){
        setValues();
        result= a/b;
        alert('the sum is'+ result)
       }
    

    // switch (a, b)  {
    //             case "+":
    //                 totaldiv = a + b
    //                 "Your answer is " result_div.innerHTML = a + b;
    //                 break;

    //             case "-":
    //                 "Your answer is " result_div.innerHTML = a - b;
    //                 break;

    //             case "/":
    //                 "Your asnwer is " result_div.innerHTML = a \ b;
    //                 break;

    //             case "*":
    //                 "Your answer is " result_div.innerHTML = a * b;
    //                 break;
    
