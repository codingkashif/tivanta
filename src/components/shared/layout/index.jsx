import { Link } from "react-router-dom";
import Logo from '../logo'
const Layout = ({children})=>{

    const menus = [
        {
            path : '/',
            label : 'Home'

        },
        {
            path : '/about',
            label : 'About'

        },
        {
            path : '/products',
            label : 'Products'

        },
        {
            path : '/gallery',
            label : 'Gallery'

        },
        {
            path : '/price',
            label : 'Price'

        },
        {
            path : '/contact',
            label : 'Contact'

        }
    ]

    const socials = [
        {
            icon : 'fa fa-facebook',
            url : 'https://facebook.com'
        },
        {
            icon : 'fa fa-instagram',
            url : 'https://instagram.com'
        },
        {
            icon : 'fa fa-twitter',
            url : 'https://twitter.com'
        },
        {
            icon : 'fa fa-linkedin',
            url : 'https://linkedin.com'
        }
    ]


    const footerpageone = [
        {
            path : '/about',
            label : 'about'
        },
        {
            path : '/contact',
            label : 'contact'
        },
        {
            path : '/news-and-blogs',
            label : 'news and blogs'
        },
        {
            path : '/library',
            label : 'library'
        },
        {
            path : '/career',
            label : 'career'
        }
    ]
    return(
        <div className="bg-white ">
            <nav className="flex justify-between max-w-[90%] mx-auto py-3 shadow">
                <Logo />
                <ul className="flex gap-8 items-center font-semibold">
                   {
                     menus.map((menu, index ) => (
                        <li><Link to={menu.path}>{menu.label}</Link></li>
                    ))
                   }
                </ul>
                <button>
                    <img src="images/icon.jpg" className="w-[45px] rounded-full"/>
                </button>
            </nav>

            <section>
                {children}
            </section>
            
            <footer>
                   <div className=" max-w-[80%] mx-auto grid grid-cols-6 shadow-inner py-16 gap-8">
                        <div className="flex flex-col gap-4 col-span-2 ">
                            <Logo tagline/>
                           <div className="flex gap-3">
                           {
                                socials.map((social, index)=>(
                                   <button key={index} className="px-4 py-2 border shadow">
                                         <Link to={social.url}><i className={social.icon}></i></Link>
                                   </button>
                                ))
                            }
                           </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[21px]">Company</h1>
                            <ul>
                                {
                                    footerpageone.map((footerpageones, index ) => (
                                        <li key={index}><Link to={footerpageones.path}  classNam="text-gray-600">{footerpageones.label}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-[21px]">Community</h1>
                            <ul>
                                {
                                    menus.map((menu, index ) => (
                                        <li><Link to={menu.path}>{menu.label}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold text-[21px]">Teaching</h1>
                            <ul>
                                {
                                    menus.map((menu, index ) => (
                                        <li><Link to={menu.path}>{menu.label}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-[21px]">Contact</h1>
                            <ul>
                                {
                                    menus.map((menu, index ) => (
                                        <li><Link to={menu.path}>{menu.label}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                   </div>
            </footer>
        </div>
    )
}
export default Layout;