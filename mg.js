
    
                var typeData = new Typed("#role", {
                    strings: [
                        "Full stack Developer",
                        "Web Developer",
                        "Backend Developer",
                        "Frontend Developer",
                        "Software developer",
                        "Coder",
                    ],
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 100,
                });
                const nc = document.getElementById('cccx');
                const cn = document.getElementById('cxcx');
                nc.addEventListener('click', function mdfy(){
                    nc.innerHTML=`https://www.linkedin.com/in/raushan-kumar-149902227  `;
                });
                cn.addEventListener('click', function mdfys(){
                    cn.innerHTML=`https://github.com/raushan91628` ;
                });

                const bom=document.getElementById('bit');
    const homs=document.getElementById('bms');
    const pp=["Full stack Developer",
                        "Web Development",
                        "Backend Development",
                        "Frontend Development",
                        "Software development",
                        "Problem Solving",
                        "Programing",];
    let c=0;
    bom.addEventListener('click', function handleclick(){
        c=(c+1)%pp.length;
       
            homs.innerHTML=pp[c];
        
    
    });
    const bos=document.getElementById('kkk');
    bos.addEventListener('click', function hmr(){
        homs.innerHTML=" Full stack Developer <br>Web Development<br>Backend Development<br>Frontend Development<br>Software development<br>Problem Solving<br>Programing";
    });
    const bok=document.getElementById('cnk');
    const box=document.getElementById('hsc');
    const bob=document.getElementById('hssc');
    const bon=document.getElementById('kkkbs');
    const bonn=document.getElementById('knc');
    const bonx=document.getElementById('knccs');
    bok.addEventListener('click',function bbs(){
        // bom.touppercase();
        bonx.innerHTML="HTML5<br>CSS3 <br>Java<br>JavaScript<br>Python<br>React Js<br>C++<br>Microsoft Office <br>Github <br>Operating System<br>Analytical Thinking<br>communication<br>Team Work <br>Time Management<br>Leadership<br>Time Management ";
        bonx.style.fontSize="100px";
        bonx.style.color="blue";
        bonn.remove('knc');
    });
    const jjk=document.getElementById('hns');
    const jjs=document.getElementById('ld');
    const jjv=document.getElementById('vcv');
    const jjf=document.getElementById('lk');

    jjk.addEventListener('click',function na(){
        jjv.innerHTML='<img src="image/sql.jpg" style="width:900px; height:500px" ><br>SQL<br><br><br><img src="image/html.jpg" style="width:900px; height:500px" ><br>HTML<br><br><br><br><img src="image/Cybernaya.jpg" style="width:900px; height:500px; text-align:center;" ><br> Participation Certificate<br>Cybernaya 2.0<br><br><br><br><img src="image/hackaton.jpg" style="width:900px; height:500px; text-align:center;" ><br>Hackathon certificate<br>Cybernaya 2.0<br><br><br><img src="./a.png" style="width:900px; height:500px" ><br>Cybernaya 1.0';
        jjs.remove('ld');
        jjf.remove('lk');
        jjv.style.fontSize="50px";
        jjv.style.color="blue";
    });
   
        var image=document.getElementById('rk5');
        var imasa=document.getElementById('rk6');
        var imak=document.getElementById('rk7');
        var imas=document.getElementById('rk8');
       image.addEventListener('click', function ima(){
        image.innerHTML='<img src="image/Cybernaya.jpg" style="width:900px; height:500px; text-align:center;" ><br><br><br><br><br><img src="image/hackaton.jpg" style="width:900px; height:500px; text-align:center;" >';
        imasa.remove('rk6');
        imak.remove('rk7');
        imas.remove('rk8');
       });
       imasa.addEventListener('click', function imp(){
        imasa.innerHTML='<img src="image/html.jpg" style="width:900px; height:500px" >';
        image.remove('rk5');
        imak.remove('rk7');
        imas.remove('rk8');
       });
       imas.addEventListener('click', function imfk(){
        imas.innerHTML='<img src="image/sql.jpg" style="width:900px; height:500px" >';
        image.remove('rk5');
        imasa.remove('rk6');
        imak.remove('rk7');
       });
       imak.addEventListener('click', function imfk(){
        imak.innerHTML='<img src="./a.png" style="width:900px; height:500px" >';
        image.remove('rk5');
        imasa.remove('rk6');
        imas.remove('rk8');
       });

       const zxx=document.getElementById('zxz');
    const zzz=document.getElementById('hnl1');
    const zzm=document.getElementById('hnl2');
    const zzn=document.getElementById('ho5');
    const zzb=document.getElementById('ho7');
    const vvxz=document.getElementById('xzx');

