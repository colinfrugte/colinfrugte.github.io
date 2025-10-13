export default function BoxItemHeaderTitle({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex flex-row gap-2 items-center pb-0">
      <Icon className="h-5" />
      <div className="font-semibold text-xl ">{children}</div>
    </div>
  );
}
