import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return {
          url: `/products`,
          method: "GET",
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log({ id, data });

        return {
          url: `/products/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = productApi;
