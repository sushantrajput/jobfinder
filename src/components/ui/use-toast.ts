
import { useToast, toast } from "@/hooks/use-toast";

// Add some customized toast helpers for a more human touch
const customToast = {
  ...toast,
  success: (message: string) => {
    return toast({
      title: "Success!",
      description: message,
      variant: "default",
      className: "bg-green-50 border-green-200",
    });
  },
  error: (message: string) => {
    return toast({
      title: "Something went wrong",
      description: message,
      variant: "destructive",
    });
  },
  info: (message: string) => {
    return toast({
      description: message,
      variant: "default",
      className: "bg-blue-50 border-blue-200",
    });
  }
};

export { useToast, toast, customToast };
