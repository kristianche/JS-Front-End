function vacation(people, type, day) {
    let price = 0;
    let totalPrice = 0;
    if (type === "Students") {
      if (day === "Friday") {
        price = 8.45;
      } else if (day === "Saturday") {
        price = 9.8;
      } else if (day === "Sunday") {
        price = 10.46;
      }
    } else if (type === "Business") {
      if (day === "Friday") {
        price = 10.9;
      } else if (day === "Saturday") {
        price = 15.6;
      } else if (day === "Sunday") {
        price = 16;
      }
    } else if (type === "Regular") {
      if (day === "Friday") {
        price = 15;
      } else if (day === "Saturday") {
        price = 20;
      } else if (day === "Sunday") {
        price = 22.5;
      }
    }
  
    totalPrice = price * people;
  
    if (type === "Students" && people >= 30) {
      totalPrice *= 0.85;
    }
  
    if (type === "Business" && people >= 100) {
      totalPrice = price * (people - 10);
    }
  
    if (type === "Regular" && 10 <= people && people <= 20) {
      totalPrice *= 0.95;
    }
  
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }