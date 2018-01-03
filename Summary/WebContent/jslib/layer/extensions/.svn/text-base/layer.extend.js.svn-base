(function ($, layer, win) {

    if (layer === null || layer === undefined) {
        throw new Error(" third component 'layer' must exist!!! ");
    }

    //当你在iframe页面关闭自身时
    function closeSelf() {
        if (!_checkIfInIframe()) {
            return;
        }

        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    }

    // 在iframe页面为自己设置title
    // 前提是需要先设置好自身的document.title
    // 如果是动态变换的document.title ( -- $(document).attr({title:"xxx"}); --),那么你必须在其后调用本方法
    function setTitle4Self() {
        if (!_checkIfInIframe()) {
            return;
        }

        //先得到当前iframe层的索引
        var index = parent.layer.getFrameIndex(window.name);
        window.parent.layer.title(document.title, index);
    }

    function _checkIfInIframe() {
        if (window.parent.layer === null || window.parent.layer === undefined) {
            console.error("this method 'layer.closeSelf' must be call in a iframe.");
            return false;
        }

        return true;
    }

    //用上一级的layer打开,达到最大化的效果
    function openMax(opt) {
        window.top.layer.open(opt);
    }


    //******************************************
    //************* assign vlaue ***************
    //******************************************

    layer.closeSelf = closeSelf;
    layer.setTitle4Self = setTitle4Self;
    layer.openMax = openMax;

}(jQuery, layer, window));