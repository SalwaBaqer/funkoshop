import instance from "./instance";
import { makeAutoObservable } from "mobx";

class FunkoStore {
  funkos = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  getFunkosById = (funkoId) =>
    this.funkos.find((funko) => funko.id === funkoId);

  fetchFunkos = async () => {
    try {
      const response = await instance.get("/funkos");
      this.funkos = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const funkoStore = new FunkoStore();
funkoStore.fetchFunkos();
export default funkoStore;
