import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Sales Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Analyze your sales data with powerful visualizations
        </p>
        <Link href="/dashboard">
          <Button variant="primary" className="text-lg px-8 py-3">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
