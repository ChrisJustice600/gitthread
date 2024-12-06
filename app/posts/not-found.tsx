import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <Alert className="my-8">
        <AlertTriangle />
        <AlertTitle>Not found</AlertTitle>
        <AlertDescription>Post Not found</AlertDescription>
      </Alert>
    </div>
  );
}
