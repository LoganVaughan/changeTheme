
function changeTheme(){
    const title = document.getElementById('title');
    const octoberTheme = document.getElementById('october');
    const novemberTheme = document.getElementById('november');

    if (octoberTheme.checked){
        title.style.color = "blueviolet";
        document.body.style.backgroundColor = "green"; 
    } else if(novemberTheme.checked){
        title.style.color = "red";
        document.body.style.backgroundColor = "brown"; 
    }
}