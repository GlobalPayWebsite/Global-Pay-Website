"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { sswDataList } from '@/utils/data/services/sswData';







const Ssw: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="SSW"
                description="Comprehensive support for SSW visa applicants and employers in Japan."
                serviceData={sswDataList}
                pageType='ssw'
                bg
            />
        </div>
    );
};

export default Ssw;
