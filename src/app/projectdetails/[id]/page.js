"use client";

import React from 'react';
import ProjectDetails from '../../component/home/ProjectDetails';
import { useSinglProjectQuery } from '@/redux/feature/projectById';

const Details = ({ params }) => {
    const { id } = params;

    console.log('Project ID:', id);
 

    const { data: singleData, isLoading, isError, error } = useSinglProjectQuery(id);

    console.log('Query Result:', { singleData, isLoading, isError, error });
 

    return (
        <div>
            <ProjectDetails project ={singleData} />
        </div>
    );
};

export default Details;


