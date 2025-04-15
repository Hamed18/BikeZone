import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useGetOrdersQuery } from "@/redux/features/order/order";
import { Loader2, Table as TableIcon } from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const { data: allOrders, isLoading, isError, error } = useGetOrdersQuery(undefined);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 md:p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error?.data?.message || 'Failed to load orders'}</span>
        </div>
      </div>
    );
  }

  if (!allOrders?.data?.length) {
    return (
      <div className="p-4 md:p-6">
        <div className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-200px)]">
          <TableIcon className="h-12 w-12 text-gray-400" />
          <h3 className="text-xl font-semibold">No orders found</h3>
          <p className="text-gray-500">There are currently no orders to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold">Manage Orders</h3>
        <div className="text-sm text-gray-500">
          Total Orders: {allOrders?.data?.length}
        </div>
      </div>
      
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allOrders.data.map((order, i: number) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <img 
                      src={order.product.image} 
                      alt={order.product.name}
                      className="w-10 h-10 object-cover rounded"
                      loading="lazy"
                    />
                    <Link 
                      to={`/product/${order.product._id}`}
                      className="hover:underline line-clamp-1"
                    >
                      {order.product.name}
                    </Link>
                  </div>
                </TableCell>
                <TableCell className="text-sm">
                  <a 
                    href={`mailto:${order.user.email}`} 
                    className="hover:underline"
                  >
                    {order.user.email}
                  </a>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="font-medium">
                  ${order.totalPrice.toFixed(2)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {moment(order.createdAt).format('MMM D, YYYY h:mm A')}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8"
                    >
                      View Details
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageOrders;