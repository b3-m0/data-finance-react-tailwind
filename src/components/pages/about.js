import React from "react";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();  // Define navigate using useNavigate

    const goToForm = () => {
        navigate('/form'); // Navigate to the form page
    };

    return (
        <div className='flex flex-col items-center bg-gradient-to-r from-orange-400 via-pink-400 to-pink-600 p-8 min-h-screen text-center'>
            <h1 className='text-4xl font-bold text-white mb-6 drop-shadow-md'>About Sunrise</h1>
            <p className='md:text-2xl sm:text-xl text-lg md:py-4 px-6 max-w-4xl text-gray-100'>
                At <span className="font-bold">Sunrise</span>, we are passionately dedicated to transforming the lives of foster children.
                Our mission is to provide these children with compassionate, experienced mentors—individuals who have faced
                similar challenges in their youth and are now empowered to guide the next generation.
                <br /><br />
                Through mentorship, education, and a vast array of supportive resources, Sunrise offers foster children the tools
                they need to not only survive but thrive. We believe that every child deserves the chance to build a bright future,
                and we are committed to making that vision a reality. Like the rising sun, we bring hope, opportunity, and
                a brighter tomorrow for foster children everywhere.
            </p>
            <div className='mt-8'>
                <button className='bg-white text-orange-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-200 transition duration-300' onClick={goToForm}>
                    Join Us Today
                </button>
            </div>
        </div>
    );
};

export default About;