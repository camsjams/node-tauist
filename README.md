# node time constants
Check your caching layer before running your promises

## Current Version 1.0.0

## Platforms / Technologies
* [nodejs](http://nodejs.org/)

## Install
>       $ npm install time-constants --save

## There are two objects exposed
        ```javascript
        var timecon = require('time-constants');
        // seconds
        timecon.s;
        
        // milliseconds
        timecon.ms;
        ```

## Usage
        ```javascript
        // load into your script
        var timecon = require('time-constants');
        
        // use in your caching layers
        
        // example: express static
        app.use(express.static(__dirname + '/public', { maxAge: timecon.ms.oneDay }));
        
        // example: Node redis (npm install redis)
        client.expire('my:key:here', timecon.s.oneHour);
        
        // apply directly to the forehead
        ```
        
## Current available times

* halfMinute
* oneMinute
* fiveMinutes
* tenMinutes
* thirtyMinutes
* oneHour
* twoHours
* threeHours
* fourHours
* fiveHours
* sixHours
* oneDay
* twoDays
* sevenDays
* thirtyDays
* sixMonths