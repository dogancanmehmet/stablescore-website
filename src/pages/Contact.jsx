import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">CONTACT</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
            Get in touch.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Have a question or want to see a demo? Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'hello@stablescore.ai', href: 'mailto:hello@stablescore.ai' },
              { icon: Phone, label: 'Phone', value: '+49 176 12345678', href: 'tel:+4917612345678' },
              { icon: MapPin, label: 'Location', value: 'Germany', href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-bg-light border border-border flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-accent hover:text-accent-light transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-light border border-border rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-6">Send a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">First name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Last name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
