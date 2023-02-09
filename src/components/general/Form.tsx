import Image from "next/image";
import { FC, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SubmitButton } from "./Button";

const Form: FC = () => {
  const [success, setSucess] = useState("");
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };
  const [valid, setValid] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(formData);
  const form: any = useRef();

  const validate = (values: any) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Full Name is required";
    } else if (values.fullname.length < 2) {
      errors.fullname = "Enter Full Name";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setValid(true);
    emailjs
      .sendForm(
        "service_dkzosll",
        "template_jykagyg",
        form.current,
        "2H2gbL0yU6mkgBTUA"
      )
      .then(
        (result) => {
          setSucess(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(success);
    // if (Object.keys(formErrors).length === 0 && valid) {
    //   setFormData(initialValues);
    // }
  };

  return (
    <div className="shadow-2xl min-h-[41rem] sm:min-h-[43rem] bg-white rounded-lg py-5 px-3 sm:px-5 w-full lg:w-[40%]">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5">
          <Image
            src="/img/check-icon.svg"
            alt="check-icon"
            width={50}
            height={50}
          />
          <h3 className="text-secondary font-medium text-base sm:text-2xl my-auto">
            Contact Form
          </h3>
        </div>
        {success ? (
          <div className="mb-6 px-1.5 sm:px-4 my-auto mt-40 flex flex-col justify-center align-middle gap-5">
            <svg
              className="flex-shrink-0 h-16 w-16 mx-auto"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                fill="currentColor"
                className="fill-[green]"
              />
              <path
                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                fill="currentColor"
                className="fill-white"
              />
            </svg>
            <p className="text-black text-base sm:text-lg text-center">
              Thank you for your submission. I will get back to you as soon as
              possible.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 px-1.5 sm:px-4 mt-6">
              <label
                htmlFor="name-input"
                className="block text-sm sm:text-base font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name-input"
                name="fullname"
                onChange={handleChange}
                value={formData.fullname}
                placeholder="Ameh Abraham"
                className={`bg-gray-50 ${
                  formErrors.fullname
                    ? "focus:ring-[red] focus:border-[red] border-[red]"
                    : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                } border shadow-sm text-gray-900 text-sm sm:text-base rounded-md block w-full px-2.5 py-3`}
              />
              {formErrors.fullname && (
                <p className="text-[red] text-sm mt-1">{formErrors.fullname}</p>
              )}
            </div>
            <div className="mb-6 px-1.5 sm:px-4">
              <label
                htmlFor="email-input"
                className="block text-sm sm:text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="abraham@gmail.com"
                className={`bg-gray-50 ${
                  formErrors.email
                    ? "focus:ring-[red] focus:border-[red] border-[red]"
                    : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                } border shadow-sm text-gray-900 text-sm sm:text-base rounded-md block w-full px-2.5 py-3`}
              />
              {formErrors.email && (
                <p className="text-[red] text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-6 px-1.5 sm:px-4">
              <label
                htmlFor="message-input"
                className="block text-sm sm:text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="message-input"
                name="message"
                onChange={handleChange}
                value={formData.message}
                className={`bg-gray-50 h-64 ${
                  formErrors.message
                    ? "focus:ring-[red] focus:border-[red] border-[red]"
                    : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                } border shadow-sm text-gray-900 text-sm sm:text-base rounded-md block w-full px-2.5 py-3`}
              ></textarea>
              {formErrors.message && (
                <p className="text-[red] text-sm mt-1">{formErrors.message}</p>
              )}
            </div>
            <div className="px-1.5 sm:px-4 mt-3">
              <SubmitButton
                type="submit"
                className="w-full bg-primary hover:bg-secondary-900 py-4 text-white font-medium sm:font-semibold rounded text-sm sm:text-base"
              >
                {" "}
                Send Message
              </SubmitButton>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default Form;
