var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//var letters = '0123456789ABCDEF';
//var color = '#';

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
		//changeBG(color);
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count); //displaying how many times the app has been launced paused and resumed
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
        //Listening for resume event
		document.addEventListener("resume", onResume, false);
		//listening for pause event
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();

    }
getRandomColor();
    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }



 
/*function getRandomColor()
{
    for (var i = 0; i < 6; i++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBG(hexxy)
{
   document.body.style.backgroundColor = hexxy;	
}*/