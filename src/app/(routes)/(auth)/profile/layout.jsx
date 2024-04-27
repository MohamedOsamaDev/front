import Nav from '@src/components/profile/nav/Nav';
import { useRouter } from 'next/navigation';

import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <div className="coverHeader" />
            <Nav />
            {children}
        </>
    )
}

export default layout