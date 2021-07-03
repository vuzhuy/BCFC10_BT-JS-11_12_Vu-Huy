function Validation(){
    this.kiemTraRong = function (input, divId, mess) {
        if (input.trim() === "") {
            //thông báo lỗi
            getEle(divId).innerHTML = mess;
            getEle(divId).className = "alert alert-danger";
            return false;
        } else {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
    };
}