function calculateGrade(p) {
  //your code here
	let ans="";
if(p>=90){
	ans='A'
}else if(p>=80 && p<90){
	ans='B'
}else if(p>=70 && p<80){
	ans='C'
}else if(p>=60 && p<70){
	ans='D'
}else{
	ans='F'
}


return ans;
	
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
