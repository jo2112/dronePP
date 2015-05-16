
var express = require('express');
var app = express();
var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

    mission.takeoff();// It is suposed to make the drone take off, travel around a 2x2 meters square and then land
  	mission.zero();       // Sets the current state as the reference 
  	mission.altitude(1);  // Climb to altitude = 1 meter 
  	mission.forward(2);   
  	mission.right(2);     
 		mission.backward(2); 
 		mission.left(2);
  	mission.hover(1000);  // Hover in place for 1 second 
  	mission.land()


mission.run(function (err, result){
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});
app.get = ('/', function(request,response) {
        response.write('Hello World')
});
app.listen(3000, function(){
console.log("I'm Here");
}
);
