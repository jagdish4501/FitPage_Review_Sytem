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
- **POST /api/reportReview**: Allows users to report a review.
- **POST /api/likeReview**: Allows users to like a review.
- **POST /api/respondToReview**: Allows organizers to respond to reviews.
- **POST /api/createEvent**: Allows organizers to create an event.

## Rating Criteria

Users can rate the following criteria for events:

1. Registration experience
2. Event experience
3. Breakfast experience

## Additional Features

- **Sorting feature:**: Fetching event reviews in sorted order of rating.
- **Retrieve Ratings**: Retrieves ratings for each of the criteria mentioned above.
- **Pagination**: Enables pagination for browsing through ratings/reviews, ensuring efficient handling of large datasets.

## Automatic Review Flagging

Reviews are automatically flagged if they are reported more than five times.

## Usage

To use the API, send requests to the appropriate endpoints with the required parameters. Ensure that users are authenticated before accessing the review functionalities.

## Example Usage

```javascript
// Example request to create a review
fetch('/api/createReview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>' // Include user token for authentication
  },
  body: JSON.stringify({
    eventId: 'event_id',
    registrationExperienceRating: 4,
    eventExperienceRating: 5,
    breakfastExperienceRating: 3,
    overallRating: 4,
    reviewText: 'Great event overall!'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
