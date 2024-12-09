interface Props {
  title: string;
}

export default function AppBar({ title }: Props) {
  return (
    <div className="w-full h-[72px] bg-[#281E9B] shadow-appBar flex items-center p-5">
      <h1 className="text-4xl text-white font-bold h-max">{title}</h1>
    </div>
  );
}
