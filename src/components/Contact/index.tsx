const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden bg-navy py-16 md:py-20 lg:py-28">
      <div className="flex flex-col items-center justify-center px-4">
        <div
          className="w-full max-w-[800px] rounded-sm px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s"
        >
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Need a custom size? Get a quote fast
          </h2>
          <p className="mb-12 text-center text-base font-medium text-white/80">
            Our support team will get back to you ASAP via email.
          </p>
          
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8 w-full">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-stroke w-full rounded-sm border bg-white/10 px-6 py-3 text-base text-white outline-none focus:border-primary"
              />
            </div>
            <div className="mb-8 w-full">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-white"
              >
                Your Request
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your custom frame request"
                className="border-stroke w-full resize-none rounded-sm border bg-white/10 px-6 py-3 text-base text-white outline-none focus:border-primary"
              ></textarea>
            </div>
            
            <button className="w-full rounded-sm bg-white px-9 py-4 text-base font-medium text-navy shadow-submit duration-300 hover:bg-white/90">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
