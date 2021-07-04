// ⭐️ Example Challenge START ⭐️
/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2? //todo <counter1> has the let-variable inside of a function unlike <counter2>. Also, <counter1>
 *
 * 2. Which of the two uses a closure? How can you tell? //todo counter1 uses closure since there is an inner function accessing a variable from a higher level.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? //! Counter1's code would be best for a situation where you are logging a count and updating that value by running the code again.
 * //? Counter2's code would be best if you want to pass <count> to set up a reference before assigning value.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}
const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  var count = 0;
  for (let i = 0; i < 1; i++)
    for (var a = 0; a < Math.floor(Math.random() * 3); a++) {
      count++;
    }
  return count;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, frames) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < frames; i++) {
    homeScore = homeScore + inning();
    awayScore += inning();
  }
  return {
    home: homeScore,
    away: awayScore,
  };
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningsScore(inning) {
  return {
    home: innings(),
    away: innings(),
  };
}

function scoreboard(getInningsScore, inning, frames) {
  let homeTeam = 0;
  let awayTeam = 0;
  let results = [];
  for (let i = 1; i <= frames; i++) {
    const currentInnings = getInningsScore(inning); //? Current Innings Random Score
    homeTeam += currentInnings.home; //? Targets Home Object Key And Adds Score
    awayTeam += currentInnings.away; //? Targets Away Object Key And Adds Score
    results.push(
      `${i + 1} inning: ${currentInnings.away} - ${currentInnings.home}`
    );
  } //todo Ends For-Loop

  if (homeTeam === awayTeam) {
    results.push(
      `This Game Will Require Extra Innings - Free Baseball Everyone!`
    );
  } else {
    results.push(`Final Score: ${awayTeam} - ${homeTeam}`);
  } // Ends if Statement
  return results;
} //todo Ends Function

console.log(scoreboard(getInningsScore, inning, 9));
