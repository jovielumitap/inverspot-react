// import fetch from "cross-fetch";
import ConfigurationAPI from "./ConfigurationAPI";

class CartAPI extends ConfigurationAPI {
  setStatus = () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: true
          }),
        1000
      )
    );

  setRefund = async () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: true
          }),
        1000
      )
    );
}

export default CartAPI;
