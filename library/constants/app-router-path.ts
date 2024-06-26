export const AppRouterPath = {
  initial: "/",
  auth: {
    login: "(auth)/login",
    register: "(auth)/register",
  },
  customer: {
    home: "(customer)/home",
    cart: "(customer)/cart",
    profile: "(customer)/profile",
    editProfile: "(customer)/edit-profile",
    products: {
      detail: (productId: number | string) =>
        `(customer)/products/${productId}`,
      byCategory: `(customer)/products/by-category`,
      search: `(customer)/products/search`,
    },
  },
};
