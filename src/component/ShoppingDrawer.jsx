import { Drawer } from "antd";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Utilis/firebase";
import React, { useEffect, useState } from "react";

function ShoppingDrawer({ open, onClose }) {
  // State to store cart items
  const [cartItems, setCartItems] = React.useState([]); 
 
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const items = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCartItems(items);
    };

    fetchData();
  }, []); // Fetch data on component mount
  

  // const handleDeletecardDb = async () => {
  //   console.log( 'docID-->', );

  //   console.log("click hogaye");
  //   await deleteDoc(doc(db, "cart", docIDs));
  // }
  const handleDeleteItem = async (itemId) => { 
    try {
      await deleteDoc(doc(db, "cart", itemId));
      // setCartItems(cartItems.filter((item) => item.id !== itemId)); 
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error.message);
      
    }
  };

  return (
    <Drawer onClose={onClose} open={open} title="SHOPPING CARD" closable={false} height={"250px"}>
      {cartItems.length === 0 ? ( // Check if cart is empty
        <div className="flex justify-center items-center">
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        cartItems.map((item) => ( // Loop through cart items
          <div key={item.id} className="flex m-2 overflow-y-auto ">
            <img className="w-28 h-24 rounded-xl" src={item.image} alt="" />

            <div className="ms-4 flex flex-col justify-center item-center">
              <h1 className="text-md font-bold">{item.title}</h1> {/* Access product name from Firestore data */}
              <p className="">Rs.{item.price}</p> {/* Access product price from Firestore data */}
            </div>
            <div className="flex flex-col m-4 font-bold justify-center item-center">
              <CloseCircleFilled onClick={() => handleDeleteItem(item.id)} />
            </div>
          </div>
        ))
      )}
    </Drawer>
  );
}

export default ShoppingDrawer;