import {MainHeader} from "../../Headers/MainHeader/MainHeader";
import {MainFooter} from "../../Footers/MainFooter/MainFooter";

import './MainLayout.scss'

export function MainLayout({children}) {
    return (
        <div className='container'>
            <MainHeader/>
            <main className='main'>
                {children}
            </main>
            <MainFooter/>
        </div>
    )
}