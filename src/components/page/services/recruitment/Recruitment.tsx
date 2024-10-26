"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { recruitmentDataList } from '@/utils/data/services/recruitmentData';







const Recruitment: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Recruitment"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={recruitmentDataList}
                pageType='recruitment'
            />
        </div>
    );
};

export default Recruitment;
