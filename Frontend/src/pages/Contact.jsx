import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "c660c9ce-c6f9-41f7-aa0f-8a24ea887b94",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  return (
   <div className="w-full md:w-1/2 md:pl-4">
  <h3 className="text-lg font-medium text-gray-700 mb-4">
    Contact Information
  </h3>

  <div className="mb-6">
    <h4 className="text-2xl font-bold">
      Debjit <span className="text-blue-500">Ghosh</span>
    </h4>
    <p className="text-gray-600 mt-2">
      MERN Stack Developer passionate about building modern web applications
      using React.js, Node.js, Express.js, and MongoDB.
    </p>
  </div>

  <ul className="space-y-4">
    <li className="flex items-center space-x-3">
      <FaPhone className="text-red-500" />
      <span>+91 7449705009</span>
    </li>

    <li className="flex items-center space-x-3">
      <FaEnvelope className="text-pink-500" />
      <span>ghoshdebjit.2002@gmail.com</span>
    </li>

    <li className="flex items-center space-x-3">
      <FaMapMarkerAlt className="text-green-500" />
      <span>West Bengal, India</span>
    </li>
  </ul>

  <div className="mt-8">
    <h4 className="font-semibold mb-2">Skills</h4>
    <div className="flex flex-wrap gap-2">
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        React.js
      </span>
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Node.js
      </span>
      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
        JavaScript
      </span>
      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
        MongoDB
      </span>
      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        Express.js
      </span>
    </div>
  </div>
</div>
  );
}

export default Contact;
