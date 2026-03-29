interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-widest uppercase text-ocean-500 mb-2">
        {label}
      </p>
      <h1 className="font-display text-3xl md:text-4xl text-stone-800 tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-stone-500 font-light max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
