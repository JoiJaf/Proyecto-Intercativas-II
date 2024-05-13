import logo from '../../assets/img/logo-blanco.png';
import user from '../../assets/img/user.png';
import logoSmall from '../../assets/img/logo_v2.png'
import "../../index.css";

export function Header() {
    return (


        <div className="w-full top-0 left-0 fixed z-10">
            <header className="flex header items-center bg-[#212121] shadow-sm mb-header-bg">
                <img className="max-w-[7rem] mr-5 h-auto  mb-logo hidden sm:block" src={logo} />
                <img className="max-w-full h-auto  mb-logo sm:hidden" src={logoSmall} />

                <div className=" flex items-center bg-slate-200 header_input rounded-full px-6 py-7 mb-search hidden lg:inline-flex">
                    <input className="w-full bg-transparent outline-none text-[1.2rem] mb-text  " type="text" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search cursor-pointer mb-icon" width="36" height="36"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </div>


                <div className="flex items-center gap-6 ">
                    <input className="mobile-check sm:hidden" type="checkbox" />
                    <label className="mobile-btn sm:hidden" for="mobile-check">
                        <span></span>
                    </label>

                    <div className=' flex items-center gap-6 home-list'>
                        <a href="" className="lg:hidden user-image">
                            <img src={user} alt="" className="w-full h-auto " />
                        </a>

                        <a href="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                        </a>
                        <a href="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="30"
                                height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M16 3l0 4" />
                                <path d="M8 3l0 4" />
                                <path d="M4 11l16 0" />
                                <path d="M8 15h2v2h-2z" />
                            </svg>
                        </a>
                        <a href="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                            </svg>
                        </a>

                        <a href="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                        </a>
                    </div>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell mb-icon" width="30"
                        height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    </a>
                    <a href="" className="lg:flex-shrink-0 pr-10">
                        <img src={user} alt="" className="max-w-[3rem] h-auto mb-icon hidden lg:block" />
                    </a>



                </div>

            </header>
        </div>
    )
}