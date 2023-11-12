function solve(speed, area) {
    function speedLimit(limit, zone) {
      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        let status = "";
        let diff = speed - limit;
        if (diff <= 20) {
          status = "speeding";
        } else if (diff <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`
        );
      }
    }
  
    if (area === "motorway") {
      speedLimit(130, "motorway");
    } else if (area === "interstate") {
      speedLimit(90, "interstate");
    } else if (area === "city") {
      speedLimit(50, "city");
    } else if (area === "residential") {
      speedLimit(20, "residential");
    }
}