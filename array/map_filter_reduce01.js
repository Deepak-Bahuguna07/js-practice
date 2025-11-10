// // 1. Festival Ribbon Count
// const countBlue = ["red", "blue", "red", "green", "red", "blue"].reduce((acc, current) => {
//   return current === "blue" ? acc + 1 : acc;
// }, 0);

// console.log(countBlue);

// // 2. Stargazing Log
// const visibleConstellations = [["Orion", "Leo"],
// ["Taurus"],
// ["Orion", "Gemini"]];

// console.log(visibleConstellations.flat());

// // 3. Birdwatching Duplicate Removal
// const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
// const uniqueBirds = birds.filter((bird, index) => birds.indexOf(bird) === index);

// console.log(uniqueBirds);

// // 4. Classroom Attendance Check
// const attendance = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
// // const atLeastOneClass = attendance.flat().filter((student, index, arr) => arr.indexOf(student) === index); // with filter
// const atLeastOneClass = attendance.flat().reduce((acc, current) => { // with reduce
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(atLeastOneClass);

// 5. Candy Jar Stocking

// const candy = [[5, 3],
// [2],
// [4, 1]];
// const totalCount = candy.flat().reduce((acc, current) => acc + current);

// console.log(totalCount);

// // 6. Music Rehearsal Notes
// const groupPracticed = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
// const isPracticed = groupPracticed.flat().some(x => x === "do");

// console.log(isPracticed);

// // 7. Weather Sensor Validation

// const temperatures = [[22, 23], [25, 24, 22], [29]];
// const tempBelow32 = temperatures.flat().every(x => x < 32);

// console.log(tempBelow32);

// // 8. Fitness Tracker Miles
// const eachDay = [[2, 3, 2], [4], [1, 1]];
// const totalCount = eachDay.flat().reduce((acc, current) => acc + current);

// console.log(totalCount);

// // 9. Art Workshop Color Variety
// const colors = [["blue", "yellow"], ["yellow", "green"], ["blue"]];
// const uniquecColor = colors.flat().filter((current, index, arr) => arr.indexOf(current) === index);

// console.log(uniquecColor);

// // 10. Library Return Counter
// const ragister = ["Dune", "Dune", "Foundation", "Dune"];
// const bookCount = ragister.reduce((acc, current) => {
//   return current === "Dune" ? acc + 1 : acc;
// }, 0);

// console.log(bookCount);

// // 11. Lunchbox Ingredient Inventory
// const ingredients = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];
// const uniquecIngridents = ingredients.flat().filter((current, index, arr) => arr.indexOf(current) === index);

// console.log(uniquecIngridents);

// // 12. Choir Harmony Review

// const songList = [["la", "la"], ["mi"], ["so", "la"]];
// console.log(songList.flat().some(x => x === "so"));

// // 13. Vegetable Crate Totals
// const weights = [[4, 6], [2, 3, 1], [5]];
// const totalWeight = weights.flat().reduce((acc, current) => acc + current);
// console.log(totalWeight);

// 14. Post Office Parcel Record

// // const uniqeSizes = ["small", "large", "medium", "small"].reduce((acc, current) =>  acc.push(current), []); //why it is throwing error
// const uniqeSizes = ["small", "large", "medium", "small"].reduce((acc, current, i) => {

//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);
// console.log(uniqeSizes);

// // 15. Wildlife Sighting Count
// const animal = ["deer", "deer", "rabbit", "deer"];
// const deerCount = animal.reduce((acc, current) => { return current === 'deer' ? ++acc : acc }, 0);
// console.log(deerCount);

// // 16. Study Group Completion
// const chaptersFinished = [[1, 2], [3], [2, 4, 1]];
// const totalByAGroup = chaptersFinished.flatMap(x => x.reduce((acc, current) => acc + current));
// // const totalByAGroup = chaptersFinished.flatMap(x => x).reduce((acc, current) => acc + current);
// console.log(totalByAGroup);

// // 17. Dance Class Steps

// const sequence = [["step", "tap"], ["turn", "step"]];
// console.log(sequence.flat().some(x => x === "turn"));

// // 18. Garden Watering Amount
// const water = [[1, 2, 1], [3], [2]];
// const totalWater = water.flat().reduce((acc, current) => acc + current);
// console.log(totalWater);

// // 19. Paper Crane Making
// const computes = [[3, 2], [1], [4]];
// const totalComputes = computes.flat().reduce((acc, current) => acc + current);
// console.log(totalComputes);

// // 20. Fruit Basket Inventory
// const fruits = [["apple", "banana"], ["apple"], ["apple", "orange"]];
// const uniqueFruits = fruits.flat().reduce((acc, current) => {
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(uniqueFruits);

// // 21. Classroom Pen Distribution
// const sellOfPens = [[2, 3], [1], [3, 2]];
// const totalSell = sellOfPens.flat().reduce((acc, current) => acc + current);

// console.log(totalSell);

// // 22. Movie Marathon Titles
// const movies = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
// const uniqueMovies = movies.flat().filter((movie, index, arr) => arr.indexOf(movie) === index);
// console.log(uniqueMovies);

// // 23. Name Badge Sorting
// const students = ["A", "B", "A", "C", "B"];
// const attendees = students.filter((student, index, arr) => arr.indexOf(student) === index);
// console.log(attendees);

// // 24. Ice Cream Orders
// const orders = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]];
// const chocolateorder = orders.flat().reduce((acc, curr) => { return curr === "chocolate" ? ++acc : acc }, 0);
// console.log(chocolateorder);

// // 25. Flowers in Bouquets
// const bouquets = [["rose", "lily"], ["lily", "tulip"]];
// const uniqueFlower = bouquets.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);

