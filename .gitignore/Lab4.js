/*
This P5 sketch is a template for getting started with Serial Communication. 
The SerialEvent callback is where incoming data is received 


By Arielle Hein, adapted from ITP Phys Comp Serial Labs
Edited March 13 2018

*/

var serial; //variable to hold an instance of the serial port library
var portName = 'COM3'; //fill in with YOUR port
var sensor1, sensor2;
function setup() {
  createCanvas(400, 300);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);

  //let's figure out what port we're on - useful for determining your port
  // serial.on('list', printList); //set a callback function for the serialport list event
  // serial.list(); //list the serial ports
}

function draw() {
  background('dodgerblue');
  
  if(sensor1<200){
  	fill(48, 216, 54);
  	rect(0,200,600, 200);
  	fill('yellow');
  	ellipse(150, 0, 150, 150);
  }
  if(sensor1>=200 & sensor1<300){
    background(25,126,228);
  	fill(45, 201, 50);
  	rect(0,200,600, 200);
  	fill(255,240,10);
  	ellipse(150, 0, 150, 150);
  }
  if(sensor1>=300 & sensor1<400){
    background(25,126,228);
  	fill(41, 181, 46);
  	rect(0,200,600, 200);
  	fill(250, 236, 29);
  	ellipse(150, 0, 150, 150);
  }
    if(sensor1>=400 & sensor1<500){
    background(23,119,216);
  	fill(36, 148, 40);
  	rect(0,200,600, 200);
  	fill(250, 236, 29);
  	ellipse(150, 0, 150, 150);
  }
      if(sensor1>=500 & sensor1<600){
    background(23,119,216);
  	fill(34, 142, 38);
  	rect(0,200,600, 200);
  	fill(250,221,29);
  	ellipse(150, 0, 150, 150);
  }
      if(sensor1>=600 & sensor1<700){
    background(21,113,206);
  	fill(31, 124, 34);
  	rect(0,200,600, 200);
  	fill(250,221,29);
  	ellipse(150, 0, 150, 150);
  }
      if(sensor1>=700 & sensor1<800){
    background(16,96,176);
  	fill(27, 114, 30);
  	rect(0,200,600, 200);
  	fill(250,191,29);
  	ellipse(150, 0, 150, 150);
  }
      if(sensor1>=800 & sensor1<900){
    background(11,83,155);
  	fill(22, 101, 25);
  	rect(0,200,600, 200);
  	fill(250,191,29);
  	ellipse(150, 0, 150, 150);
  }
      if(sensor1>=900 & sensor1<1000){
    background(0,50,100);
  	fill(19, 87, 21);
  	rect(0,200,600, 200);
  	fill(218, 217, 216);
  	ellipse(150, 0, 150, 150);
  }
  if(sensor1>=1000){
    background(3,33,63);
  	fill(13, 82, 16);
  	rect(0,200,600, 200);
  	fill(218, 217, 216);
  	ellipse(150, 0, 150, 150);
  }

  
  if(sensor2<450){
    fill('red');
  }
  if(sensor2>451 & sensor2<500){
  	fill('orange');
  }
  if(sensor2>501 & sensor2<550){
  	fill('yellow');
  }
  if(sensor2>551 & sensor2<600){
  	fill('green');
  }
  if(sensor2>601 & sensor2<650){
  	fill('skyblue');
  }
  if(sensor2>651 & sensor2<700){
  	fill('blue');
  }
  if(sensor2>701){
  	fill('purple');
  }
  
  ellipse(map(sensor1,0, 1023, 0, width),map(sensor2,0, 1023, 0, height),20,20);
  
}




//all my callback functions are down here:
//these are useful for giving feedback

function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

//THIS IS WHERE WE RECEIVE DATA!!!!!!
//make sure you're reading data based on how you're sending from arduino
function serialEvent(){
	//receive serial data here
  
  //read a string from the serial port
  var inString = serial.readLine(); //reading ASCII
  
  //check if have data
  if(inString.length>0){
   
    //create an array and split at the commas
    var sensorArray = split(inString, ",");
    
    //separate array into our variables
    sensor1 = Number(sensorArray[0]);
    sensor2 = Number(sensorArray[1]);
    
    print(sensor1 + "," + sensor2);
    
  }
  
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
