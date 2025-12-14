const Section = ({ children, className = "" }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
