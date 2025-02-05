export class UtilityService {
  constructor() {}

  storeResponse(response: any | null | undefined) {
    sessionStorage.removeItem("response");
    if (
      response &&
      response!.response !== undefined &&
      response!.response!.data !== undefined
    ) {
      sessionStorage.setItem(
        "response",
        JSON.stringify(response.response.data || {})
      );
    } else if (response) {
      sessionStorage.setItem("response", JSON.stringify(response || {}));
      if (response!.token !== undefined) {
        localStorage.setItem("user", JSON.stringify(response || {}));
      }
    }
  }
}
export default new UtilityService();
