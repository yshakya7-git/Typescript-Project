import {AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiOutlineLogout} from 'react-icons/ai';


export const SideBarItems = [
    {
        title: "Home",
        icons: <AiOutlineHome />,
        to:"/home",
    },
    {
        title: "About",
        icons: <AiOutlineBook/>,
        to: "/about"
    },
    {
        title: "DemoTable",
        icons: <AiOutlineBook/>,
        to: "/table"
    },
    {
        title: "Products",
        icons: <AiOutlineShoppingCart/>,
        submenu: true,
        to: "",
        submenuItems: [
            {
                title: "Add Products",
                to: "/addProduct"
            },
            {
                title: "Product List",
                to: "/viewProducts"
            },
            {
                title: "Buy Products",
                to: "buyProducts"
            },
        ],
    },
{
    title: "Contacts",
    to: "/contacts"
    
},
{
    title: "Logout",
    icons: <AiOutlineLogout/>,
    to:"/"

}
]