document.getElementById('selectall').addEventListener('click', function () {
    var arr = document.querySelectorAll('.container input[type="checkbox"]');
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = true;
    }
});
document.getElementById('clearall').addEventListener('click', function () {
    var arr = document.querySelectorAll('.container input[type="checkbox"]');
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false;
    }
});
