import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How long does it take to connect to our ERP?',
    answer: 'Most integrations proceed through a structured onboarding process. We support native connectors for major ERP systems and custom integrations via APIs or structured data exports.',
  },
  {
    question: 'Will it work with our existing tech stack?',
    answer: 'StableScore integrates with ERP, WMS, CRM, BI tools, and data warehouses. We also support Excel and CSV uploads as a starting point. If your system is not on the list, we can build a custom integration.',
  },
  {
    question: 'How much historical data do we need?',
    answer: 'A minimum of 3–6 months of historical stock, sales, and operational data is sufficient for the AI to learn baseline patterns. More data improves precision, but you can start seeing signals within weeks.',
  },
  {
    question: 'Is our data safe? We have strict compliance requirements.',
    answer: 'Data security is a core design principle. We apply enterprise-grade encryption in transit and at rest. Private Cloud and On-Premise deployment options are available for organizations with specific compliance requirements. Your data is never sold or shared.',
  },
  {
    question: 'How does the AI explain its decisions?',
    answer: 'Every recommendation includes context: what signal was detected, why it matters, and what the expected impact is. For example, next to a reorder recommendation you will see: demand trend, current stock coverage, and lead time gap.',
  },
  {
    question: 'What deployment options do you offer?',
    answer: 'SaaS for fastest time-to-value, Private Cloud for isolated environments on AWS/Azure/GCP, and On-Premise for full data sovereignty. All options include the same platform capabilities.',
  },
];

const guarantees = [
  'Structured onboarding process for ERP integration',
  'Explainable recommendations with root-cause context',
  'Human-in-the-loop approval on every action',
  'Private deployment options available',
  'Your data stays yours — full portability',
];

export default function RiskReducers() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Answers to your questions.
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              We want you to know every detail before making an investment decision. Here are the questions we hear most from operational teams.
            </p>

            <div className="space-y-3">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-3 bg-white border border-border rounded-lg px-4 py-3">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm text-navy-800">{g}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="bg-white border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="text-sm font-semibold text-navy-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
