import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, MessageCircle } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="w-10 h-10 text-brand-blue" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-lg text-gray-600 mb-8">{description}</p>
              
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-lg p-6 mb-8">
                <p className="text-brand-orange font-medium mb-2">🚧 Page Under Development</p>
                <p className="text-gray-700 text-sm">
                  This page is coming soon! We're working hard to bring you the best experience. 
                  In the meantime, explore our homepage or contact us if you need assistance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Homepage
                  </Link>
                </Button>
                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                  <Link to="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