zxx.addEventListener('click' , function zx(){
    vvxz.innerHTML='<img src="image/1708161254251.jpg" style="width:900px; height:500px; text-align:center;" ><BR>CYBERNAYA 2.0<br><br><br><img src="image/1708161254328.jpg" style="width:900px; height:500px; text-align:center;" ><br> MotihariMeetup<br> Ramsay Plaza Hotel<br><br><br><img src="image/1708161254316.jpg" style="width:900px; height:500px; text-align:center;" ><br>TC Bootcamp <br> Winner<br><br><br><img src="image/1708161254304.jpg" style="width:900px; height:500px; text-align:center;" ><br> MotihariMeetup<br><br><br><img src="image/1708161254328.jpg" style="width:900px; height:500px; text-align:center;" ><br>MotihariMeetup<br>Ramsay Plaza Hotel<br><br><br><img src="image/1708161254291.jpg" style="width:900px; height:500px; text-align:center;" ><br> MotihariMeetup<br> Yes Hotel<br><br><br><img src="image/1708161254340.jpg" style="width:900px; height:500px; text-align:center;" ><br>Motiharimeetup<br> Ramsay Plaza Hotel<br><br><br><img src="image/1708161254265.jpg" style="width:900px; height:500px; text-align:center;" ><br>MotihariMeetup<br> Sai Suta Bar Hotel';
    zzn.remove('ho5');
    zzb.remove('ho7');
    zzz.remove('hnl1');
    zzm.remove('hnl2');
});
const vv=document.getElementById('h2');
        vv.addEventListener('click', function home(){
           if(vv.style.display="block" )
           {vv.innerHTML="I'm looking job for software <br>developer in any city of India";
            vv.style.color="green";
            vv.style.color.hover="blue";
            vv.style.display="";
        }else{
            vv.style.display="none";
        }
        });
        const mj=document.getElementById('mjk');
        const mx=document.getElementById('ch');
        mj.addEventListener('click', function home(){
            mj.innerHTML="<br><br><br><br><br><br><br><br><br><br><br><br> I am raushan kumar student of LND College BCA final semester. Recedently my 5th semester exam has been completed. I have completed 10th and 12th from shri mahiveer +2 high school pipra , east champaran. I belong to East champaran , bihar. Currently I live at agarwa in Motihari . I have created online job serching website  in learning period of BCA. the perpus of this webste is anyone can compain in any query. I have used three different programming language like HTML , CSS and JavaScript used HTML for bast structure of the webste and used CSS for bast design of the webste like this any people are open the website and websute are see different color and stylest of the website and used javascript to working of the website like any people are click the button how will open the next page of the website and will open different structure.Finally website are work.Currently , I have paeticipated second version of CYBERANYA organiged by depaetment of bachelor of computer application(BCA) of LND college. many competiton has been organised by CYBERNAYA. I have participated in three different competiton like software development( Name of competiton is HACKATHON competition) , PPT competition and Business idea. I have participated in HACKATHON competition, In this event , I have created job searching website in python language. The perpus of this website is anyone can search job in any city by this website while sitting at home in any field.And second competition is PPT presentation, I have participated in PPt presentation competition . In this event i,I have make a project of ANDROID SCAM and last competition of Business idea ,I have paeticipated in this event and make a project of labour management system. It felt great to participated in CYBERANYA as it was biggest technical fest of east champaran. My strangths are good communication skill , positive thinking , problem solving skill and analystics skill. In short time my goal is Fullstack web development and in large time my goal is Sinear software Developer. ";
            mj.style.color="red";
            mj.style.color.hover="blue";
            mx.remove('ch');
            vv.style.textAlign="center";
            mj.style.fontSize="cover";
            mj.style.backgroundSize="cover";
            mj.style.marginLeft="250px";
            mj.style.marginRight="150px";
            mj.style.textAlign="end";

        });

        const kh=document.getElementById('kh');
        const khh=document.getElementById('bv');
        const khhh=document.getElementById('mjsd');
        kh.addEventListener('click', function ns(){

            khh.innerHTML='<img src="image/Screenshot (103).png" style="width:900px; height:500px" ><br> Rock Scissors Paper<br> Project:-<a  href="https://raushan91628.github.io/game.github.io/"> Live </a><br><br><br><br><br><img src="image/Screenshot (104).png" style="width:900px; height:500px" ><br> Currency Conveterr<br> Project:-<a  href="https://raushan91628.github.io/Currency.github.io/"> Live </a><br><br><br><br><br><br><br><img src="image/Screenshot (105).png" style="width:900px; height:500px" ><br> College Website<br> Project:-<a  href="./web.html"> Live </a><br><br><br><br><img src="image/Screenshot (106).png" style="width:900px; height:500px" ><br> Police Patnership With People Website <br> Project:-<a  href="https://raushan91628.github.io/comp.github.io/"> Live </a><br><br><br><br><img src="image/Screenshot (107).png" style="width:900px; height:500px" ><br> Solar System<br> Project:-<a  href="./solar_system.html"> Live </a><br><br><br><br><img src="image/Screenshot (108).png" style="width:900px; height:500px" ><br> Registatio Form<br> Project:-<a  href="https://raushan91628.github.io/Registation.github.io/"> Live </a><br><br><br><Br><img src="image/Screenshot (110).png" style="width:900px; height:500px" ><br> Find Weather In Any Place<br> Project:-<a  href="https://raushan91628.github.io/Weather.github.io/"> Live </a><br><br><br><br><br>';
            khhh.remove('mjsd');
        });

        const cct = document.getElementById('dds');
    const cctt = document.getElementById('mnc');
    const ccts = document.getElementById('cnnks');
    const cctsx = document.getElementById('nbv');
    const cctsc = document.getElementById('vbn');
    const cctscc = document.getElementById('cnnk');
    ccts.addEventListener('click' ,function ccy(){
        cct.innerHTML=" HTML5 <BR>CSS3<br>Java<br>JavaScript<br>React Js <br>C++<br>Python<br>Microsoft Office<br>Github<br>Operation System";
            cct.style.backgroundColor="white";
            cct.style.fontSize="100px";
            cct.style.color="orange";
            cctt.remove('mnc');
    });

    cctscc.addEventListener('click' ,function ccy(){
        if(cctsx.style.display="block")
        {
        cctsx.innerHTML="Analytical Thinking<br>communication<br>Team Work <br>Time Management<br>Leadership<br>Time Management";
        cctsx.style.backgroundColor="white";
        cctsx.style.fontSize="100px";
        cctsx.style.color="orange";
        cctsc.remove('vbn');
        }else{
            cctsx.style.display="none";
        }
    });
    const bvc=document.getElementById('n3');
    const randIdx = Math.floor(Math.random() * 10000);
    bvc.addEventListener('click',function takevalue(){
        // console.log("Thank you For Giving Your Feedback").style.textAlign="center";
    var Name = document.getElementById
    ("n1").value;
    var Email = document.getElementById
    ("n11").value;
    var Phone = document.getElementById
    ("n12").value;
    var comment = document.getElementById
    ("n2").value;
    if(Name=="" || Email=="" || Phone=="" || comment=="")
        {
             alert("Please Fill All Modetery Field");
             return false;
             } else if(Phone.length<10 || Phone.length>10)
                {
                    alert("Only 10 Digit Number are allow ! Please Enter Valid Number");
                    return false;
                }
                else if(isNaN(Phone))
                {
                    alert("Only digit are allow !Please Enter Only Number");
                    return false;
                }
             else {
             true;
                 alert("Your Response has been submited,Please wait when owner will be check.")      
    }
    document.write("Thank you For Giving Your Feedback","<br><br><br>");
    document.write("your Reciving Number is:-" + randIdx + "<br>");
    document.write("your Name is:-" + Name + "<br>");
    document.write("your Email is:-" + Email + "<br>");
    document.write("your Phone id is:-" + Phone + "<br>");
    document.write("your Comments is:-" + comment + "<br>");
    Name.style.fontSize="50px";
    
} );
      


//                 var slider_img = document.querySelector('#bms');
// var images = ['ABHISHEK KUMAR', 'a.png', 'ABHISHEK KUMAR.jpg'];
// var i = 0;

// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "images/"+images[i]);
// }
