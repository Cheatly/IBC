function Info () {//localized info about the app

    this.title = "";
    this.title_plus ="";
    this.description = "";
    this.image ="";
    this.about="";
    this.about_thanks="";
    this.about_law="";
    this.let_us_know="";
}

function AppVar (){//unlocalized variables about the app
    this.repo="";
    this.appname="";
}

function Interface() {


}

function Video(title,url){
    this.title = title;
    this.url = url;
}

function Data(locale){

    this.locale = locale;

    this.info = new Info();
    this.interface = new Interface();


    this.tv = new Array();
    this.music = new Array();
    this.sport = new Array();
    this.other = new Array();

    this.addTv = function(title,url){
        this.tv.push(new Video(title,url));
    }
    this.addMusic = function(title,url){
        this.music.push(new Video(title,url));
    }
    this.addSport = function(title,url){
        this.sport.push(new Video(title,url));
    }
    this.addOther = function(title,url){
        this.other.push(new Video(title,url));
    }

}

var l="en";

var appVar=new AppVar();

var data = new Array();

data[l]= new Data(l);

data[l].info.title="Ice Bucket Challenge";
data[l].info.title_plus="(USA)";
data[l].info.description='**** '+data[l].info.title+'.<br/>********';

data[l].info.image="<center><img src='css/icons/init.png' class='app_icon_big'></img></center>";

data[l].info.about="This app is powered by www.<a target='_blank' href='http://www.cheat.ly'>Cheat.ly</a>";

data[l].info.about_thanks="Thanks to:<br/>Icons8 [www.icons8.com/]<br/>Framework 7 [www.idangero.us/framework7]<br/>";

data[l].info.about_law="*****";

/*-------------------------------------------------------------------------------------------------------*/

data[l].addTv("prova","HDIzL61H4aY");
data[l].addMusic("prova","HDIzL61H4aY");
data[l].addSport("prova","HDIzL61H4aY");
data[l].addOther("prova","HDIzL61H4aY");
