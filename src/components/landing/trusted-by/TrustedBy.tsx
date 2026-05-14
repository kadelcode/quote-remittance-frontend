import Container from '@/components/common/Container';

const stats = [
  { value: '$12M+', label: 'Transferred' },
  { value: '50+', label: 'Countries Supported' },
  { value: '10k+', label: 'Users' },
  { value: '99.9%', label: 'Uptime' },
];

const TrustedBy = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;
