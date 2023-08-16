import {AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiOutlineLogout} from 'react-icons/ai';


export const SideBarItems = [
    {
        title: "Home",
        icons: <AiOutlineHome />
    },
    {
        title: "About",
        icons: <AiOutlineBook/>
    },
    {
        title: "Products",
        icons: <AiOutlineShoppingCart/>,
        submenu: true,
        submenuItems: [
            {
                title: "Add Products"
            },
            {
                title: "View Products"
            },
            {
                title: "Buy Products"
            },
        ],
    },
{
    title: "Contacts"
    
},
{
    title: "Logout",
    icons: <AiOutlineLogout/>

}
]