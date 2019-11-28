
Bmob.initialize("081365fff35cb453", "123456");
/*
获取今天的星期
*/
function getDay(){
	return new Date().getDay();
}
/* 
 获取今天的日期
 */
function getDate(){
	let day2 = new Date();
	let s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
	return s2;
}
/* 
根据传入的日期获取星期
 */
function getDayByDate(date){
	return new Date(date).getDay();
}
/* 
 获取会议室列表,并进行处理
 */
function getMtRoomList(fn){
	let query = Bmob.Query("meetingroom");
	query.find().then(res => {
		fn(res);
	});
}
/*
 根据会议室id和日期获取当前会议室预定情况,并进行处理
*/
function getMtRoomCondition(roomid,date,fn){
	
}