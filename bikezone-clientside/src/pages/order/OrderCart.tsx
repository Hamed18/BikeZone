import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreateOrderMutation } from "@/redux/features/order/order";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { toast } from "sonner";


const OrderCart = (props: {id: string}) => {
    const user = useAppSelector(selectCurrentUser);
  
    // order start
      const [createOrder, { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation();
      const handleAddToOrder = async () => {
        const result = await createOrder({
          product: props.id,
          orderQuantity: 1
         })
        if(result?.data?.status){
          toast.success("Order Successful!");
        }else{
          toast.error("Not Order Successful!");
        }
      };
      const toastId = "order";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);
      // order end
    return (
        <div>
            <Button disabled={user?.role == 'admin'} onClick={handleAddToOrder}>Buy Now</Button>
        </div>
    );
};

export default OrderCart;