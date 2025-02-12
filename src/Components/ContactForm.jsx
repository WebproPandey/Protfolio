import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xxxxxx", // Replace with your EmailJS service ID
        "template_xxxxxx", // Replace with your EmailJS template ID
        formData,
        "user_xxxxxx" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="  w-full ">
      <div className=" text-white  rounded-lg shadow-lg w-full ">
        <form onSubmit={handleSubmit} className="mt-4 w-full flex  flex-col  gap-3">
          <div className="flex  w-full  gap-4">
            <label  className="w-full text-[#888]">
              <h1 className="text-[12px] ">Name</h1>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-[#353334] border-none outline-none rounded "
                required
              />
            </label>
            <label className="w-full text-[#888]" >
            <h1 className="text-[12px] ">Email</h1>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-[#353334] border-none outline-none rounded"
                required
              />
            </label>
          </div>

          <label className="text-[#888]"> 
          <h1 className="text-[12px] text-[#888]">Budget</h1>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-2 bg-[#353334]  border border-gray-600 rounded"
            required
          >
            <option value="">Select Budget</option>
            <option value="Low">3k</option>
            <option value="Medium">3k-8k</option>
            <option value="High">10k</option>
          </select>
          </label>
          <label >
          <h1 className="text-[12px] text-[#888]">Message</h1>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-[#353334] border-none outline-none rounded"
            required
            rows="4"
          ></textarea>
          </label>

          <button
            type="submit"
            className="w-full poppins-extrasemibold  bg-[#DE6231] hover:bg-[#F46C38] p-2 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
