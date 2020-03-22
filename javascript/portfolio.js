//rakan alghurayri | s201618080
function toggleShow(info){
    $("#number").addClass('hidden');
    $("#email").addClass('hidden');
    $("#linkedin").addClass('hidden');
    $("#"+info).removeClass('hidden');
}