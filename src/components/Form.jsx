import { useEffect, useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmission = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    if (validationErrors.length === 0) {
      const submissionInformation = {
        name,
        email,
        phone,
        phoneType,
        staff,
        bio,
        notifications,
        dateOfSubmission: new Date(),
      };

      setName("");
      setEmail("");
      setPhone("");
      setPhoneType("");
      setStaff("");
      setBio("");
      setNotifications(false);
      setValidationErrors([]);
      setSubmitted(false)

      console.log(submissionInformation);
    }
  };

  useEffect(() => {
    const errors = [];

    if (!name) errors.push("Please enter your name");
    if (!email) errors.push("Please enter your email");
    if (!/.+[@].+\..+/.test(email) && email)
      errors.push("Please enter a valid email");
    if (!phone) errors.push("Please enter your phone number");
    if (phone && !/^\d+$/.test(phone))
      errors.push("Please enter a valid phone number");
    if (phone && !phoneType) errors.push("please select the number type");

    setValidationErrors(errors);
  }, [name, email, phone, phoneType, bio]);

  return (
    <form onSubmit={handleSubmission}>
      {submitted && validationErrors.length && (
        <ul>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="name"
          value={name}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone number:</label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          value={phone}
        />
        <select
          onChange={(e) => setPhoneType(e.target.value)}
          value={phoneType}
        >
          <option value="" disabled>
            Phone type:
          </option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <div>
        <label htmlFor="staff">Staff:</label>
        <div id="staff">
          <input
            name="staffType"
            type="radio"
            onChange={(e) => setStaff(e.target.value)}
            value={staff}
          />
          Instructor
          <input
            name="staffType"
            type="radio"
            onChange={(e) => setStaff(e.target.value)}
            value={staff}
          />
          Student
        </div>
      </div>

      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          type="text"
          onChange={(e) => setBio(e.target.value.slice(0, 280))}
          id="bio"
          value={bio}
        />
        <p>
          {280 - bio.length > 0 ? 280 - bio.length : 0} characters remaining
        </p>
      </div>

      <div>
        <label htmlFor="notifications">Sign up for email notifications:</label>
        <div id="notifications">
          <input
            onChange={(e) => setNotifications(e.target.checked)}
            type="checkbox"
            value={notifications}
          />
          Send me notifications
        </div>
      </div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
