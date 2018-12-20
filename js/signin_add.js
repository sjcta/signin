window.onload = function() {
  // 登陆页
  if ($("#loginPage").length > 0) {
    $("form.signinForm").on("submit", function(e) {
      _form = $(this);

      if (_form[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      _form.addClass("was-validated");
    });
  }

  // 主页面
  if ($("#mainPage").length > 0) {
    $("button.goBack").on("click", function(e) {
      location.href = "index.html";
    });

    $("#eventList ul li").on("click", function(e) {
      _this = $(this);

      // 未开始
      if (!_this.hasClass("worked") && !_this.hasClass("completed")) {
        // 待训练
        _this
          .addClass("working")
          .find(".btn")
          .attr("disabled", true)
          .text("进行中");

        var timeout = setTimeout(function() {
          _this
            .removeClass("working")
            .addClass("worked")
            .find(".btn")
            .removeClass("disabled")
            .text("点击完成训练");
        }, 10000);
      }
      // 进行中
      if (_this.hasClass("working")) {
        return false;
      }
      // 待完成
      if (_this.hasClass("worked") && !_this.hasClass("completed")) {
        _this.removeClass("worked").addClass("completed");
        _this.find(".btn").text("已完成");
      }
    });
  }
};
