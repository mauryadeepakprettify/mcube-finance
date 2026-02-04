import Hero from '@/components/organisms/Hero'
import React from 'react'
import ServiceList from './ServiceList'

const Services = () => {
    return (
        <>
            <Hero title="Services" description="MCube delivers trusted global real estate expertise with precision, speed, and uncompromising security." img="sky" />
            <ServiceList />
        </>
    )
}

export default Services

