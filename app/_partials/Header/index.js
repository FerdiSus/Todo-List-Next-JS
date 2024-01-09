import './style.css';
import links from './data';
import Link from 'next/link';


function Header(){
    return (
        <header className='app_header '>
            <div>
                <h1 className='font-vold text-3xl'>
                    Todo-List
                </h1>
                <small className='text-xs text-slate-500'>
                    Simple Todo-List
                </small>
            </div>

            <nav className='app_header_nav'>
            <ul className='app_header_nav_list '> 
             {links.map((link)=>{
              return (
                <li className='app_header_nav_list_item'>
                    <Link href={link.path} className='app_header_nav_list_item_link '>{link.label}</Link>
                </li>
              )
             })}
            </ul>
            </nav>
        </header>
    )
}

export default Header;