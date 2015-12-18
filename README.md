# Tauist: node time constants
Tauist provides a list of constants for use in cache expiration or TTLs.

Tau is the time constant of any device, such as an RC circuit.

## Current Version 1.0.1

## Platforms / Technologies
* [nodejs](http://nodejs.org/)
* [What is tau?](https://en.wikipedia.org/wiki/RC_time_constant)

## Install
>       $ npm install tauist --save

## There are two objects exposed

```javascript
var tauist = require('tauist');
// seconds
tauist.s;

// milliseconds
tauist.ms;
```

## Usage

```javascript
// load into your script
var tauist = require('tauist');

// use in your caching layers

// example: express static
app.use(express.static(__dirname + '/public', { maxAge: tauist.ms.oneDay }));

// example: Node redis (npm install redis)
client.expire('my:key:here', tauist.s.oneHour);

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