// console.log(uniqueFlower);


// // 26. Morning Exercise Count
// const repetitions = [[10, 20], [5], [15, 10]];
// const totalRepetitions = repetitions.flat().reduce((acc, curr) => acc + curr);
// const repetitionsPerExercise = repetitions.flatMap(x => x.reduce((acc, curr) => acc + curr));
// console.log(totalRepetitions);
// console.log(repetitionsPerExercise);
// // Total repetitions done.

// // 27. Train Station Announcements
// const stationsAnnounced = [["A", "B"], ["B", "C"], ["A"]];
// const stations = stationsAnnounced.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);

// console.log(stations);


// // 28. Book Club Pages Read
// const groupReading = [[12, 10], [5], [8, 7]];
// const totalPagesRead = groupReading.flat().reduce((acc, curr) => acc + curr);
// console.log(totalPagesRead);

// // 29. Rainfall Data Check
// const measurements = [[3, 4], [5, 2], [1]];
// const isAllPositive = measurements.flat().every(rain => rain > 0);
// console.log(isAllPositive);
// // const a = measurements.flat().every(rain => { console.log(rain);console.log("j"); return true; });
// // const b = [3, 4].every(rain => { console.log(rain);console.log("j"); return true; });
// // console.log(b);

// // 30. Fruit Stand Weight Totals
// const weights = [[4, 3], [2], [3, 1]];
// const totalWeight = weights.flat().reduce((acc, curr) => acc + curr);
// console.log(totalWeight);

// // 31. School Snack List
// const snacks = [["idli", "vada"], ["vada", "upma"]];
// const uniqueSnacksServed = snacks.flat().filter((snack, index, arr) => arr.indexOf(snack) === index);
// console.log(uniqueSnacksServed);

// // 32. Photo Contest Entries
// const sets = [["sunset", "bird"], ["river"], ["sunset"]];
// const uniqueThemes = sets.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(uniqueThemes);

// // 33. Electricity Reading Validation
// const readings = [[110, 115], [118], [109]];
// const isAllBelow120 = readings.flat().every(x => x < 120);
// console.log(isAllBelow120);

// // 34. Jogging Lap Count
// const laps = [[4, 3, 2], [2], [3, 1]];
// const totallap = laps.flat().reduce((acc, curr) => acc + curr);
// console.log(totallap);

// // 35. Music Playlist Repeats
// const songsPlayed = ["track1", "track2", "track1"];
// const occurrencesOfTrack1 = songsPlayed.reduce((acc, curr) => curr === "track1" ? ++acc : acc, 0);
// console.log(occurrencesOfTrack1);

// // 36. Café Order Ingredients
// const ingridents = [["cheese", "bread"], ["tomato"], ["bread"]];
// const uniquecIngridents = ingridents.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(uniquecIngridents);

// // 37. Student Poetry Words
// const words = [["sky", "blue"], ["night"], ["sky", "dark"]];
// const uniquewords = words.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(uniquewords);

// // 38. Gift Box Items
// const items = [["toy", "sticker"], ["candy", "sticker"]];
// const uniqueItems = items.flat().filter((item, index, arr) => arr.indexOf(item) === index);
// console.log(uniqueItems);


// // 39. Gym Routine Count
// const routineCount = [[6, 4], [3, 2]];
// const totalcount = routineCount.flat().reduce((acc, curr) => acc + curr);
// console.log(totalcount)

// // 40. Fish Tank Measurements
// const measurements = [[5, 6], [7], [6]];
// const isAbove7 = measurements.flat().some(x => x > 7);
// console.log(isAbove7);

// // 41. Candy Distribution
// const candies = [[1, 2, 3], [2]];
// const sum = candies.flat().reduce((acc, curr) => acc + curr);
// console.log(sum);

// // 42. Workshop Attendance
// const partipents = [["Tom", "Jerry"], ["Jerry", "Spike"]];
// const uniquePartipents = partipents.flat().filter((item, index, arr) => arr.indexOf(item) === index);
// console.log(uniquePartipents);

// // 43. Space Camp Star Names
// const starNames = [["Vega", "Sirius"], ["Vega", "Rigel"]];
// const uniqueStarNames = starNames.flat().filter((item, index, arr) => arr.indexOf(item) === index);
// console.log(uniqueStarNames);

// // 44. Train Car Passenger Check
// const passengers = [[10, 12], [15]];
// const totalPassengers = passengers.flat().reduce((acc, curr) => acc + curr);
// console.log(totalPassengers);

// // 45. Weekly Grocery Tally
// const quantities = [[3, 5], [2, 1]];
// const totalQuantities = quantities.flat().reduce((acc, curr) => acc + curr);
// console.log(totalQuantities);


// // 46. Tea Tasting Flavors
// const flavors = [["mint", "ginger"], ["lemon"], ["mint"]];
// const uniqueFlavors = flavors.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueFlavors);

// // 47. Photography Exposure Values
// const values = [[2, 3], [1], [4, 2]];
// const isEqualTo4 = values.flat().some(x => x === 4);
// console.log(isEqualTo4);

// // 48. Drawing Class Tools
// const tools = [["pencil", "charcoal"], ["ink"], ["pencil"]];
// const uniqueTools = tools.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueTools);


// // 49. Coin Collection Tally
// const coins = [[1, 1, 2], [2, 1]];
// const totalCoins = coins.flat().reduce((acc, curr) => acc + curr);
// console.log(totalCoins);

// // 50. Cooking Class Spices
// // Spices:
// const spices = [["salt", "pepper"], ["turmeric"], ["salt"]];
// const uniquSpices = spices.flat().reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniquSpices);