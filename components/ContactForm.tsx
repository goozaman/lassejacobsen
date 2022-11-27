import { FunctionComponent, useState } from "react";
import { InputField } from "./InputField";

interface ContactFormProps {
  className?: string;
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  className,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const validateEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async () => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setName("");
    setEmail("");
    setMessage("");

    // TODO: Add feedback
  };

  return (
    <form className={className}>
      <InputField
        className="mb-4"
        id="name"
        label="Name"
        placeholder="John Doe"
        onChange={setName}
        value={name}
      />

      <InputField
        className="mb-4"
        id="email"
        label="Email"
        placeholder="johndoe@awesome.com"
        onChange={setEmail}
        value={email}
      />

      <InputField
        className="mb-4"
        id="message"
        label="Message"
        rows={10}
        placeholder="Hey Christian! Have you ever ...?"
        onChange={setMessage}
        value={message}
      />

      <div className="mb-4 flex items-center justify-between">
        <button
          className="focus:shadow-outline rounded bg-slate-800 py-2 px-4 font-bold text-white hover:bg-slate-600 focus:outline-none"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
