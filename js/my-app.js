var loc = "en";

var ytimg_start="http://img.youtube.com/vi/";
var ytimg_end="/default.jpg";
var yt_url="http://www.youtube.com/embed/";
var ytframe_start="<iframe width='100%' height='300px' src='http://www.youtube.com/embed/";
var ytframe_end="?theme=light' frameborder='0' allowfullscreen></iframe>";

// Export selectors engine
var $$ = Dom7;

var myApp = new Framework7({
    onPageBeforeInit: function (app, page) {

        if (page.name === 'page-1') {
            $$("#navbar_1_title").html(window.data[loc].info.title+" "+window.data[loc].info.title_plus);
        }else if(page.name === 'page-2'){
            $$("#navbar_2_title").html("Tv Celebrities");
            $$(".tab-link[data-tabn='tab-2']").find(".badge").html(window.data[loc].tv.length);
        }else if(page.name === 'page-3'){
            $$("#navbar_3_title").html("Music Celebrities");
            $$(".tab-link[data-tabn='tab-3']").find(".badge").html(window.data[loc].music.length);
        }else if(page.name === 'page-4'){
            $$("#navbar_4_title").html("Sport Celebrities");
            $$(".tab-link[data-tabn='tab-4']").find(".badge").text(window.data[loc].sport.length);
        }else if(page.name === 'page-5'){
            $$("#navbar_5_title").html("Other Celebrities");
            $$(".tab-link[data-tabn='tab-5']").find(".badge").text(window.data[loc].other.length);
        }


    },
    onPageInit: function (app, page) {
        //console.log(page.name+' initialized');
        var pg=$$(".page[data-page='"+page.name+"']");
        if (page.name === 'page-1') {

            $$(pg).find("[data-id='title']").html(window.data[loc].info.title+" "+window.data[loc].info.title_plus);
            $$(pg).find("[data-id='content']").html(window.data[loc].info.description+window.data[loc].info.image);

        }else if(page.name === 'page-2'){

            $$(pg).find("[data-id='content']").html(createContents(window.data[loc].tv));

        }else if(page.name === 'page-3'){

            $$(pg).find("[data-id='content']").html(createContents(window.data[loc].music));

        }else if(page.name === 'page-4'){

            $$(pg).find("[data-id='content']").html(createContents(window.data[loc].sport));

        }else if(page.name === 'page-5'){

            $$(pg).find("[data-id='content']").html(createContents(window.data[loc].other));
        }

    }

});

$$("#about").html(window.data[loc].info.about+"<br/><br/>"+window.data[loc].info.image);
$$("#about_thanks").html(window.data[loc].info.about_thanks);
$$("#about_law").html(window.data[loc].info.about_law);


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$('.tab-link').on('click', function () {//someone argue that touchstart is better
    //console.log("tablink pressed");
    $$(".searchbar-clear").click();
    $$(".searchbar-cancel").click();
});

function createContents(data){
    var html="";
    if(data.length===0){
        html="<div class='content-block'>Unfortunately there are no records here.<br/>Let's trust in a future update.</div>";
    }else{
        html+="<ul>";
        for(var i=0;i<data.length;i++)
        {
            html+='<li class="accordion-item click-video" data-vid="'+
                window.ytframe_start+data[i].url+window.ytframe_end+
                '">'+
                '<a href="#" class="item-content item-link">'+
                '<div class="item-media"><img src="'+
                ytimg_start+data[i].url+ytimg_end+
                '" width="70"></div>'+
                '<div class="item-inner">'+
                '<div class="item-title">'+(i+1)+') '+data[i].title+'</div>'+
                '</div>'+
                '</a>'+
                '<div class="accordion-item-content">'+
                '<div class="content-block">'+
                '</div>'+
                '</div>'+
                '</li>';

         }
        html+="</ul>";
    }
    return html;
}

$$('.click-video').on('click', function () {

    if($$(this).find("iframe").length===0){
        var htmliframe=$$(this).attr('data-vid');
        console.log($$(this).find(".content-block"));
        $$(this).find(".content-block").append("<br/>"+htmliframe);
    }
});

var J50Npi = {
    currentScript: null,
    getJSON: function(url, data, callback) {
        var src = url + (url.indexOf("?")+1 ? "&" : "?");
        var head = document.getElementsByTagName("head")[0];
        var newScript = document.createElement("script");
        var params = [];
        var param_name = ""

        this.success = callback;

        data["callback"] = "J50Npi.success";
        for(param_name in data){
            params.push(param_name + "=" + encodeURIComponent(data[param_name]));
        }
        src += params.join("&")

        newScript.type = "text/javascript";
        newScript.src = src;

        if(this.currentScript) head.removeChild(currentScript);
        head.appendChild(newScript);
    },
    success: null
};

function getJsonData() {
    var data={};
    window.J50Npi.getJSON(window.json_url, data, handleJsonp);
}

var handleJsonp = function (data) {
    jsonloaded=true;
    window.json_data = data;
    //console.log(data);
    Start();
};
