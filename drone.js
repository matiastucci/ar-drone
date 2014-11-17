var Cylon = require('cylon');

Cylon.robot({

  connection: { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
  devices: [{name: 'drone', driver: 'ardrone'}, {name: 'nav', driver: 'ardroneNav'}],

  work: function(my) {

    my.nav.on('batteryChange', function(data) {
      console.log('Battery Change:');
      console.log(data);
    });

    my.drone.takeoff();

    after((5).seconds(), function() { 
      my.drone.up(0.3);
    });

    after((7).seconds(), function() { 
      my.drone.animate("flipAhead", 150);
    });

    after((10).seconds(), function() { 
      my.drone.stop(function(){console.log('stopped')});
    });

    after((13).seconds(), function() {
      my.drone.land(function(){console.log('landed')});
    });

  }
}).start();