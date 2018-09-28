var nowSetObj = null;   //当前操作的控件

//绑定设置属性
var setFunc = function(obj){
    nowSetObj = $(obj).parent().parent();
    var itemType = $(obj).attr('item-type');
    console.log('select item-type:'+itemType);
    //读取文件内容
    var url = "getHtml.php";
    var file = 'setPanel/' + itemType+ ".html"; 
    $.get(url, {'file':file}, function(data){
        console.log(file);
        $("#setMain").html(data);
    })

    $(".redBorder").removeClass('redBorder');
    nowSetObj.addClass('redBorder');
}

//修改控件类型
function setInputType(){
    console.log(nowSetObj);
    var inputType= $("#setInput").val();
    var url = "getHtml.php";
    var file = 'my/' + inputType + ".html"; 
    $.get(url, {'file':file}, function(data){
        $(nowSetObj).find(".view_content").html(data);
    })
}

//读取控件属性
function readInputAttr(attr){
    var value = nowSetObj.find('input').attr(attr);
    if(value != "" && value != null){
        $("#fish_input_" + attr).val(value);
    }
}

function readInputAttrs(){
    readInputAttr('name');
    readInputAttr('id');
    readInputAttr('value');
    readInputAttr('placeholder');
    readInputAttr('vrule');
}

//设置控件属性值
function setInputAttr(attr, value){
    if(value != ""){
        nowSetObj.find('input').attr(attr,value);
    }
}

function setInputAttrs(){
    var fish_input_name = $("#fish_input_name").val();
    var fish_input_id = $("#fish_input_id").val();
    var fish_input_value = $("#fish_input_value").val();
    var fish_input_placeholder = $("#fish_input_placeholder").val();
    var fish_input_vrule = $("#fish_input_vrule").val();

    setInputAttr('name', fish_input_name);
    setInputAttr('id', fish_input_id);
    setInputAttr('value', fish_input_value);
    setInputAttr('placeholder', fish_input_placeholder);
    setInputAttr('vrule', fish_input_vrule);
}

//设置标签
function setInputLabel(){
    var value = $("#fish_input_label").val();
    $(nowSetObj).find("label").html(value);
}
//读取标签
function readInputLabel(){
    var value = $(nowSetObj).find("label").html();
    $("#fish_input_label").val(value);
}

//绑定数据源
function setDataSource(){

}