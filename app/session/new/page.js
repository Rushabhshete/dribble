import AuthLayout from "@/components/AuthLayout";
import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome back"
        placeholder="Enter email or username"
        footerText="Don't have an account?"
        footerLinkText="Sign up"
        footerLinkHref="/signups/new"
      />
    </AuthLayout>
  );
}
