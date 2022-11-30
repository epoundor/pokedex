import { apiCall } from ".";

export default function useFetchAuthenticatedUser() {
  return apiCall("auth/me", {
    immediate: true,
    method: "GET",
  });
}
