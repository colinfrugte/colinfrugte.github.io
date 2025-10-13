export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold text-gray-80 dark:text-gray-100 mb-4 tracking-tight">
      {children}
    </h1>
  );
}
