import {AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiOutlineLogout, AiOutlineContacts} from 'react-icons/ai';


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
        title: "FormDemo",
        to: "/formDemo"
    },
    {
        title: "Tabs",
        to: "/tab"
    },
    {
        title: "Products",
        icons: <AiOutlineShoppingCart/>,
        submenu: true,
        submenuItems: [
            {
                title: "Products Details",
                to: "/products"
            },
            {
                title: "Add Products",
                to: "/addProducts"
            },
            {
                title: "Product List",
                to: "/viewProducts"
            },
            {
                title: "Buy Products",
                to: "/buyProducts/:id"
            },
        ],
    },
{
    title: "Contacts",
    icons: <AiOutlineContacts />,
    to: "/contacts"
    
},
{
    title: "Logout",
    icons: <AiOutlineLogout/>,
    to:"/"

}
]