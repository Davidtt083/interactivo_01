
    $(document).scroll(function() {

        myID = document.getElementById("img-01");
        myID2 = document.getElementById("texto");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 500) {
                myID.style.opacity = '1';
                myID.className = "animate__bounceIn"

                myID2.style.opacity = '1';
                myID2.className = "animate__bounceIn"
                
            } 
        };

        window.addEventListener("scroll", myScrollFunc);
    });
