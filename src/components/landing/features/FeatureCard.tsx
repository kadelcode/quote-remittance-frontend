import type { IconType } from 'react-icons';

type Props = {
  title: string;
  description: string;
  icon: IconType;
};

const FeatureCard = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="text-2xl text-blue-600" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
