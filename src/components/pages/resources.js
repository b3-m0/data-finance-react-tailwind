import React from "react";

const Resources = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-8" style={{ fontFamily: 'Mukta' }}>
            <h1 className="text-4xl font-bold text-center text-[#233c67] mb-6">
                Resources to Empower Foster Children
            </h1>
            <p className="text-lg text-center text-gray-700 mb-8">
                At Sunrise, we believe in equipping foster children with the resources they need to thrive. Explore our comprehensive resources designed to support you in various aspects of life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Job Opportunities</h2>
                    <p className="text-gray-600">
                        Discover job opportunities tailored for young adults in foster care. We connect you with employers who value diversity and inclusion.
                    </p>
                    <a href="/job-opportunities" className="text-[#0029df] underline mt-4 block">
                        Learn More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Mental Well-Being</h2>
                    <p className="text-gray-600">
                        Access mental health resources, counseling services, and workshops designed to foster emotional resilience and well-being.
                    </p>
                    <a href="/mental-wellbeing" className="text-[#0029df] underline mt-4 block">
                        Learn More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Community Support</h2>
                    <p className="text-gray-600">
                        Join community groups and events that offer a sense of belonging and friendship. Connect with others who share similar experiences.
                    </p>
                    <a href="/community-support" className="text-[#0029df] underline mt-4 block">
                        Learn More
                    </a>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#233c67] mb-2">Education Resources</h2>
                    <p className="text-gray-600">
                        Explore educational programs and scholarships aimed at helping you achieve your academic goals. We provide the tools you need for success.
                    </p>
                    <a href="/education-resources" className="text-[#0029df] underline mt-4 block">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resources;