"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { realsStateDataList } from '@/utils/data/services/realsStateData';




const RealStateConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Real State Consultant"
                description="Our team is dedicated to helping you find the perfect rental property in Japan."
                serviceData={realsStateDataList}
                pageType='realstate'
            />
        </div>
    );
};

export default RealStateConsultant;
