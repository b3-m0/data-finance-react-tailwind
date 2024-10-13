import React from "react";

const Company = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-8" style={{ fontFamily: 'Mukta' }}>
            <h1 className="text-4xl font-bold text-center text-[#233c67] mb-6">
                Welcome to Sunrise
            </h1>
            <p className="text-lg text-center text-gray-700 mb-8">
                At Sunrise, we are dedicated to transforming the lives of foster children by offering them mentorship and support. Our mission is to empower the next generation with the tools they need to succeed and thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        We aim to improve the lives of foster children by providing them with mentors who have faced similar challenges. We believe in fostering resilience and hope.
                    </p>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Our Values</h2>
                    <p className="text-gray-600">
                        Integrity, compassion, and community are at the core of what we do. We strive to create an environment where every child feels valued and supported.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-[#233c67] mb-6">
                Blog Topics
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
                Explore our blogs to learn more about our journey, success stories, and valuable resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#233c67] mb-2">Success Stories</h3>
                    <p className="text-gray-600">
                        Inspiring stories of foster children who have overcome challenges and achieved their dreams.
                    </p>
                    <a href="/success-stories" className="text-[#0029df] underline mt-4 block">
                        Read More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#233c67] mb-2">Mentorship Insights</h3>
                    <p className="text-gray-600">
                        Tips and advice from our mentors on how to navigate life challenges effectively.
                    </p>
                    <a href="/mentorship-insights" className="text-[#0029df] underline mt-4 block">
                        Read More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#233c67] mb-2">Resources for Foster Children</h3>
                    <p className="text-gray-600">
                        A collection of resources available for foster children, including educational programs and community support.
                    </p>
                    <a href="/resources" className="text-[#0029df] underline mt-4 block">
                        Read More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#233c67] mb-2">Events and Workshops</h3>
                    <p className="text-gray-600">
                        Information on upcoming events and workshops aimed at empowering foster children.
                    </p>
                    <a href="/events" className="text-[#0029df] underline mt-4 block">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Company;