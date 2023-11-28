

const Footer = () => {
    return (
        <footer className="flex bg-purple-100 px-4 mb-4 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                © 2023 Phone Shop
            </p>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a
                        href="#"
                        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                    >
                        Customer Review
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                    >
                        FeedBack
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;