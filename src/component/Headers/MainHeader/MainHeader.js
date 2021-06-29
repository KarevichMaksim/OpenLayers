import './MainHeader.scss';

export function MainHeader() {
    return (
        <header className='main-header'>
            <div className='main-header__logo'>Logo</div>
            <nav className='main-header__nav'>
                <ul className='main-header__nav-list'>
                    <li className='main-header__nav-item'>Navigation</li>
                </ul>
            </nav>
        </header>
    )
}