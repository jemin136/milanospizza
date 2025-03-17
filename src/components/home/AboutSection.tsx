import Container from '../ui/Container';

const AboutSection = () => {
  const aboutInfo = {
    title: 'About Milanos Pizza',
    description: `We have the best ingredients, best pizza and best taste you will only get at Milanos Pizza and Portugese Grilled Chicken.

    We make our own fresh dough and we mix all our spices for our sauces. Our chef and owner have twenty five year of experience making Pizza. 
    Our Portuguese Chicken is marinated in our own special Portuguese lemon flavour Sauce. Delicious either grilled or Fried.

    All our Chicken is fresh. Milanos Gourmet burgers and fish are something special. Our burger fillings are authentically 
    special and our fish is fresh and lightly coated with own made mix flour and spices.

    We guarentee something special for everyone. We offer big one meter long pizza.`,
    image: './images/pizza2.jpg',
  };

  return (
    <section className="py-12 bg-[#1A1A1A]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{aboutInfo.title}</h2>
            <div className="space-y-4">
              {aboutInfo.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            <a
              href="/menu"
              className="inline-block mt-8 px-6 py-3 bg-[#FF4500] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              View Our Menu
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={aboutInfo.image}
              alt="Our pizza story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
