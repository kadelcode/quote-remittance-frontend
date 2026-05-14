type Props = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold">{question}</h3>

      <p className="mt-3 text-slate-600">{answer}</p>
    </div>
  );
};

export default FAQItem;
