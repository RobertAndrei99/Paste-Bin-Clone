const submitBtn = document.getElementById('submit');
const selectMeniu = document.getElementById('pasteTime') ; 
let expValue = selectMeniu.options[selectMeniu.selectedIndex].value ; 
selectMeniu.onclick = function updateExpireTime() {
    expValue = selectMeniu.options[selectMeniu.selectedIndex].value ; 
}
submitBtn.onclick = async function() {
    const pasteTitle = document.getElementById('pasteTitle').value.toString() ; 
    const txtValue = document.getElementById('pasteText').value ;
    const pasteAuthor = document.getElementById('pasteAuthor').value.toString() ;
    let expTime = parseInt(expValue * 1000) + (Date.now()); 
    if ( expValue == '0') {
        expTime = Number.MAX_SAFE_INTEGER ;
    }
    const timestamp = Date.now() ;   
    const data = { txtValue , expTime , pasteTitle , pasteAuthor , timestamp}; 
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json() ;
}
