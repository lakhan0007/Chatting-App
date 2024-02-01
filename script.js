

//js
let personalChats = document.querySelector('.personal-chats');
let theyProfileImg = document.querySelector('.theyProfileImg');
let userName = document.querySelector('.user-name');


let profileZoom = document.querySelector('.profileZoom');
let profileName = document.querySelector('.profileName');
let profilePhotos = document.querySelector('.profile img');
let pro = document.querySelector('.profileZoom .profile');
let msg = document.querySelector('#msg');
let submit = document.querySelector('.submit');
let textContainer = document.querySelector('.text-container');


//call
let call = document.querySelector('.fa-phone');
let callingContainer = document.querySelector('.calling-container');
let callingName = document.querySelector('.calling-name');
let callingProfile = document.querySelector('.calling-profile');
let audio = document.getElementById("song");


//search
let searchEl = document.querySelector(".search");
let options = document.querySelectorAll(".chats-container ul li");

//profile
let meProfile = document.querySelector(".meProfile");


//time
let battery = document.querySelector(".fa-battery");
let time = document.querySelector(".time");




//chats show
function chatShow(name,profileImg){
  personalChats.style.right = "0%";
  userName.innerText = name;
  theyProfileImg.src = profileImg;
}


//zoom profile
function zoomProfile(name,profileImg){
  profileZoom.style.transform = "scale(1.4)";
  profileName.innerText = name;
  profilePhotos.src = profileImg;
  profileZoom.style.background = "rgba(0,0,0,.6)";
}

//profile zoom
profileZoom.addEventListener("click",()=>{
  profileZoom.style.transform = "scale(0)";
})


pro.addEventListener("mouseover",()=>{
  profileZoom.style.transform = "scale(1.58)";
  profileZoom.style.background = "#000";
})

pro.addEventListener("mouseout",()=>{
  profileZoom.style.transform = "scale(1.4)";
})




//input message
msg.addEventListener("click",(e)=>{
    
  submit.style.bottom = "126px";
  
})


 //send message
submit.addEventListener("click",(e)=>{
  
   submit.style.bottom = "86px";
  
    //create element
   var text = document.createElement('div');
   text.classList.add('me');
   text.classList.add('msg');
  var div = document.createElement('div');
  var p = document.createElement('p');
  var time = document.createElement('p');
   time.classList.add('time');
  
  //time
  var tm = new Date();
  var msgTime = tm.getHours() + ":" + tm.getMinutes();
  
   p.innerText = msg.value;
   time.innerText = msgTime;
   textContainer.appendChild(text);
   text.appendChild(div);
   div.appendChild(p);
   div.appendChild(time);
  
  //input clear
   msg.value = " ";
   msg.placeholder = "Type a message";
  
  })
  



//calling
call.addEventListener('click',()=>{
  callingContainer.style.right = "0%";
  
  let getImg = theyProfileImg.src;
  let getname = userName.innerText;
  
  callingName.innerText = getname;
  callingProfile.src = getImg;
  audio.play();
  
})



//search
const search = () =>{
  
  options.forEach((e)=>{
    if(e.innerHTML.toUpperCase().indexOf(searchEl.value.toUpperCase()) > -1){
    var result = "";
  }else{
    var result = "none";
  } 
    e.style.display = result;
    
  })
}


//profile upload
function profileUpload(event){
  
  meProfile.src = URL.createObjectURL(event.target.files[0]);
  
}




//time 
setInterval(() =>{

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  
  
  h = h < 10? "0"+h : h;
  m = m < 10? "0"+m : m;
  
  if(h >= 13){
    h = h - 12;
  }
  
 
  
  if(h >= 6){
    battery.classList.replace("fa-battery","fa-battery-half");
  }else{
    battery.classList.replace("fa-battery-half","fa-battery");
  }
  
  //condition
  time.innerText = `${h}:${m}`;
    


});



//convert speech to text
	function  play() {
    
    submit.style.bottom = "126px";

		if('webkitSpeechRecognition' in window) {
			var speechRecognizer = new webkitSpeechRecognition();
			speechRecognizer.continuous = true;
			speechRecognizer.interimResults = true;
			speechRecognizer.lang = 'en-US';
			speechRecognizer.start();

			var finalTranscripts = '';

			speechRecognizer.onresult = function(event) {
				var interimTranscripts = '';
				for(var i = event.resultIndex; i < event.results.length; i++){
					var transcript = event.results[i][0].transcript;
					transcript.replace("\n", "<br>");
					if(event.results[i].isFinal) {
						finalTranscripts += transcript;
					}else{
						interimTranscripts += transcript;
					}
				}
				msg.innerText = finalTranscripts + interimTranscripts;
			};
			speechRecognizer.onerror = function (event) {

			};
		}else {
			msg.innerText = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!!';
		}	
		}