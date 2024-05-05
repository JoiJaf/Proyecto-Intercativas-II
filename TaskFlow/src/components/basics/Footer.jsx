import "../../index.css";
import logoblanco from '../../assets/img/logo_v2.png';
import playstore from '../../assets/img/google-play.png';
import appstore from '../../assets/img/ios.png';

export function Footer() {
    return (

        <footer class="footer-container bg-[#0E0E0E]">
            <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-80vw gap-6 text-white form-grid-cols-2">
                <section >
                    <div className="w-60 ml-12 sm:ml-12 mt-4 sm:mt-0">
                        <a className="ml-12 " href="logo"><img class="max-w-full h-auto mb-4 pt-8  mb-logo-footer" src={logoblanco} /></a>
                        <h1 className="text-white">Download Our App</h1>
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="mb-footer-imgs"><img src={playstore} /></div>
                            <div className="mb-footer-imgs"><img src={appstore} /></div>
                        </div>
                    </div>
                </section>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 py-10">
                    <section className="grid items-center justify-center ">
                        <h3>Get to Know Us</h3>
                        <ul class="p-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Discover</a></li>
                        </ul>
                    </section>
                    <section className="grid items-center justify-center ">
                        <h3>Plan with Us</h3>
                        <ul >
                            <li><a href="#">Home</a></li>
                            <li><a class="nav-bottom-link" href="#">Acces</a></li>
                            <li><a class="nav-bottom-link" href="#">Manage</a></li>
                            <li><a class="nav-bottom-link" href="#">Categories</a></li>
                        </ul>
                    </section>
                    <section className="grid items-center justify-center ">
                        <h3></h3>
                        <ul class="p-0 ">
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Your Reservations</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Submit Feedback</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <p class="text-center text-white py-10"> @All rights reserved</p>
        </footer>


    )
}