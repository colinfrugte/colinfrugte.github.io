export default function BoxItemHeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-2 items-center pb-0">
      <div className="font-semibold text-xl ">{children}</div>
    </div>
  );
}
