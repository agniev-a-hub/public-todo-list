import React from "react";
import { HeaderItem } from './websiteheader.types'
import './websiteheader.css'

interface Props {
    headerContent: HeaderItem[];
}

export const WebsiteHeader = ({headerContent}:Props) => {
    return (
        <div className='WebsiteHeader'>
            {headerContent.map(headerItem => 
                <div className="headerItem">
                    {headerItem.headerItemName}
                </div>
            )}
        </div>
    )
}