## Getting Started

1. Create an account on our platform. [Click here](https://feedback.io/auth) to create an account.
2. Create a new project and note down your Account ID and Project ID.

## Using Our Feedback API

feedback.io exposes an endpoint for submitting feedback. You will need to provide:
- Account ID
- Project ID

Include these in your request headers as **x-account-id** and **x-project-id** respectively. For security, do not hardcode these IDs in your code. Use environment variables to store them securely.

## Submitting Feedback

To submit feedback, send a POST request to the following endpoint.

```http
  POST https://feedback.io/feedback
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| x-account-id | string | **Required.** Your Account ID |
| x-project-id | string | **Required.** Your Project ID |


#### Request Body

Your request body should be a JSON object with the following structure:

```javascript
{
    "senderEmail": "example@gmail.com",
    "feedbackType": "bug",
    "feedbackMessage": "Some message"
}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| senderEmail | `string` | **Required**. Email address of the feedback sender |
| feedbackMessage | `string` | **Required**. Content of the feedback message |
| feedbackType | `string` | **Optional**. Type of feedback: **bug** or **suggestion** or **message** |


### Successful Response
If your POST request is successful, you will receive a 200 status code along with the following JSON response:

```javascript
{
    "success": true,
    "message": "Feedback sent successfully."
}
```


### Error Response
If the POST request fails, you will receive an appropriate status code depending on the error type, along with a JSON response:
```javascript
{
    "success": false,
    "message": "Some error message"
}
```

Common error status codes:
- 400: Bad Request (e.g., missing required fields)
- 401: Unauthorized (invalid Account ID or Project ID)
- 500: Internal Server Error


### Best Practices
- Always validate user input before sending it to the API.
- Handle potential errors gracefully in your application.
- Consider implementing rate limiting on your end to prevent abuse.


## Code Example
```javascript
fetch.js

fetch('https://feeeedback.vercel.app/feedback', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'account': 'Your-Account-ID',
        'project': 'Your-Project-ID'
    },
    body: JSON.stringify({
        senderEmail: 'abc@gmail.com',
        feedbackType: "message",
        feedbackMessage: "Your site is cool."
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

```javascript
axios.js
import axios from 'axios';

axios.post('https://feeeedback.vercel.app/feedback', {
    senderEmail: 'abc@gmail.com',
    feedbackType: "message",
    feedbackMessage: "Your site is cool."
}, {
    headers: {
        'Content-Type': 'application/json',
        'account': 'Your-Account-ID',
        'project': 'Your-Project-ID'
    },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```