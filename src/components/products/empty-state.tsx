type Props = {
  title: string;
  description?: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      
      {description && (
        <p className="mt-2 max-w-md text-sm text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}