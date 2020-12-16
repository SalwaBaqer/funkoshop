import { makeAutoObservable } from "mobx";

//storage
import AsyncStorage from "@react-native-community/async-storage";

//stores
import funkoStore from "./funkoStore";

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
