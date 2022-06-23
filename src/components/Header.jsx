function Header() {
    return (
        <nav className=' orange'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    w1llow1sp Showcase
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/w1llow1sp/react-showcase'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
