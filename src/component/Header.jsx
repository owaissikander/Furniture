
import React, { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AlertOutlined, HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ShoppingDrawer from "./ShoppingDrawer";
import { Badge } from "antd";
import { CartContext } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Utilis/firebase";

export const AcmeLogo = () => (

  <svg className="text-orange-500" fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [open, setOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];




  const [cartItems, setCartItems] = React.useState([]); // State to store cart items

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data()); // Add cart items to the state
      });
      setCartItems(items);
    };
    fetchData();
  }, []); // Fetch data on component mount
  console.log("cartItems- shopping card-->", cartItems);
console.log( "cartItems----->", cartItems);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}


      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bolder text-3xl ">Furniro</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Furniro</p>
          </NavbarBrand>
          <NavbarItem className="flex justify-end" justify="end">
            <Link color="foreground" href="/Home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem  justify="end">
            <Link  href="/Shop">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#" aria-current="page">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="Contact" >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="me-12 flex space-x-5 ">
          <NavbarItem className="hidden lg:flex">
            <AlertOutlined className="text-xl" />

          </NavbarItem>
          <NavbarItem>
            <SearchOutlined className="text-xl" />

          </NavbarItem>
          <NavbarItem>
            <HeartOutlined className="text-xl" />

          </NavbarItem>
          <NavbarItem onClick={showDrawer}>
            <Badge count={cartItems.length} >

            <ShoppingCartOutlined  className="text-xl" />
            </Badge>

          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>
      <ShoppingDrawer open={open} onClose={onClose} />

    </>

  );
}




export default Header