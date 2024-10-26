"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { travelConsultantdataList } from '@/utils/data/services/TravelConsultantData';




const TravelConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Travel Consultant"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={travelConsultantdataList}
                pageType='travel'
            />
        </div>
    );
};

export default TravelConsultant;
