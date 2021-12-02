## Advent of Code 2021
https://adventofcode.com/2021

---

### Instructions
#### Setup:
* Fork or clone this repo
  * If forking, clone the forked repo: `git clone https://github.com/$YOUR_USERNAME/aoc-2021.git`
* `cd` into the `aoc-2021` directory 
* Run `npm i` to install the dependencies
  

#### Logging Solutions:
* From the root folder, run `DAY=$DAY npm run solve` (which runs `node solutions/$DAY/index.js input/$DAY.txt`)
  * Replace `$DAY` with the day you want to see the results for (e.g. `05`)


#### Fetching and Saving Puzzle Inputs:
* Find the `session` cookie value for your AoC account
* Export it into your command line by running `export SESSION=$SESSION`
  * Replace `$SESSION` with your `session` cookie value
* Run `INPUT=$INPUT DAY=$DAY npm run fetch:input`
  * Replace `$INPUT` with the puzzle day (e.g. `5`), and replace `$DAY` with the puzzle day prepended with a `0` (e.g. `05`)
  
> _**Note:**_
> _AoC does not use a leading `0` in their puzzle numbers._
> _This is merely a convention used within this repository for organization._
> _Please be sure to prepend the `0` when setting the `DAY` variable — the npm scripts will not work otherwise._


#### Testing:
  * Run `npm test` for all test suites
    * To execute in watch mode, run `npm run test:watch-all`
  * Run `DAY=$DAY npm run test:single` (which runs `mocha -- $PATH_TO_TEST_FILE`) to run a single test file
    * To execute in watch mode, run `DAY=$DAY npm run test:watch-single` (which runs `mocha -- --watch $PATH_TO_TEST_FILE`)
    * Replace `$DAY` with the day you want to test solutions for (e.g. `05`)
