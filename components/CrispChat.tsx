'use client';

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("1670a2ed-2015-484c-8b1d-df3c8535c2da")
    }, [])

    return (
        null
    )
}

export default CrispChat