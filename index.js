let pos=0;
let test,test_status,question,choices,chA,chB,chC,correct=0;
let questions=[
   ['what is 10x2 ?','12','20','10','30','B'],
   ['what is (10+2)x2 ?','12','18','24','28','C'],
   ['what is 8/2 ?','2','6','1','4','D'],
   ['what is 20-9 ?','11','12','25','24','A']
];
function _(x){
   return document.getElementById(x);
}
function renderQues(){
   test=_('test');
   _("test_status").innerHTML="Question"+(pos+1)+"of"+questions.length;
   question=questions[pos][0];
   chA=questions[pos][1];
   chB=questions[pos][2];
   chC=questions[pos][3];
   test.innerHTML='<h3>'+question+'</h3>';
   test.innerHTML+="<input type='radio' name='choices' value='A'>"+chA+"<br>";
   test.innerHTML+="<input type='radio' name='choices' value='B'>"+chB+"<br>";
   test.innerHTML+="<input type='radio' name='choices' value='C'>"+chC+"<br>";
   test.innerHTML+="<button onclick='checkAnswer()'>submit answer</button>";
}
function checkAnswer(){
   alert("i will");
}