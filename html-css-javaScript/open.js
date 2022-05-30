function courseSubmit() {
    var course = document.getElementById('course').value;
    var stream = document.getElementById('stream').value;
    var fee = document.getElementById('fee').value;
    var startdate = document.getElementById('date1').value;
    var enddate = document.getElementById('date2').value;
    var examdate = document.getElementById('date3').value;
    var resultdate = document.getElementById('date4').value;
    var radioButtons = document.querySelectorAll('input[name="yeargap"]');
    var selectedyeargap;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedyeargap = rd.value;
            break;
        }
    }
    var radioButtons = document.querySelectorAll('input[name="marks"]');
    var selectedmarks;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedmarks = rd.value;
            break;
        }
    }

    if (course && stream && selectedyeargap) {
        console.log('getting details',course,stream,fee,selectedyeargap,selectedmarks,startdate,enddate,examdate,resultdate);
    }
    else {
        alert('please provide full details')
    }
}










