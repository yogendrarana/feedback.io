
## Guide to @feedmo/form
Open source project to collect feedback from your user with ease.
### Installation

Currently, we only support installation of this package in react. Here, is how you can integrate it with react.

```bash
  npm install @feedmo/form
```
### Setup
This package uses Tailwind CSS for styling. To use it effectively:

1. Configure Tailwind CSS in your React project. Follow the [official Tailwind CSS setup guide](https://tailwindcss.com/docs/guides/vite) for instructions.

2. If you prefer not to use Tailwind CSS, you can create your own form component and use our client and project IDs to receive user feedback. Visit our [official documentation](https://feedmo.vercel.app/docs) for manual implementation details.
### Usage/Examples

```javascript
import "./index.css"
import { ReactForm } from '@feedmo/form'

const App = () => {
  return (
    <div className='grid place-items-center'>
      Feedback Form
      <ReactForm
        contentAlign="end"
        clientId='your-client-id'
        projectId='your-project-id'
        triggerClassName='trigger'
        contentClassName="content"
        submitBtnClassName="submit"
        labelClassName="label"
        inputClassName="input"
        textareaClassName="textarea"
        formClassName="form"
      />
    </div>
  )
}

export default App
```

### Props
The ReactForm component accepts the following props:

- contentAlign: Alignment of the form content ("start", "center", "end")
- clientId: Your client ID
- projectId: Your project ID
- triggerClassName: CSS class for the form trigger
- contentClassName: CSS class for the form content
- submitBtnClassName: CSS class for the submit button
- labelClassName: CSS class for form labels
- inputClassName: CSS class for input fields
- textareaClassName: CSS class for textarea fields
- formClassName: CSS class for the entire form

### Customization
You can customize the appearance of the form by modifying the CSS classes provided in the props.
### Support

For additional help or feature requests, please visit our GitHub repository or contact our support team.