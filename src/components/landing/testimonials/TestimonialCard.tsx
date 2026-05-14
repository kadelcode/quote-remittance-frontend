type Props = {
  quote: string;
  name: string;
};

const TestimonialCard = ({ quote, name }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-lg leading-8 text-slate-600">"{quote}"</p>

      <h4 className="mt-6 font-semibold">{name}</h4>
    </div>
  );
};

export default TestimonialCard;
