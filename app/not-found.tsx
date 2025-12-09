import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-muted mb-6">
          Page Not Found
        </h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-secondary transition-colors"
        >
          Back to Home
        </Link>
      </Container>
    </main>
  );
}
