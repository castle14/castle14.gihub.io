function checkMeetingRoom(meeting_id) {
	alert(meeting_id);
}

function createMeetingRoomTable(data, datetime) {
	// console.log(data);
	for (i in data) {
		var newRow = "<tr><td>" + (Number(i) + 1) + "</td>" +
			"<td>" + data[i].roomname + "</td>" +
			"<td>□□□□ ■■■■</td>" +
			"<td>" + "<a href='#' onclick=checkMeetingRoom('" + data[i].objectId + "') >查看</a></td></tr>";
		$(newRow).insertAfter($("#meeting_room_table tr:eq(" + i + ")"));
	}
}

$(function(){
	$("#meeting_date").val(getDate());
	// const query = Bmob.Query("meetingroom")
	// query.find().then(res => {
	// 	createMeetingRoomTable(res);
	// });
});