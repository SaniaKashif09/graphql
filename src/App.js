import "./App.css";
import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// "@apollo/react-hooks": "^4.0.0",s
// import { useMutation } from "@apollo/client";
// import { POST_JOB } from "./GraphQL/Mutations";

//catch errors while connecting
const errorLink = onError(({ grapghqlErrors, networkErrors }) => {
  if (grapghqlErrors) {
    grapghqlErrors.map(({ message, location, path }) => {
      alert(`Grapghql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://api.graphql.jobs' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const App = () => {

  // Using react hooks for updating states
  const initialValues = { commitment: "", companyName: "", jobTitle: "", location: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [postJob, { error }] = useMutation(POST_JOB);

  // const post_Job = () => {
  //   postJob({
  //     input: {
  //       ...formValues, ['title']: "p 1",
  //       ...formValues, ['commitment']: 'commitment',
  //       ...formValues, ['companyName']: 'companyName',
  //       ...formValues, ['location']: 'location',
  //       ...formValues, ['email']: 'email',
  //       ...formValues, ['description']: 'description',
  //       ...formValues, ['applyUrl']: 'applyUrl',
  //     },
  //   });

  //   // if (error) {
  //   //   console.log(error);
  //   // }
  // };







  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log("setIsSubmit:" + isSubmit);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])


  //Form Validation:
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const commitmentId = "cjtu8esth000z0824x00wtp1i";
    const companyName = "Trimulabs";

    // setCommitment(!values.commitment);

    if (!values.jobTitle) {
      errors.jobTitle = "Job Title is required!";
    }

    if (!values.commitment) {
      errors.commitment = "Commitment ID is required!";
    }

    else if (!(commitmentId === values.commitment)) {
      errors.commitment = "Commitment ID is not valid! It must be cjtu8esth000z0824x00wtp1i "
    }

    if (!values.companyName) {
      errors.companyName = "Company Name is required!";
    }
    else if (!(companyName === values.companyName)) {
      errors.companyName = "Company name is not valid! It must be Trimulabs"
    }

    if (!values.location) {
      errors.location = "Location is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!"
    }

    if (!values.description) {
      errors.description = "Description is required!";
    }

    if (!values.applyUrl) {
      errors.applyUrl = "URL is required!";
    }

    return errors;
  };

  // Creating UI (form)

  return (

    <>
      <form onSubmit={handleSubmit}>

        <h1>Post Job - Trimulabs</h1>

        <input
          type='text'
          name='jobTitle'
          placeholder="Job Title"
          value={formValues.jobTitle}
          onChange={handleChange} />
        <p> {formErrors.jobTitle} </p>

        <input
          type='text'
          name='commitment'
          placeholder="Commitment"
          value={formValues.commitment}
          onChange={handleChange} />
        <p> {formErrors.commitment} </p>

        <input
          type='text'
          name='companyName'
          placeholder="Company Name"
          value={formValues.companyName}
          onChange={handleChange} />
        <p> {formErrors.companyName} </p>

        <input
          type='text'
          name='location'
          placeholder="Location"
          value={formValues.location}
          onChange={handleChange} />
        <p> {formErrors.location} </p>

        <input
          type='email'
          name='email'
          placeholder="Your Email"
          value={formValues.email}
          onChange={handleChange} />
        <p> {formErrors.email} </p>

        <input
          type='text'
          name='description'
          placeholder="Description Here..."
          value={formValues.description}
          onChange={handleChange} />
        <p> {formErrors.description} </p>

        <input
          type='text'
          name='applyUrl'
          placeholder="Apply URL"
          value={formValues.applyUrl}
          onChange={handleChange} />
        <p> {formErrors.applyUrl} </p>

        <button > Submit </button>

        {Object.keys(formErrors).length === 0 && isSubmit
          ? (<p>Job one is created successfully!</p>)
          : ""
        }
      </form>
    </>

  );
};
export default App;