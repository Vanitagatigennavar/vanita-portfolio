const Section = ({ children, className = "" }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-8">{children}</div>
 

    </section>
  );
};

export default Section;
