import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  const handleClick = () => {
    const sectionMap: Record<string, string> = {
      'UI/UX Design': 'uiux-pricing',
      'Website Development': 'development-pricing',
      'Branding': 'branding-pricing',
      'Social Media Management': 'social-pricing'
    };
    const sectionId = sectionMap[title];
    if (sectionId) {
      window.location.href = `/pricing#${sectionId}`;
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 cursor-pointer"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-blue-600" size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;