

const Hero = () => {
    return (
        <section className="mx-6 rounded-3xl relative  bg-[url('/images/ai-generated-8520995_640.png')] md:h-[80vh] bg-center bg-cover bg-no-repeat flex items-center justify-center px-6 md:px-20 py-4">

            {/* Optional overlay for readability */}
            <div className="absolute rounded-3xl inset-0 opacity-40  bg-blue-900"></div>

            {/* Text Content */}
            <div className="text-center text-white max-w-2xl relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-lg mb-6">Explore global cuisines, master kitchen techniques, and refine your palate by cooking 400+ dishes to rise as an extraordinarily well-rounded and creative cook.</p>
                <div className="flex gap-3 md:gap-8 justify-center flex-col md:flex-row">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-transparent hover:border-2 hover:border-white transition">Explore More</button>
                    <button className="border-white border-2 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition hover:border-0">Our Feedback</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;


