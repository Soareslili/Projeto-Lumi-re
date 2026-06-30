
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#15110D] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex items-center gap-2">
                        
                        <div className="leading-tight">
                            <div className="font-Cormorant text-primary text-3xl">Lumière </div>
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Maison de Joaillerie</div>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-white/60">
                       Joias artesanais de alta qualidade para momentos que perduram. Criadas em Paris, produzidas por artesãos de toda a Europa.
                    </p>
                </div>
                <div>
                    <h4 className=" font-bold uppercase tracking-wider font-Cormorant text-primary">Contate-nos</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                        <li>+1 (555) 123-4567</li>
                        <li>hello@chennaiexpress.com</li>
                    </ul>
                </div>
                <div>
                    <h4 className=" font-bold uppercase tracking-wider font-Cormorant text-primary">Links Rápidos</h4>
                    <ul className=" flex flex-col mt-4 space-y-2 text-sm text-white/70">
                        <Link to="/products" className="hover:text-primary">Nossas Coleções</Link>
                        <Link to="/about" className="hover:text-primary">Sobre</Link>
                        <Link to="/contact" className="hover:text-primary">Contato</Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider font-Cormorant text-primary">Localização</h4>
                    <p className="mt-4 text-sm text-white/70">
                        1410 Av. Paulista<br /> São Paulo, SP 01310-100
                    </p>
                    <div className="grid grid-cols-3 w-[150px] mt-4 gap-4 ">
                        <a href="#" className="text-accent transform transition hover:scale-110" >
                            <FaInstagram size={28} />
                        </a>
                        <a href="#" className="text-indigo-500 transform transition hover:scale-110" >
                            <FaFacebook size={28} />
                        </a>
                        <a href="#" className="text-gray-500 transform transition hover:scale-110" >
                            <FaXTwitter size={28} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} Lumière Maison. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;