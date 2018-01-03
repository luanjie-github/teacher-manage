var etm={};
etm.bindData = function (modelName, dataObj) {
    var tagArray = $("[name^=" + modelName + "]");
    var len = tagArray.length;
    for (var i = 0; i < len; i++) {
        var tagObj = tagArray[i];
        var name = tagObj.name;
        var tagName = tagObj.tagName;
        var type = tagObj.type;

        if (name != undefined) {
            var dataKey = name.substring(name.indexOf(".") + 1);
            var dataValue = dataObj[dataKey];
            if (dataValue == null || dataValue == undefined || dataValue == "") {
                continue;
            }
            tagName = tagName.toUpperCase();
            if (tagName == "INPUT") {
                type = type.toUpperCase();
                if (type == "TEXT" || type == "HIDDEN") {
                    var comboObj = $("[id='" + name + "']");
                    if (comboObj != null && comboObj != undefined && comboObj.length == 1) {
                        var clazz = comboObj.attr("class");
                        if (clazz == "combobox-f combo-f") {
                            $("[id='" + name + "']").combobox("select", dataValue);
                        }
                        if (clazz == "input1 datebox-f combo-f") {
                            comboObj.datebox("setValue", dataValue);
                        }
                    }
                    tagObj.value = dataValue;
                }
                if (type == "RADIO") {
                    if (tagObj.value == dataValue) {
                        tagObj.checked = true;
                    }
                }
                if (type == "CHECKBOX") {
                    for (var m = 0; m < dataValue.length; m++) {
                        var chkValue = dataValue[m];
                        if (tagObj.value == chkValue) {
                            tagObj.checked = true;
                        }
                    }
                }


            } else if (tagName == "SELECT") {

            } else if (tagName == "TEXTAREA") {
                tagObj.value = dataValue;
            }

        }
    }

};
etm.getUrlParam=function(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
     var r = window.location.search.substr(1).match(reg);  
     if (r != null)
     return unescape(r[2]);
     return null; 
}

etm.getPath  = function(){
	var curWWWpath=window.document.location.href;
	var pathName=window.document.location.pathname;
	var pos=curWWWpath.indexOf(pathName);
	var localhostPath=curWWWpath.substring(0,pos);
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	return (localhostPath+projectName);
}
//***************************************************************************************************************
//********************************************* etm.dialog *******************************************************
//***************************************************************************************************************
/**
 * 弹出提示框
 * args: options
 * 		{content : "提示的内容", icon : "图标", callback : 回调函数}
 * 		icon: 0:警告 1:正确 2:错误 3:询问
**/
etm.alert = function (options) {
    if (options.icon != undefined && options.icon != null) {
        layer.alert(options.content, { icon: options.icon, closeBtn: 0 , skin: 'layui-layer-lan'},
            function (idx) {
                if (options.callback) {
                    options.callback();
                }
                layer.close(idx);
            }
        );
    }
    else {
        //普通
        layer.alert(options.content, { closeBtn: 0 , skin: 'layui-layer-lan' },
            function (idx) {
                if (options.callback) {
                    options.callback();
                }
                layer.close(idx);
            }
        );
    }
};
/**
 * 弹出确认框
 * args: options
 *		{content : 提示内容, yes: 确定的回调函数, cancel: 取消的回调函数}
**/
etm.confirm = function (options) {
    layer.confirm(options.content, { icon: 3, title: "提示" ,skin: 'layui-layer-lan'},
        function (idx) {
            if (options.yes) {
                options.yes();
            }
            layer.close(idx);
        },
        function (idx) {
            if (options.cancel) {
                options.cancel();
            }
            layer.close(idx);
        }
    );
};

(function _init_dialog($, etm, win) {
  if (etm.dialog === undefined) {
      etm.dialog = {};
  }
  var dialog = etm.dialog;

  // 警告对话框
  dialog.alert = function (msg, callback) {
  	  debugger;
      etm.alert({
          content: msg,
          icon: 0,
          callback: callback
      });
  }

  // 成功对话框
  dialog.success = function (msg, callback) {
      etm.alert({
          content: msg,
          icon: 1,
          callback: callback
      });
  }

  // 失败对话框
  dialog.fail = function (msg, callback) {
      etm.alert({
          content: msg,
          icon: 2,
          callback: callback
      });
  }

  // 确认对话框
  dialog.confirm = function (msg, yesCallback, cancelCallback) {
      etm.confirm({
          content: msg,
          yes: yesCallback,
          cancel: cancelCallback
      });
  }

}(jQuery, etm, window));
