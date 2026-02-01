import React from 'react';
import { Play } from 'lucide-react';

const ADRPPage: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
    const platforms = [
        {
            name: 'Qalam360',
            description: 'A comprehensive primary and secondary education platform facilitating seamless learning and school management.',
            image: '/illustrations/qalam360.png',
            color: 'bg-amber-50',
            features: ['LMS', 'Attendance Tracking', 'Result Management'],
            demoLink: '#'
        },
        {
            name: 'LearnNest',
            description: 'Advanced higher education solution supporting universities with research portals and student information systems.',
            image: '/illustrations/learnnest.png',
            color: 'bg-blue-50',
            features: ['Research Database', 'Course Management', 'Alumni Network'],
            demoLink: '#'
        },
        {
            name: 'HospNest',
            description: 'Integrated digital healthcare management system optimizing patient records, appointments, and hospital operations.',
            image: '/illustrations/hospnest.png',
            color: 'bg-red-50',
            features: ['EMR', 'Appointment Scheduling', 'Telemedicine'],
            demoLink: '#'
        },
        {
            name: 'Ejamb',
            description: 'Specialized exam preparation platform helping students succeed in national entrance examinations.',
            image: '/illustrations/ejamb.png',
            color: 'bg-green-50',
            features: ['Mock Tests', 'Performance Analytics', 'Study Guides'],
            demoLink: '#'
        },
        {
            name: 'RedHope',
            description: 'Dedicated platform for sickle cell awareness, community support, and health resource management.',
            image: '/illustrations/redhope.png',
            color: 'bg-rose-50',
            features: ['Community Forum', 'Health Tracking', 'Resource Library'],
            demoLink: '#'
        },
        {
            name: 'Aswaq IT Academy',
            description: 'Empowering the next generation with essential digital literacy and advanced technical skills training.',
            image: '/illustrations/aswaq.png',
            color: 'bg-purple-50',
            features: ['Coding Bootcamps', 'Certification', 'Mentorship'],
            demoLink: '#'
        },
        {
            name: 'Munozi',
            description: 'All-in-one business support platform for SMEs, offering tools for growth, management, and networking.',
            image: '/illustrations/munozi.png',
            color: 'bg-teal-50',
            features: ['Inventory', 'Hiring', 'Marketplace'],
            demoLink: '#'
        }
    ];

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-amber-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Africa Digital Resilience Platform (<span className="text-amber-600">ADRP</span>)
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our suite of interconnected digital solutions designed to transform key sectors across the continent.
                    </p>
                </div>
            </section>

            {/* Products List */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {platforms.map((platform, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>

                                {/* Visual / Illustration Side */}
                                <div className="flex-1 w-full flex justify-center">
                                    <div className={`w-full max-w-md aspect-video ${platform.color} rounded-3xl flex items-center justify-center p-0 shadow-lg overflow-hidden relative group`}>
                                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                            <button className="bg-amber-500 text-white p-4 rounded-full shadow-xl transform scale-0 group-hover:scale-110 transition-transform duration-300">
                                                <Play size={32} fill="currentColor" />
                                            </button>
                                        </div>
                                        <img
                                            src={platform.image}
                                            alt={`${platform.name} illustration`}
                                            className="w-full h-full object-cover animate-float hover:scale-105 transition-transform duration-700"
                                            style={{ animationDelay: `${index * 1}s` }}
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 w-full">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{platform.name}</h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {platform.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {platform.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center text-gray-600">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors flex items-center shadow-md hover:shadow-lg">
                                            <Play className="mr-2" size={18} />
                                            View Demo
                                        </button>
                                        <button onClick={onNavigateToContact} className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                                            Contact Sales
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build a Resilient Future?</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Join the ADRP ecosystem and leverage the power of integrated digital solutions.
                    </p>
                    <button onClick={onNavigateToContact} className="bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        Partner With Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ADRPPage;
