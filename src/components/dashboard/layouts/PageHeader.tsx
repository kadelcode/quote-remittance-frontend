type Props = {
  title: string;
  description?: string;
};

const PageHeader = ({ title, description }: Props) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-900">{title}</h1>

      {description && <p className="mt-2 text-slate-600">{description}</p>}
    </div>
  );
};

export default PageHeader;
