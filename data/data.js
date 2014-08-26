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
data[l].info.numbers="1000";
data[l].info.money="1$";
data[l].info.association="ALS Association";
data[l].info.description='The Ice Bucket Challenge has succeeded in raising millions of dollars for ALS research. Unfortunately it has also spread the word to millions and faced criticism, as many who do not donate still post the video and nominate their friends.<br/><br/>The idea behind this app. is to raise money just by downloading it. <br/><br/><center><strong class="wow">Every '+data[l].info.numbers+' downloads the creator will donate '+data[l].info.money+' to the '+data[l].info.association+'</strong></center><br/><br/><center>So, thanks for your download! <strong>You are giving a little help</strong>, but if you want to do more you can <a class="button ext-link" href="mailto:ibc@kogel.it">contact the developer</a> and increase the amount.</center><br/><br/>';

data[l].info.image="<center><img src='css/icons/init.png' class='app_icon_big'></img></center>";

data[l].info.about="";

data[l].info.about_thanks="This app is powered by <a class='ext-link' target='_blank' href='http://www.kogel.it'>Mirko Gelsomini</a> and <a>Samantha Marchesi</a>";

data[l].info.about_law="Disclaimer:...";

/*-------------------------------------------------------------------------------------------------------*/

/***********************************/
data[l].addTv(
"Ben Affleck",
"iuBX9en_OXA"
);
/***********************************/
/***********************************/
data[l].addTv(
"Robbie Amell",
"imh4TefmB6U"
);
/***********************************/
/***********************************/
data[l].addTv(
"Stephen Amell",
"dDXOIj3IpAw"
);
/***********************************/
/***********************************/
data[l].addTv(
"Shawn Ashmore",
"TMN6Dum8-CE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Reza Attaran",
"3Kk4DJvhK3Y"
);
/***********************************/
/***********************************/
data[l].addTv(
"Abhishek Bachchan",
"X84h64TgnRE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Simon Baker",
"ddS3TwIR4X4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jamie Bamber",
"-_Q1i_7p8Ag"
);
/***********************************/
/***********************************/
data[l].addTv(
"John Barrowman",
"Q2Dvove7VT4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jay Baruchel",
"dNS4XZaEHdU"
);
/***********************************/
/***********************************/
data[l].addTv(
"Dave Batista",
"WWzGJP_y48o"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jack Black",
"NwKfUz6I6yU"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ian Bohen",
"IIsFIvx_GMM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Matt Bomer",
"vcV1dUP7t1s"
);
/***********************************/
/***********************************/
data[l].addTv(
"Douglas Booth",
"Mk7axVR8qTM"
);
/***********************************/
/***********************************/
data[l].addTv(
"David Boreanaz",
"GH0mepQ7dTk"
);
/***********************************/
/***********************************/
data[l].addTv(
"Charlie Carver",
"guDuNc1GCs0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Max Carver",
"8u7ZWN9RSW0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Sam Claflin",
"aidaSaeTuHQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Chris Colfer",
"lIv9PvZ3_40"
);
/***********************************/
/***********************************/
data[l].addTv(
"Bradley Cooper",
"tR4tNZ79awQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Russell Crowe",
"_oR3VqofP3A"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tom Cruise",
"Pk-pOYlWTv8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jon Cryer",
"TWGex1X6scE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Benedict Cumberbatch",
"Z_kJHc-57pw"
);
/***********************************/
/***********************************/
data[l].addTv(
"Brett Dalton",
"UuQOUQBXlwA"
);
/***********************************/
/***********************************/
data[l].addTv(
"Dingdong Dantes",
"OjPYMvFmDXc"
);
/***********************************/
/***********************************/
data[l].addTv(
"Warwick Davis",
"U7H9Bq-D340"
);
/***********************************/
/***********************************/
data[l].addTv(
"Guillermo del Toro",
"wt-OydY6i6w"
);
/***********************************/
/***********************************/
data[l].addTv(
"Joe Dempsie",
"u4OI7e10mWc"
);
/***********************************/
/***********************************/
data[l].addTv(
"Riteish Deshmukh",
"MMmwGOYxbEM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Leonardo DiCaprio",
"kEdly4PCnTg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Vin Diesel",
"FCaj2eYTfyo"
);
/***********************************/
/***********************************/
data[l].addTv(
"Robert Downey, Jr.",
"2DH-DK8gGks"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jamie Dornan",
"jtiPuJqpsb8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Zac Efron",
"FvCCetmISco"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ansel Elgort",
"g42Ulr3kZAI"
);
/***********************************/
/***********************************/
data[l].addTv(
"Chris Evans",
"0ARpDA0W9Lw"
);
/***********************************/
/***********************************/
data[l].addTv(
"Nathan Fillion",
"K9iPuEcsaGA"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jamie Foxx",
"UekCR0SiClo"
);
/***********************************/
/***********************************/
data[l].addTv(
"James Franco",
"z4ScrGpSOVE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jorge Garcia",
"cC1spNX3ppM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ricky Gervais",
"1Aw_VwryBv4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Topher Grace",
"J56BtLtwu18"
);
/***********************************/
/***********************************/
data[l].addTv(
"Grant Gustin",
"ZI6uYrR1YU8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Mark Hamill",
"TfnqppqUBOI"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tom Hanks",
"UvUDdNnVIr0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Neil Patrick Harris",
"rmdbr34hoQQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Kevin Hart",
"kHV9YzZg9N4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Colton Haynes",
"I9CuHdvXPFE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Anthony Head",
"XRwp6L9yREE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Chris Hemsworth",
"3Am0jBH_bTc"
);
/***********************************/
/***********************************/
data[l].addTv(
"Liam Hemsworth",
"7AsvRek1TJI"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tom Hiddleston",
"zzmNI1JFOnM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Steve Higgins",
"b_kdke345NQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tyler Hoechlin",
"55NroZqsK_M"
);
/***********************************/
/***********************************/
data[l].addTv(
"Nicholas Hoult",
"NtrHdiARV2o"
);
/***********************************/
/***********************************/
data[l].addTv(
"Josh Hutcherson",
"WTV9AE2qs5w"
);
/***********************************/
/***********************************/
data[l].addTv(
"Hyun Bin",
"ta4h7PuQW1A"
);
/***********************************/
/***********************************/
data[l].addTv(
"Aras Bulut İynemli",
"VWIClb2CV9U"
);
/***********************************/
/***********************************/
data[l].addTv(
"Hugh Jackman",
"SHfhTab7HRg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Don Johnson",
"36BX9yeFJdY"
);
/***********************************/
/***********************************/
data[l].addTv(
"Dwayne Johnson",
"L-ZmYOVx-V8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Kaneshiro Takeshi",
"-ifKz-Yynt0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Robbie Kay",
"BT1TtQUoZOY"
);
/***********************************/
/***********************************/
data[l].addTv(
"John Krasinski",
"MMS4qdb3RQ4"
);
/***********************************/


data[l].addMusic("prova","HDIzL61H4aY");
data[l].addSport("prova","HDIzL61H4aY");
data[l].addOther("prova","HDIzL61H4aY");
