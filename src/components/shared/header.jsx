import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/logo.svg'
import bars from '../../assets/bars.svg'

export default function Header() {
    return (
        <header className="flex justify-between items-center py-[13px] min-h-[10svh]">
            <div className="logo">
                <Link href={'/'} className="flex flex-col items-center justify-center">
                    <Image src={logo} alt="logo of company" />
                    <span className="-mt-[13px] block font-mono font-[600] tracking-wider text-[12px]">Digital Project</span>
                </Link>
            </div>
            <nav className="hidden md:flex md:gap-[20px] lg:gap-[50px]">
                <Link href={'/'} className="text-[12px] tracking-widest">ГЛАВНАЯ</Link>
                <Link href={'/'} className="text-[12px] tracking-widest">ГАЛЕРЕЯ</Link>
                <Link href={'/'} className="text-[12px] tracking-widest">ПРОЕКТЫ</Link>
                <Link href={'/'} className="text-[12px] tracking-widest">СЕРТИФИКАТЫ</Link>
                <Link href={'/'} className="text-[12px] tracking-widest">КОНТАКТЫ</Link>
            </nav>
            <button className="block md:hidden">
                <Image src={bars} alt="icon of bars"/>
            </button>
        </header>
    )
}
