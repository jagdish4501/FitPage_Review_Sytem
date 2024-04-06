# Documentation (FitPage Review System )

# Note:
## This API is implemented purely using Node.js without any dependencies like Express or Express-Cookie. As a result, the code may appear a bit cluttered due to the absence of middleware and frameworks.
# Event Review API

The Event Review API allows authorized users to submit reviews for events they have attended. Users can rate various aspects of the event experience and provide an overall rating. Organizers can respond to reviews, and there are options for liking and reporting reviews. Additionally, the API supports features such as generating a summary of reviews for a specific event, retrieving ratings for specific criteria, and enabling pagination for efficient handling of large datasets.

## Authentication

Authentication mechanisms are implemented to ensure that only authorized users can submit reviews. Users need to sign up and login to access the review functionality. Unauthorized access attempts are met with a 401 Unauthorized response.

## Endpoints

The following endpoints are available:

- **POST /api/signup**: Allows users to sign up.
- **POST /api/login**: Allows users to log in.
- **GET /api/fetchReview**: Retrieves reviews for a specific event.
- **POST /api/createReview**: Allows authorized users to submit a review for an event.
- **POST /api/reportReview**: Allows authorized users to report a review.
- **POST /api/likeReview**: Allows authorized users to like a review.
- **POST /api/respondToReview**: Allows authorized organizers to respond to reviews.
- **POST /api/createEvent**: Allows authorized organizers to create an event.

## Rating Criteria

Users can rate the following criteria for events:

1. Registration experience
2. Event experience
3. Breakfast experience

## Additional Features

- **sort feature**: Fetching event reviews in sorted order of rating..
- **Retrieve Ratings**: Retrieves ratings for each of the criteria mentioned above.
- **Pagination**: Enables pagination for browsing through ratings/reviews, ensuring efficient handling of large datasets.

## Automatic Review Flagging

Reviews are automatically flagged if they are reported more than five times.

## Usage

To use the API, send requests to the appropriate endpoints with the required parameters. Ensure that users are authenticated before accessing the review functionalities.

# API 
### /api/createReview

```javascript
// Example request to create a review

fetch('/api/createReview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'token=<token>' // Include user token for authentication
  },
  body: JSON.stringify({
  "eventId":"660fc49d5019ef8c401fa060",
  "userId":"660fc23e18f3e207d8df43cc",
  "registrationExperience":1,
  "eventExperience":4,
  "breakfastExperience":5,
  "overallRating":2,
  "type":1,
  "rating":4
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```
### /api/fetchReview

```javascript
// Example request to fetch review
//fetching review in sorted order of rating
fetch('/api/createReview?event_id=660fc49d5099ef8c401fa960&page=1&limit=12&sorted=asc', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

### /api/reportReview

```javascript
// Example request to reportReview

fetch('/api/reportReview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'token=<token>' // Include user token for authentication
  },
  body: JSON.stringify({
  "reviewId":"660fc74d682ed663682c021b",
  "userId":"760fe23e18f3e209d8df43ca",
  "reason":"misleading review"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

### /api/likeReview

```javascript
// Example request to likeReview

fetch('/api/likeReview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'token=<token>' // Include user token for authentication
  },
  body: JSON.stringify({
  "reviewId":"660fc74d682ed663682c021b",
  "userId":"660fc23e18f3e207d8df43ce"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```
### /api/createEvent

```javascript
// Example request to createEvent

fetch('/api/createEvent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'token=<token>' // Include user token for authentication
  },
  body: JSON.stringify({
  "user":"660fc23e18f3e207d8df43cc",
  "name_of_event":"fairwell party",
  "detail_of_event":"mc squar fair well party in mnnit allahabad"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

### /api/login

```javascript
// Example request to login

fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "user_name":"jagdish patel",
  "password":"12345"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

### /api/signup

```javascript
// Example request to login

fetch('/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "user_name":"jagdish patel",
  "email":"kjagdish5796@gmail.com",
  "password":"12345",
  "name":"jaggu bhai"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

### /api/respondToReview


```javascript
// Example request to likeReview

fetch('/api/respondToReview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'token=<token>' // Include user token for authentication
  },
  body: JSON.stringify({
  "reviewId":"660fc74d682ed663682c021b",
  "response":"sab thik ho jayega"
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```