import React from 'react';
import SectionTitle from '../SectionTitle';
import Card from '../VIP/Card';

const Judges = () => {
    const Judges = [
        {
            name: 'Chris Dias',
            imageSrc: './Judges/ChrisDias.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/chrisdias23/',
            githubUrl: 'https://github.com/chrisdias2311'
        },
        {
            name: 'Chris Dias',
            imageSrc: './Judges/ChrisDias.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/chrisdias23/',
            githubUrl: 'https://github.com/chrisdias2311'
        },
        {
            name: 'Chris Dias',
            imageSrc: './Judges/ChrisDias.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/chrisdias23/',
            githubUrl: 'https://github.com/chrisdias2311'
        },
    ];

    return (
        <div id="judges" className="Judges bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
            <SectionTitle>Judges</SectionTitle>
            <div className="flex justify-around mt-10 flex-wrap text-center items-baseline">
                {Judges.map((mentor, index) => (
                    <Card
                        key={index}
                        name={mentor.name}
                        imageSrc={mentor.imageSrc}
                        linkedinUrl={mentor.linkedinUrl}
                        githubUrl={mentor.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Judges;