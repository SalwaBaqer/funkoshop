//storage
import AsyncStorage from "@react-native-community/async-storage";
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  //fetch
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  //add
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.funkoId === newItem.funkoId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);

    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  //remove
  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.funkoId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  //checkout
  checkout = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      this.items = [];
      await AsyncStorage.removeItem("myCart");
    } catch (error) {
      console.error("cartStore.js..line 41, cartstore -> checkout = error");
    }
  };

  //total quantity
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
