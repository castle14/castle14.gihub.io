
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
 equalTo 方法支持 "==","!=",">",">=","<","<="
*/
function getMtRoomCondition(roomid,date,fn){
	let query = Bmob.Query("order_log");
	query.equalTo("room_id","==", roomid);
	query.equalTo("order_date","==", date);
	query.find().then(res => {
	  fn(res);
	}).catch(err => {
	  console.log(err);
	  alert("获取会议室"+roomid+"预定情况失败!");
	})
}
/*
 添加会议室预定
*/
function orderMtRoom(orderinfo){
	let query = Bmob.Query('order_log');
	
	query.set("room_id",orderinfo.room_id);
	query.set("subscriber_tel",orderinfo.subscriber_tel);
	query.set("subscriber",orderinfo.subscriber);
	query.set("roomname",orderinfo.roomname);
	query.set("meeting_desc",orderinfo.meeting_desc);
	query.set("order_date",orderinfo.order_date);
	query.set("start_time",orderinfo.start_time);
	query.set("end_time",orderinfo.end_time);
	
	query.save().then(res => {
	  console.log(res);
	}).catch(err => {
	  console.log(err);
	})
}