import React, { useState } from "react";
import { contactFormsparkId as formId } from "../profileconfig";
const ContactMeForm = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <div id="contact" className="w-full max-w-md mx-auto p-6">

            <form action={`https://submit-form.com/${formId}`} className="space-y-4">

                <div className="form-group">
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isDarkMode ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"}`}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isDarkMode ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"}`}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${isDarkMode ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"}`}
                        rows="5"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactMeForm;