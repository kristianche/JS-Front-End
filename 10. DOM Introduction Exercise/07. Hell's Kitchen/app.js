function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const input = Array.from(JSON.parse(document.querySelector('textarea').value))
      const bestRestaurant = document.querySelector('#bestRestaurant p')
      const workers = document.querySelector('#workers p')
      const restaurants = {}
      let maxAvgSalary = Number.MIN_VALUE
      let restaurantBestSalary = 0;
      let bestSalary = 0;
      let restaurantWithMaxAvgSalary = ''
      let workersCount = 0;
      let totalSalary = 0;
      let avgSalary;

      for (let record of input){
         let restaurant = record.split(' - ')[0]

         if (Object.keys(restaurants).includes(restaurant)){
               let restaurantInfo = record.split(' - ')[1].split(', ')
               let openedRestaurant = restaurants[restaurant]
               for (let workerAndSalary of restaurantInfo){
                  let worker = workerAndSalary.split(' ')[0]
                  let salary = Number(workerAndSalary.split(' ')[1])
                  openedRestaurant[worker] = salary
               }
         } else {
            let restaurantInfo = record.split(' - ')[1].split(', ')
            restaurants[restaurant] = {}
            for (let workerAndSalary of restaurantInfo){
               let worker = workerAndSalary.split(' ')[0]
               let salary = Number(workerAndSalary.split(' ')[1])
               restaurants[restaurant][worker] = salary
         }
         }
      }

      for (let key of Object.keys(restaurants)){
         for (let worker of Object.keys(restaurants[key])){
            workersCount++;
            let workerSalary = Number(restaurants[key][worker])
            totalSalary += workerSalary

            if (workerSalary > bestSalary){
               bestSalary = workerSalary
            }
         }

         avgSalary = totalSalary / workersCount

         if (avgSalary > maxAvgSalary){
            maxAvgSalary = avgSalary
            restaurantWithMaxAvgSalary = key
            restaurantBestSalary = bestSalary
         }

         workersCount = 0
         totalSalary = 0
         bestSalary = 0
      }

      let bestRestaurantOutput = `Name: ${restaurantWithMaxAvgSalary} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${restaurantBestSalary.toFixed(2)}`
      let workersOutput = ``
      const keyValueArray = Object.entries(restaurants[restaurantWithMaxAvgSalary]);
      keyValueArray.sort((a, b) => b[1] - a[1]);
      const sortedObject = Object.fromEntries(keyValueArray);

      for (let worker of Object.keys(sortedObject)){
         let salary = Number(sortedObject[worker])
         workersOutput += `Name: ${worker} With Salary: ${salary} `
      }

      bestRestaurant.textContent += bestRestaurantOutput
      workers.textContent += workersOutput
   }
}