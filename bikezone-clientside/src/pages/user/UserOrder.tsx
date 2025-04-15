import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserOrdersQuery } from "@/redux/features/order/order";
import moment from "moment";
import { Link } from "react-router-dom"; // or import from 'next/link' if using Next.js

const UserOrder = () => {
  const { data: userOrders } = useGetUserOrdersQuery(undefined);
  
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold">My Orders</h3>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Order Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userOrders?.data?.map((order, i: number) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={order.product.image} 
                      alt={order.product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <Link 
                      to={`/product/${order.product._id}`}
                      className="hover:underline"
                    >
                      {order.product.name}
                    </Link>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
                <TableCell>
                  {moment(order.createdAt).format('MMM D, YYYY h:mm A')}
                </TableCell>
        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserOrder;