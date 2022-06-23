function Footer() {
    return (
        <footer className='page-footer orange'>
            <div className='footer-copyright orange'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className=' grey-text text-lighten-4 right'
                        href='https://github.com/w1llow1sp/react-showcase'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
