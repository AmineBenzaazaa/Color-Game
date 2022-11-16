var colors = generateRandomCode(5);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message_Display = document.querySelector("#message_Display");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var ifEasy;

easyBtn.addEventListener("click",function()
{
	ifEasy = true;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomCode(2);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<= squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
}
);
hardBtn.addEventListener("click",function()
{
	ifEasy = false;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomCode(5);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<= squares.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
}
);

colorDisplay.textContent = pickedColor;

reset.addEventListener("click",function()
{
	
	if (ifEasy == true){
		colors = generateRandomCode(2);
	}
	else{
		colors = generateRandomCode(5);
	}
	
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i<= squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	
	
}
);
reset.addEventListener("click",function()
	{
		messageDisplay.textContent = "";
		reset.textContent = "New Colors";
		h1.style.backgroundColor = "#steelblue";
	}
	
	);


for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			h1.style.backgroundColor = clickedColor;
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
			
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
       for (var i=0; i<=squares.length;i++)
        {
            squares[i].style.backgroundColor = color;
        }
};
function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}
function generateRandomCode(num)
{
	var arr = [];

	for(var i=0; i<=num;i++){
		arr.push(num_generator())
	}
	return arr;
}
function num_generator(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
