
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { AddProducts } from "../../pages/Products/AddProducts";
import { BuyProducts } from "../../pages/Products/BuyProducts";
import { ProductPage } from "../../pages/Products/ProductPage";
import { ViewProducts } from "../../pages/Products/ViewProducts";
import { Todo } from "../../pages/Todo/Todo";
import { DialogDemo } from "../../ui(components)/dialogs/DialogDemo";
import { FormDemo } from "../../ui(components)/react-hook-form/FormDemo";
import { TabsDemo } from "../../ui(components)/tabs/TabsDemo";

export const routes = [
    {
        path: '/',
        component: <LoginPage/>,
    },

    {
        path: '/home',
        component: <Home/>,
    },
    {
        path: '/about',
        component: <About/>,
    },
    {
        path: '/formDemo',
        component: <FormDemo/>,
    },
    {
        path: '/tab',
        component: <TabsDemo/>,
    },
    {
        path: '/dialogs',
        component: <DialogDemo/>,
    },
    {
        path: '/products',
        component: <ProductPage/>,
    },
    {
        path: '/viewProducts',
        component: <ViewProducts/>,
    },
    {
        path: '/addProducts',
        component: <AddProducts/>,
    },
    {
        path: '/buyProducts/:id',
        component: <BuyProducts/>,
    },
    {
        path: '/todo',
        component: <Todo/>,
    },

]
