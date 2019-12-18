function refreshRoomList(date) {
	$("#roomlist").html("");
	getMtRoomList(function(data) {
		// console.log(data);
		for (i in data) {
			let div_str = '<div class="mt_room_card"><div class="mt_room_left"><div class="mt_room_top">' +
				data[i].roomname +
				'</div><div class="mt_room_bottom" id="rmstate_' + data[i].objectId + '">' + '' + '</div></div>' +
				'<div class="mt_room_right" id="' + data[i].objectId + '">预<br>定</div>' +
				'</div>';
			$(div_str).appendTo('#roomlist');

			getMtRoomCondition(data[i].objectId, date, function(roonstatedata) {
				// console.log(roonstatedata);
				for (j=0;j<roonstatedata.length;j++) {
					if (roonstatedata[j] != null && roonstatedata[j] != undefined) {
						let mtroom_state = '●';
						mtroom_state = mtroom_state + roonstatedata[j].start_time + "-";
						mtroom_state = mtroom_state + roonstatedata[j].end_time + " ";
						mtroom_state = mtroom_state + roonstatedata[j].subscriber + " ";
						mtroom_state = mtroom_state + roonstatedata[j].subscriber_tel;
						let tmp = "<p>" + mtroom_state + "</p>" + $("#rmstate_" + roonstatedata.roomid).html();
						$("#rmstate_" + roonstatedata.roomid).html(tmp);
					}
				}
				if(roonstatedata.length == 0){
					$("#rmstate_" + roonstatedata.roomid).html("<p>空闲</p>");
				}
			});

			$("#" + data[i].objectId).on("click", function() {
				console.log("click-" + $(this).attr("id"));
			});
		}
	});
}


$(function() {
	$("#date_display").text(getDate());
	for (let i = 0; i < 7; i++) {
		let day1 = new Date();
		day1.setTime(day1.getTime() + i * 24 * 60 * 60 * 1000);
		$("#date_" + i).text(day1.getDate());
		$("#date_" + i).attr("date", day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate());
		if (day1.getDay() == 6 || day1.getDay() == 0) {
			$("#date_" + i).addClass("weekday_div_weekend");
		}
		$("#date_" + i).on("click", function() {
			$(".weekday_div").removeClass("weekday_div_checked");
			$(this).addClass("weekday_div_checked");
			console.log("click " + $(this).attr("date"));
			refreshRoomList($(this).attr("date"));
		});
	}
	refreshRoomList(getDate());

});
