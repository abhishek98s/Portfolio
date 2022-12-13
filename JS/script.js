function sidebar_toggle() {
    var x = document.getElementById('top_sidebar');
    if(x.className === "topnav") {
        x.className += " sidebar_active";
    } else {
        x.className = 'topnav';
    }
}