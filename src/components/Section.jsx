const Section = ({ children, className = "" }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">{children}</div>
      
    </section>
  );
};

export default Section;
