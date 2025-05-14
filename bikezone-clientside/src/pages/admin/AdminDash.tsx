import { useGetOrdersQuery } from "@/redux/features/order/order";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { TOrder, TProduct } from "@/types";
import { TUser } from "@/types/global.type";
import LoadAnimation from "@/components/menu/LoadAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart } from "@/components/ui/charts";
import HeaderPath from "./header/HeaderPath";

const AdminDash = () => {
  const { data: allOrders, isLoading: orderLoading } =
    useGetOrdersQuery(undefined);
  const { data: productData, isLoading: productLoading } =
    useGetAllProductsQuery(undefined);
  const { data: users, isLoading: userLoading } =
    useGetAllUsersQuery(undefined);

  if (orderLoading || productLoading || userLoading) {
    return <LoadAnimation />;
  }

  // Order status counts
  const orderStatusCounts = {
    total: allOrders?.data?.length || 0,
    paid:
      allOrders?.data?.filter((order: TOrder) => order.status === "Paid")
        .length || 0,
    delivered:
      allOrders?.data?.filter((order: TOrder) => order.status === "Delivered")
        .length || 0,
    cancelled:
      allOrders?.data?.filter((order: TOrder) => order.status === "Cancelled")
        .length || 0,
    pending:
      allOrders?.data?.filter((order: TOrder) => order.status === "Pending")
        .length || 0,
    shipped:
      allOrders?.data?.filter((order: TOrder) => order.status === "Shipped")
        .length || 0,
  };

  // User status counts
  const userStatusCounts = {
    total: users?.data?.length || 0,
    active:
      users?.data?.filter((user: TUser) => user.isActive === true).length || 0,
    inactive:
      users?.data?.filter((user: TUser) => user.isActive === false).length || 0,
  };

  // Product stock status counts
  const productStatusCounts = {
    total: productData?.data?.length || 0,
    inStock:
      productData?.data?.filter((product: TProduct) => product.inStock)
        .length || 0,
    outOfStock:
      productData?.data?.filter((product: TProduct) => !product.inStock)
        .length || 0,
  };
  const barChartProductData = {
    labels: ["Products"],
    datasets: [
      {
        label: "In Stock",
        data: [productStatusCounts.inStock],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Out of Stock",
        data: [productStatusCounts.outOfStock],
        backgroundColor: "#f59e0b",
      },
    ],
  };
  const barChartData = {
    labels: ["Users"],
    datasets: [
      {
        label: "Active",
        data: [userStatusCounts.active],
        backgroundColor: "#10b981",
      },
      {
        label: "Inactive",
        data: [userStatusCounts.inactive],
        backgroundColor: "#ef4444",
      },
    ],
  };

  const pieChartData = {
    labels: ["Cancelled", "Delivered", "Paid", "Pending", "Shipped"],
    datasets: [
      {
        data: [
          orderStatusCounts.cancelled,
          orderStatusCounts.delivered,
          orderStatusCounts.paid,
          orderStatusCounts.pending,
          orderStatusCounts.shipped,
        ],
        backgroundColor: ["red", "#f59e0b", "#10b981", "#3b82f6", "#3b8336"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <HeaderPath role="Admin" subPath="Dashboard" />
      <div className="px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-2xl font-bold">Admin Dashboard</h3>
      </div>
      <div className="p-4">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="rounded-lg border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Total Orders</h4>
              <span className="text-2xl font-bold">
                {orderStatusCounts.total}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {["Paid", "Delivered", "Cancelled", "Pending", "Shipped"].map(
                (status) => (
                  <div key={status} className="flex justify-between">
                    <span className="text-gray-600">{status}</span>
                    <span className="font-medium">
                      {
                        orderStatusCounts[
                          status.toLowerCase() as keyof typeof orderStatusCounts
                        ]
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </Card>

          {/* Total Users Card */}
          <Card className="rounded-lg border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Total Users</h4>
              <span className="text-2xl font-bold">
                {userStatusCounts.total}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-600">Active</span>
                <span className="font-medium">{userStatusCounts.active}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Inactive</span>
                <span className="font-medium">{userStatusCounts.inactive}</span>
              </div>
            </div>
          </Card>

          {/* Total Products Card */}
          <Card className="rounded-lg border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Total Products</h4>
              <span className="text-2xl font-bold">
                {productStatusCounts.total}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">In Stock</span>
                <span className="font-medium">
                  {productStatusCounts.inStock}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Out of Stock</span>
                <span className="font-medium">
                  {productStatusCounts.outOfStock}
                </span>
              </div>
            </div>
          </Card>
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Stock Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart data={barChartProductData} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Users Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart data={barChartData} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Request Status Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <PieChart data={pieChartData} />
            </CardContent>
          </Card>

          {/* Placeholder for future chart (e.g., orders, users, etc.) */}
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center text-gray-500">
              Another chart or data widget
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
