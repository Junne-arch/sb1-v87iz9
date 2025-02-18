import Navbar from '@/components/Navbar';

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </>
  );
}