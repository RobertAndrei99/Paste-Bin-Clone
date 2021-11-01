 async function getData() {
    const response = await fetch("/api" ) ;
    const data =  await response.json() ;
    let time = [] ;
    let titles = [] ;
    let authors = [] ;
    let content = [] ;
    for ( i in data) {
        if ( data[i].pastetime != Number.MAX_SAFE_INTEGER) {
            time.push(new Date(data[i].pastetime).toGMTString()) ;
        }
        else {
            time.push('Never');
        }
        titles.push(data[i].pastetitle ) ;
        if (data[i].pasteauthor != null) {
            authors.push(data[i].pasteauthor ) ;
        }
        else {
            authors.push('Unknown author')
        }
        content.push(data[i].pastetext) ;

    }
    for ( i in data) {
        $('#listPaste').append(`
        <div class = "container">
          <textarea  id = "content" cols="70" rows="10" readonly> `+ content[i]+`</textarea>
          <div id = "pasteName">
              <label for="pasteTitle" >Paste title: </label>
              <input id = "pasteTitle" value =" `+titles[i]+`" readonly>
          </div>
          <div id = "pasteWriter">
              <label for="pasteAuthor">Paste author: </label>
              <input id= "pasteAuthor" type="text" value = "`+authors[i]+`" readonly>
          </div>
          <div id = "expireTime">
              <label for="pasteTime" >Paste will expire on: </label>
              <input type"number" id = "pasteTime" value = "`+time[i]+`" readonly>
          </div>
        </div>
      `)
    }
}
getData() ;
