const layout = {
    logo: {
        link: {
            href: '/',
            image: {
                src: 'images/shared/logo.svg',
                alt: 'logo'
            }
        }
    },
    navigation: [
        {
            name: 'Main',
            href: '/'
        },
        {
            name: 'Gallery',
            href: '/gallery'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Certifications',
            href: '/certifications'
        },
        {
            name: 'Contacts',
            href: '/contact'
        }
    ],
    contacts: [
        {
            image: {
                src: 'images/footer/location_dot.svg',
                alt: 'location_dot'
            },
            link: {
                text: '1234 Sample Street<br>Austin Texas 78704',
                href: 'https://maps.google.com/'
            }
        },
        {
            image: {
                src: 'images/footer/phone.svg',
                alt: 'phone'
            },
            link: {
                text: '512.333.2222',
                href: 'tel:+5123332222'
            }
        },
        {
            image: {
                src: 'images/footer/envelope.svg',
                alt: 'envelope'
            },
            link: {
                text: 'example@gmail.com',
                href: 'mailto:example@gmail.com'
            }
        }
    ],
    social_media: [
        {
            link: {
                href: 'https://facebook.com',
                image: {
                    src: 'images/footer/facebook_logo.svg',
                    alt: 'facebook logo'
                }
            }
        },
        {
            link: {
                href: 'https://twitter.com',
                image: {
                    src: 'images/footer/twitter_logo.svg',
                    alt: 'twitter logo'
                }
            }
        },
        {
            link: {
                href: 'https://linkedin.com',
                image: {
                    src: 'images/footer/linkedin_logo.svg',
                    alt: 'linkedin logo'
                }
            }
        },
        {
            link: {
                href: 'https://pinterest.com',
                image: {
                    src: 'images/footer/pinterest_logo.svg',
                    alt: 'pinterest logo'
                }
            }
        }
    ]
};

module.exports = layout;