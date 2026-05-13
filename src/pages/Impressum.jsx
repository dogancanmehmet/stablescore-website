export default function Impressum() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">LEGAL</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-8">
          Impressum
        </h1>

        <div className="space-y-8 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Company Information</h2>
            <p className="leading-relaxed">
              StableScore AI GmbH<br />
              Registered in Berlin, Germany
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Address</h2>
            <p className="leading-relaxed">
              StableScore AI GmbH<br />
              Alexanderplatz 1<br />
              10178 Berlin<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Contact</h2>
            <p className="leading-relaxed">
              Email: hello@stablescore.ai<br />
              Phone: +49 176 12345678
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Managing Directors</h2>
            <p className="leading-relaxed">
              Dr. Klaus Richter<br />
              Sarah Hoffmann
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Commercial Register</h2>
            <p className="leading-relaxed">
              Amtsgericht Charlottenburg<br />
              HRB 123456 B<br />
              VAT ID: DE123456789
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Responsible for Content</h2>
            <p className="leading-relaxed">
              Dr. Klaus Richter<br />
              StableScore AI GmbH<br />
              Alexanderplatz 1<br />
              10178 Berlin<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">Disclaimer</h2>
            <p className="leading-relaxed">
              Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
