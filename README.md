## Getting Started

1. Create an account on our platform. [Click here](https://feedbackio.vercel.app/auth) to create an account.
2. Create a new project and note down your Account ID and Project ID.

## Using Our Feedback API

feedback.io exposes an endpoint for submitting feedback. You will need to provide:
- Client ID
- Project ID

Include these in your request headers as **x-client-id** and **x-project-id** respectively. For security, do not hardcode these IDs in your code. Use environment variables to store them securely.

## Submitting Feedback

To submit feedback, send a POST request to the following endpoint.

```
  POST https://feedbackio.vercel.app/api/v1/feedback
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| x-client-id | string | **Required.** Your Client ID |
| x-project-id | string | **Required.** Your Project ID |


#### Request Body

Your request body should be a JSON object with the following structure:

```javascript
{
    "email": "example@gmail.com",
    "type": "bug",
    "feedback": "Some message"
}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| email | `string` | **Required**. Email address of the feedback sender |
| feedback | `string` | **Required**. Content of the feedback message |
| type | `string` | **Required**. Type of feedback: **bug** or **feature** or **suggestion** |


### Successful Response
If your POST request is successful, you will receive a 200 status code along with the following JSON response:

```javascript
{
    "success": true,
    "message": "Feedback sent successfully."
}
```


### Error Response
If the POST request fails, you will receive an appropriate status code depending on the error type, along with a JSON response. Common error status codes:
- 400: Bad Request (e.g., missing required fields)
- 401: Unauthorized (invalid Account ID or Project ID)
- 500: Internal Server Error
  
```javascript
{
    "success": false,
    "message": "Some error message"
}
```


### Best Practices
- Always validate user input before sending it to the API.
- Handle potential errors gracefully in your application.
- Consider implementing rate limiting on your end to prevent abuse.


## Code Example

```javascript
import axios from 'axios';

axios.post('https://feedbackio.vercel.app/api/v1/feedback', {
    email: 'abc@gmail.com',
    type: "message",
    feedback: "Your site is cool."
}, {
    headers: {
        'Content-Type': 'application/json',
      'account-id': 'Your-Client-ID',
        'project-id': 'Your-Project-ID'
    },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```