import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { Typewriter } from "react-simple-typewriter";

const formSchema = z.object({
  email: z.string().min(3, {
    message: "Email must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

const Login = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("User Login....");

    try {
      const res = await loginUser(data).unwrap();
      dispatch(setUser({ user: res.data, token: res.token }));
      toast.success("User Logged In!", { id: toastId });
      form.reset();
      if (res?.data?.role === "admin") {
        navigate("/admin/dash");
      } else {
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login error:", error);

      // Handle different error structures
      let errorMessage = "Login failed. Please try again.";

      // Check for Zod validation errors
      if (error?.data?.error?.name === "ZodError") {
        const firstError = error.data.error.issues[0];
        errorMessage = firstError.message || "Validation error";
      }
      // Check for the specific stringified JSON case
      else if (error?.data?.message) {
        try {
          const parsedMessages = JSON.parse(error.data.message);
          if (Array.isArray(parsedMessages) && parsedMessages[0]?.message) {
            errorMessage = parsedMessages[0].message;
          } else {
            errorMessage = error.data.message;
          }
        } catch {
          errorMessage = error.data.message;
        }
      }
      // Check for issues array format
      else if (error?.data?.issues?.length > 0) {
        errorMessage = error.data.issues[0].message;
      }

      toast.error(errorMessage, { id: toastId });
    }
  };
  const handleCredentialFill = (role: "admin" | "customer") => {
    if (role === "admin") {
      form.setValue("email", "admin@gmail.com");
      form.setValue("password", "1234");
    } else if (role === "customer") {
      form.setValue("email", "user@gmail.com");
      form.setValue("password", "1234");
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Login Form */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto  p-8 rounded-lg shadow-sm border">
          <div className="">
            <div className="flex items-center justify-center gap-2 p-2 rounded-xl">
              <div className="text-3xl font-semibold flex justify-center items-center gap-2 pb-5">
                Login to{" "}
                <h1 className="font-bold text-3xl tracking-widest">
                  <span className="text-[#E81938]">Bike</span>
                  <span className="inline-block w-1" />
                  <Typewriter
                    words={["Zone"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>
            </div>
          </div>
          <h2 className="font-semibold pb-1">Quick Test Login:</h2>
          <div className="grid grid-cols-3 gap-5 pb-5">
            <Button
              variant={"outline"}
              onClick={() => handleCredentialFill("admin")}
            >
              Admin
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleCredentialFill("customer")}
            >
              User
            </Button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader className="animate-spin" /> logging...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
