/**
 * Created by cheng&i on 2016/12/18.
 */
function refresh() {
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth > 1080) {
		document.documentElement.style.fontSize = 1080 / 10.8 + "px";
	} else {
		document.documentElement.style.fontSize = deviceWidth / 10.8 + "px";
	}
}

refresh();
window.onresize = function() {
	refresh();

}
$(function() {
	var h = $(window).height();
	var markH = $(".mark").offset().top
	var footerH = $("footer").height();
	var contH = h - markH - footerH;
	var title = $("#title")
	var t1 = $(".t1")
	var t2 = $(".t2")
	var banner = $(".banner")
	var li1 = $(".li1")
	var li2 = $(".li2")
	var li3 = $(".li3")
	var li4 = $(".li4")
	var li5 = $(".li5")
	var li6 = $(".li6")
	var li7 = $(".li7")
	var li8 = $(".li8")
	var li9 = $(".li9")

	var sp1 = $(".sp1")
	var sp2 = $(".sp2")
	var sp3 = $(".sp3")
	var sp4 = $(".sp4")
	var sp5 = $(".sp5")
	var sp6 = $(".sp6")
	var sp7 = $(".sp7")
	var sp8 = $(".sp8")
	var sp9 = $(".sp9")

	var li01 = $(".li01")
	var li02 = $(".li02")
	var li03 = $(".li03")
	var li04 = $(".li04")
	var li05 = $(".li05")
	var li06 = $(".li06")
	var li07 = $(".li07")
	var li08 = $(".li08")
	var li09 = $(".li09")

	var sp01 = $(".sp01")
	var sp02 = $(".sp02")
	var sp03 = $(".sp03")
	var sp04 = $(".sp04")
	var sp05 = $(".sp05")
	var sp06 = $(".sp06")
	var sp07 = $(".sp07")
	var sp08 = $(".sp08")
	var sp09 = $(".sp09")

	var li10 = $(".li10")
	var li20 = $(".li20")
	var li30 = $(".li30")
	var li40 = $(".li40")
	var li50 = $(".li50")
	var li60 = $(".li60")
	var li70 = $(".li70")
	var li80 = $(".li80")
	var li90 = $(".li90")
	var li100 = $(".li100")
	var li110 = $(".li110")
	var li120 = $(".li120")
	var li130 = $(".li130")
	var li140 = $(".li140")
	var li150 = $(".li150")

	var sp10 = $(".sp10")
	var sp20 = $(".sp20")
	var sp30 = $(".sp30")
	var sp40 = $(".sp40")
	var sp50 = $(".sp50")
	var sp60 = $(".sp60")
	var sp70 = $(".sp70")
	var sp80 = $(".sp80")
	var sp90 = $(".sp90")
	var sp100 = $(".sp100")
	var sp110 = $(".sp110")
	var sp120 = $(".sp120")
	var sp130 = $(".sp130")
	var sp140 = $(".sp140")
	var sp150 = $(".sp150")




//加载json
	function load(index) {
		banner.css("background-color", data[index].bannerColor);
		title.text(data[index].title);
		t1.text(data[index].t1);
		t2.text(data[index].t2);
		li1.css("background-color", data[index].li1)
		li2.css("background-color", data[index].li2)
		li3.css("background-color", data[index].li3)
		li4.css("background-color", data[index].li4)
		li5.css("background-color", data[index].li5)
		li6.css("background-color", data[index].li6)
		li7.css("background-color", data[index].li7)
		li8.css("background-color", data[index].li8)
		li9.css("background-color", data[index].li9)

		sp1.text(data[index].sp1);
		sp2.text(data[index].sp2);
		sp3.text(data[index].sp3);
		sp4.text(data[index].sp4);
		sp5.text(data[index].sp5);
		sp6.text(data[index].sp6);
		sp7.text(data[index].sp7);
		sp8.text(data[index].sp8);
		sp9.text(data[index].sp9);

		li01.css("background-color", data[index].li01)
		li02.css("background-color", data[index].li02)
		li03.css("background-color", data[index].li03)
		li04.css("background-color", data[index].li04)
		li05.css("background-color", data[index].li05)
		li06.css("background-color", data[index].li06)
		li07.css("background-color", data[index].li07)
		li08.css("background-color", data[index].li08)
		li09.css("background-color", data[index].li09)

		sp01.text(data[index].sp01);
		sp02.text(data[index].sp02);
		sp03.text(data[index].sp03);
		sp04.text(data[index].sp04);
		sp05.text(data[index].sp05);
		sp06.text(data[index].sp06);
		sp07.text(data[index].sp07);
		sp08.text(data[index].sp08);
		sp09.text(data[index].sp09);

		li10.css("background-color", data[index].li10)
		li20.css("background-color", data[index].li20)
		li30.css("background-color", data[index].li30)
		li40.css("background-color", data[index].li40)
		li50.css("background-color", data[index].li50)
		li60.css("background-color", data[index].li60)
		li70.css("background-color", data[index].li70)
		li80.css("background-color", data[index].li80)
		li90.css("background-color", data[index].li90)
		li100.css("background-color", data[index].li100)
		li110.css("background-color", data[index].li110)
		li120.css("background-color", data[index].li120)
		li130.css("background-color", data[index].li130)
		li140.css("background-color", data[index].li140)
		li150.css("background-color", data[index].li150)

		sp10.text(data[index].sp10);
		sp20.text(data[index].sp20);
		sp30.text(data[index].sp30);
		sp40.text(data[index].sp40);
		sp50.text(data[index].sp50);
		sp60.text(data[index].sp60);
		sp70.text(data[index].sp70);
		sp80.text(data[index].sp80);
		sp90.text(data[index].sp90);
		sp100.text(data[index].sp100);
		sp110.text(data[index].sp110);
		sp120.text(data[index].sp120);
		sp130.text(data[index].sp130);
		sp140.text(data[index].sp140);
		sp150.text(data[index].sp150);
	}
	load(0)
	//显示第一页





	//跳转
	$("section,.section_right").height(contH);
	var arrLi = $("section li");
	var arrItem = $("#rightHTML li");
	var url = 'detail.html';
	var url1 = 'shopcar.html'
	arrItem.click(function() {
		location.href = url;
	});
	$("#sumup").click(function() {
			location.href = url1;
		})
		//数据获取
	var liH = $("section li").height()

	arrLi.click(function() {
		var index = arrLi.index(this);
		arrLi.removeClass("active").eq(index).addClass("active")
			//            var sectionNowH = $("section").scrollTop();
		$("section").animate({
			scrollTop: (index * liH) - contH / 2
		}, 500);
		load(index)
	})

})