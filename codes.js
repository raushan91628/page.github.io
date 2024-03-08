  const cv=document.getElementById('mg');
        cv.addEventListener('click', function tak(){
            var a=document.getElementById('ms').value;
            var b=document.getElementById('mk').value;
            var c=document.getElementById('mkk').value;
            var d=document.getElementById('mss').value;
            var e=document.getElementById('msss').value;
            var f=document.getElementById('msms').value;

            if(a=="" || b=="" || c=="" || d=="" || e=="" || f=="")
            {
                alert("Please fill all modetery fill");
                return false;
            } else if(isNaN(e))
                {
                    alert("Only digit are allow for phone number !Please Enter Only Number");
                    return false;
                } else if(e.length<10 || e.length>10)
                {
                    alert("Only 10 Digit Number are allow ! Please Enter Valid Number");
                    return false;
                }
            else if (b!=c)
                {
                    alert("Password does't match");
                    return false;
                } else{
               true;
                    alert(" Successfully Registered");
            }
            window.location.assign("./index.html");
    
        });
