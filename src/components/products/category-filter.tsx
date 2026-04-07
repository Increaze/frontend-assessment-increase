type Props = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function CategoryFilter({ categories, value, onChange }: Props) {
  return (
    <label className="md:w-64">
      <span className="mb-2 block text-sm font-medium text-text">Category</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-300 text-black px-4 py-3 pr-10 outline-none transition focus:border-slate-900"
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text">
          ▼
        </span>
      </div>
    </label>
  );
}
