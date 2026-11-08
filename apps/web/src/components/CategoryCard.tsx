type CategoryCardProps = {
  name: string;
  description: string;
  href: string;
};

export default function CategoryCard({
  name,
  description,
  href,
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="mb-2 text-lg font-semibold">{name}</h3>

      <p className="text-sm text-slate-600">{description}</p>
    </a>
  );
}
