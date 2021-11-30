function detectLanguage(){
    let language = {};
    language.now = location.pathname.match(/^\/en/) ? 'en' : 'cn';
    if('en' === language.now){
      language.label = '中文';
      language.href = location.pathname.replace(/^\/en/, '/cn');
    }else{
      language.label = 'English';
      language.href = location.pathname.replace(/^\/cn/, '/en');
    }
    $('.menu-list').append('<li class="menu-item" id="language-switch"><a href="'+language.href+'">'+language.label+'</a></li>');
}


