import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentações" | "categorias"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const activeClass = "border-b-4 border-pink-600 pb-2"

    const links = [
        { text: "dashboard", href: "/dashboard" },
        { text: "movimentações", href: "/transactions" },
        { text: "categorias", href: "/categories" },
    ]

    return (
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <h1 className="text-3xl font-bold">CashUp</h1>
            <ul className="flex gap-4">
                {links.map(link =>
                    <li className={active === link.text ? activeClass : ""}>
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                )}
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/JulioSamuelOliveira.png" alt="" />
        </nav>
    )
}

// import Link from "next/link";

// interface NavBarProps {
//     active: "dashboard" | "movimentações" | "categorias"
// }

// export default function NavBar(props : NavBarProps) {
//     const {active} = props
//     const activeClass = "border-b-4 border-pink-600 pb-2"

//     return (
//         <nav className="flex justify-between items-center bg-slate-900 p-6">
//             <h1 className="text-3xl font-bold">CashUp</h1>
//             <ul className="flex gap-4">
//                 <li className={active === "dashboard"? activeClass : ""}>
//                     <Link href="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className={active === "movimentações"? activeClass : ""}>
//                     <Link href="/transactions">Movimentações</Link>
//                 </li>
//                 <li className={active === "categorias"? activeClass : ""}>
//                     <Link href="/categories">Categorias</Link>
//                 </li>
//             </ul>
//             <img className="size-12 rounded-full" src="http://github.com/JulioSamuelOliveira.png" alt="" />
//         </nav>
//     );
//}