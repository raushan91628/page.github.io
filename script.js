 const cv=document.getElementById('mg');
        cv.addEventListener('click', function tak(){
            var a=document.getElementById('ms').value;
            var b=document.getElementById('mk').value;
            if(a=="" || b=="")
            {
                alert("Please fill all modetery fill");
                return false;
            }
            else if (a=="8877742073" && b=="ks")
                {
                    alert("Login Successfully");
                  true ;
                } else{
                    alert("please Enter valid Phone number or Password ! Phone number should be 10 digit")
               return false;
    
            }
            window.location.assign("./info.html");
    
        });
