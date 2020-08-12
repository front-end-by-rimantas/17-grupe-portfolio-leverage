const header = {
    // whole header is divided into two main parts: logo & linksTab.
    
    logoTab: {
        class: 'logo',
        content: '<div class="name">Leverage<span class="dot">.</span></div>'
    },
    
    
    // the latter contains all links: navigtion tab, social links, search icon, and header button.
    linksTab: {

        //button, menu button & icons list are simple. They require just class & contents parameters to be filled in dinamically
        button: {
            class: 'button header-button go-right',
            content: '<span href="#" class="fa fa-rocket icon" aria-hidden="true"></span><span class="hidden">buy now</span>'
        },
        menuButton: {
            class: 'menu-button go-right',
            content: '<div class="menu-line line1"></div><div class="menu-line line2"></div><div class="menu-line line3"></div>'
        },
        icons: {
            class: 'icons go-right',
            icons: [
                'search',
                'twitter hidden',
                'instagram hidden'
            ]
        },

        /* navtab is more complex since it has not only navigation links,
            but also some of them have drop down menus, some of which
            have their own drop down menus which makes it 3 level problems*/

        /* navtab content is area with 5 abjects.
            each of them has content (which will be displayed in the page)
            some of them have dropdown menus which are areas wich particular
            amounts of objects which contain their own content. Some of those
            also have their dropdowns  */
        navtab: {
            class: 'navtab go-right',
            content: [
                {
                    content: 'home',
                    dropDown: [
                        {
                            content: 'multi-page',
                            dropDown: [
                                {content: 'digital agency 1'},
                                {content: 'digital agency 2'},
                                {content: 'creative agency 1'},
                                {content: 'creative agency 2'},
                                {content: 'creative agency 3'},
                                {content: 'branding agency 1'},
                                {content: 'portfolio 1'},
                                {content: 'portfolio 2'},
                                {content: 'portfolio 3'},
                                {content: 'corporate 1'},
                                {content: 'corporate 2'},
                                {content: 'corporate 3'},
                                {content: 'startup 1'},
                                {content: 'startup 2'},
                                {content: 'technology 1'},
                                {content: 'technology 2'},
                            ]
                        },
                        {
                            content: 'one-page',
                            dropDown: [
                                {content: 'digital agency 1'},
                                {content: 'digital agency 2'},
                                {content: 'creative agency 1'},
                                {content: 'creative agency 2'},
                                {content: 'creative agency 3'},
                                {content: 'branding agency 1'},
                                {content: 'portfolio 1'},
                                {content: 'portfolio 2'},
                                {content: 'portfolio 3'},
                                {content: 'corporate 1'},
                                {content: 'corporate 2'},
                                {content: 'corporate 3'},
                                {content: 'startup 1'},
                                {content: 'startup 2'},
                                {content: 'technology 1'},
                                {content: 'technology 2'},
                            ]
                        }
                    ]
                },
                {
                    content: 'about'
                },
                {
                    content: 'services'
                },
                {
                    content: 'inner pages',
                    dropDown: [
                        {content: 'about'},
                        {content: 'services'},
                        {content: 'service single'},
                        {content: 'portfolio'},
                        {content: 'pricing'},
                        {content: 'contact'},
                        {content: 'search results'},
                        {content: '404 page'},
                        {content: 'form wizard'},
                        {
                            content: 'some examples',
                            dropDown: [
                                {content: 'simple form'},
                                {content: 'simple portfolio'},
                                {content: 'full portfolio'},
                                {content: 'preloader'},
                                {content: 'navbar fixed'}
                            ]
                        }
                    ]
                },
                {
                    content: 'blog',
                    dropDown: [
                        {content: 'blog grid'},
                        {content: 'single post'}
                    ]

                }
            ]
        }
    }
};
export {header}