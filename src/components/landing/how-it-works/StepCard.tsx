type Props = {
  step: string;
  title: string;
  description: string;
};

const StepCard = ({ step, title, description }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
        {step}
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 text-slate-600">{description}</p>
    </div>
  );
};

export default StepCard;
