# Readme

## Installing

Run "npm install" to install all the packages needed.


### Use of you own Unsplash API-key

Create a .env-file in the root folder.

Paste "REACT_APP_ACCESS_KEY=" followed by you own Access Key from Unsplash.

Example:
REACT_APP_ACCESS_KEY=ABCDEFG

## Start

Run "npm start" to start the app in the browser.

## Notes

### Problem 2

I have created an alternative JSON-file with more data (made up) for more games to check how my functions would work with more dynamic data. If you want to try it there is notes on how at the top of the "Problem2.js" file. 

#### Limitations

As someone who has never used ChartJS before this was challenging but very fun. I am pretty sure I'm not using it 100% in the most efficiant way. The X-axis dates are generated from the "date data" at every data point (and removing dublicates and then sorting the dates) and I would assume there is a way to do it a little differently. Like just generating the dates with even spaces based on the first and last date in the dataset. The way I'm doing it would prove suboptimal if there was a big gap between dates in our data. "2023-01-30 - 2023-02-28" would look the same as "2023-01-30 - 2025-01-30" if there was no data points with that data in between. Probably not hard to figure out how to fix this with a little more time.
