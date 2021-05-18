
var aboutMe_1="I am a 3rd year student In The Department of Industrial Engineering and Management at Ben Gurion University of the Negev.";
var aboutMe_2="I am the youngest out of 3 sister, and the happiest aunt for 2 gorgeous nieces. My family is the main thing in my life. ";
var aboutMe_3="I enjoy the profession I am learning, I find it interesting and challenging but mostly diverse and colorful. I'm majoring Information Systems.";
var aboutMe_4="I served the IDF for 2 years as a teleprocessing technician in the training base of Giv'aty unit in Ktzi'ot.";
var aboutMe_5="I participated in the 'Taglit' project and accompanied young Americans on a journey to get to know Israel";

var job_1="2016-2020 Waitress and bartender at the Irish pub 'Oscar Wilde' in Holon. Fast functioning under pressure. Good interpersonal skills.";
var job_2="2016 'Shlicha' of the Jewish Agency at the JCH summer camp in Brooklyn, New-York. I was a music counselor, led children at the ages of 5-7 & 10-13 & 16-18";
var job_3="2015-2016 Cashier at 'kley-zemer'-Musical Instruments shop-Dizengoff Center branch. ongoing work with the cash register, receiving phone calls.";
var job_4="2013 Assistant at an afternoon child care facility: Responsibility for the children, ability to lead children, receiving group and individual attention.";
var job_5="2008-2012 summer job: Assistance in bookkeeping for an accounting firm. Sorting and receiving data, bank adjustments of suppliers and customers."

var education_1="2018-2022 .B.Sc. Industrial Engineering and Management Degree, majoring Information Systems. Current average grade:__";
var education_2="2020 Graduate of a podcast editing course at BGU Radio. editing a musical podcast which focusing on cover versions of well-known songs.";
var education_3="BGU-radio - Discover podcast";
var education_4="2019, Psychometric test. grade: 680";
var education_5="2010-2013 Graduate of the 'Nachon-Science' program at Eylon High School, Holon. Majored subjects of 5 study-units: Mathematics, English, Chemistry.";

var skill_1="Software experience: SQL, R studio, visual paradigm, Lab view, Excel-VBA, Solidworks, Audacity";
var skill_2="Programming languages: Java, python, HTML, JS";
var skill_3="Office software: Excel, PowerPoint, Word";
var skill_4="Major courses: Finance, Information Technology, Databases, Automation, Algorithms, Decision Making, Performance Research, Work Research";
var skill_5="Good teamwork skills, striving for high achievements, uncompromising";

var hobbie_1="in poland";
var hobbie_2="BGU-radio";
var hobbie_3="JCH summer camp";
var hobbie_4="Kabalat Shabat Camp";
var hobbie_5="purim";

function aboutMe(){
document.getElementById ("box-1").innerHTML =aboutMe_1;
document.getElementById ("box-2").innerHTML =aboutMe_2;
document.getElementById ("box-3").innerHTML =aboutMe_3;
document.getElementById ("box-4").innerHTML =aboutMe_4;
document.getElementById ("box-5").innerHTML =aboutMe_5;
document.getElementById ("who-am-i").style.backgroundColor="gray";
document.getElementById ("work-experience").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("education").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("skillset").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("hobbies").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("pic1").style.display = 'none';
document.getElementById ("pic2").style.display = 'none';
document.getElementById ("pic3").style.display = 'none';
document.getElementById ("pic4").style.display = 'none';
document.getElementById ("pic5").style.display = 'none';
}

function work(){
document.getElementById ("box-1").innerHTML =job_1;
document.getElementById ("box-2").innerHTML =job_2;
document.getElementById ("box-3").innerHTML =job_3;
document.getElementById ("box-4").innerHTML =job_4;
document.getElementById ("box-5").innerHTML =job_5;
document.getElementById ("who-am-i").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("work-experience").style.backgroundColor="gray";
document.getElementById ("education").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("skillset").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("hobbies").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("pic1").style.display = 'none';
document.getElementById ("pic2").style.display = 'none';
document.getElementById ("pic3").style.display = 'none';
document.getElementById ("pic4").style.display = 'none';
document.getElementById ("pic5").style.display = 'none';
}

function education(){
document.getElementById ("box-1").innerHTML =education_1;
document.getElementById ("box-2").innerHTML =education_2;
document.getElementById ("box-3").innerHTML =education_3;
document.getElementById ("box-4").innerHTML =education_4;
document.getElementById ("box-5").innerHTML =education_5;
document.getElementById ("who-am-i").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("work-experience").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("education").style.backgroundColor="gray";
document.getElementById ("skillset").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("hobbies").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("pic1").style.display = 'none';
document.getElementById ("pic2").style.display = 'none';
document.getElementById ("pic3").style.display = 'none';
document.getElementById ("pic4").style.display = 'none';
document.getElementById ("pic5").style.display = 'none';
window.open("https://anchor.fm/bgu-radio/episodes/--eb9bp3", "_blank");
}

function skills(){
document.getElementById ("box-1").innerHTML =skill_1;
document.getElementById ("box-2").innerHTML =skill_2;
document.getElementById ("box-3").innerHTML =skill_3;
document.getElementById ("box-4").innerHTML =skill_4;
document.getElementById ("box-5").innerHTML =skill_5;
document.getElementById ("who-am-i").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("work-experience").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("education").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("skillset").style.backgroundColor="gray";
document.getElementById ("hobbies").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("pic1").style.display = 'none';
document.getElementById ("pic2").style.display = 'none';
document.getElementById ("pic3").style.display = 'none';
document.getElementById ("pic4").style.display = 'none';
document.getElementById ("pic5").style.display = 'none';
}

function hobbies(){
document.getElementById ("box-1").innerHTML =hobbie_1;
document.getElementById ("box-2").innerHTML =hobbie_2;
document.getElementById ("box-3").innerHTML =hobbie_3;
document.getElementById ("box-4").innerHTML =hobbie_4;
document.getElementById ("box-5").innerHTML =hobbie_5;
document.getElementById ("who-am-i").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("work-experience").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("education").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("skillset").style.backgroundColor="var(--languid-lavender)";
document.getElementById ("hobbies").style.backgroundColor="gray";
document.getElementById ("pic1").style.display = 'inline';
document.getElementById ("pic2").style.display = 'inline';
document.getElementById ("pic3").style.display = 'inline';
document.getElementById ("pic4").style.display = 'inline';
document.getElementById ("pic5").style.display = 'inline';
}

/*function contactMe(){
    window.open('../templates/contactMe.html', "_blank");
}
function facebookMe(){
    window.open("https://www.facebook.com/liorra/", "_blank");
}
function contactList(){
    window.open("../templates/contactList.html", "_blank");
}*/

