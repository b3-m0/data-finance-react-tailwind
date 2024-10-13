import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission (e.g., send it to your server)
        setSubmitted(true);
        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-8" style={{ fontFamily: 'Mukta' }}>
            <h1 className="text-4xl font-bold text-center text-[#233c67] mb-6">
                Contact Us
            </h1>
            <p className="text-lg text-center text-gray-700 mb-8">
                We would love to hear from you! If you have any questions or feedback, feel free to reach out to us.
            </p>

            {submitted ? (
                <div className="text-center bg-[#f0f8ff] border border-[#99afd7] rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Thank You!</h2>
                    <p className="text-gray-600">
                        Your message has been successfully sent. We will get back to you shortly.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="mb-4">
                        <label className="block text-lg text-[#233c67] mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-[#233c67] mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-[#233c67] mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-[#99afd7] w-full rounded-md font-medium py-3 text-black">
                        Send Message
                    </button>
                </form>
            )}

            <div className="text-center mt-8">
                <p className="text-lg text-gray-700">
                    Or email us directly at <a href="mailto:feedback@sunrise.org" className="text-[#0029df] underline">feedback@sunrise.org</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;