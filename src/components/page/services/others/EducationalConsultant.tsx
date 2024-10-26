"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { educationalConsultantDataList } from '@/utils/data/services/educationalConsultantData';


const EducationalConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Educational Consultant"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={educationalConsultantDataList}
                pageType='educational'
            />
        </div>
    );
};

export default EducationalConsultant;
