import Container from '@/components/common/Container';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-2xl font-bold text-blue-600">QuoteRemit</h3>

          <p className="text-slate-500">© 2026 QuoteRemit. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
