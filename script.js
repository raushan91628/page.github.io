 const cv=document.getElementById('mg');
        cv.addEventListener('click', function tak(){
            var a=document.getElementById('ms').value;
            var b=document.getElementById('mk').value;
            if(a=="" || b=="")
            {
                alert("Please fill all modetery fill");
                return false;
            } else if(isNaN(a))
                {
                    alert("Only digit are allow for phone number !Please Enter Only Number");
                    return false;
                } else if(a.length<10 || a.length>10)
                {
                    alert("Only 10 Digit Number are allow ! Please Enter Valid Number");
                    return false;
                }
            else if (a=="9708589431" && b=="kss@123")
                {
                    alert("Login Successfully");
                  true ;
                } else{
                    alert("please Enter valid Phone number or Password ! Don't match your phone number or password")
               return false;
    
            }
            window.location.assign("./info.html");
    
        });
