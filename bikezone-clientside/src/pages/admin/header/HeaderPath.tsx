import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

type HeaderPathProps = {
  role?: string;
  subPath: string;
};

const HeaderPath = ({ role, subPath }: HeaderPathProps) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");
    dispatch(logout());
    navigate("/");
    toast.success("User Logout!", { id: toastId });
  };

  return (
    <header className="flex m-4 h-16 items-center justify-between border-b px-4  shadow-sm ">
      <div className="flex items-center gap-3">
        <nav className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-1">
          <span className="hidden md:inline">{role}</span>
          <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-4"></div>
          <span className="font-semibold text-black dark:text-white">
            {subPath}
          </span>
        </nav>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="capitalize">
              Welcome {user?.name || "User"} !
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link to="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderPath;
