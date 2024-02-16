export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen-md mt-12 flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
}
