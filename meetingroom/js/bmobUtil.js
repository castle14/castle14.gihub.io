
Bmob.initialize("081365fff35cb453", "123456");
function getDate(){
	var day2 = new Date();
	day2.setTime(day2.getTime());
	var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
	return s2;
}