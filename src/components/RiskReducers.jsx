import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'We do not have an IT team. Can we set this up ourselves?',
    answer: 'Absolutely. One of the main reasons we built StableScore is exactly this. You do not need advanced technical knowledge to connect your ERP. With our step-by-step guide and support team, you are up and running in an average of 48 hours.',
  },
  {
    question: 'Will it work with our existing ERP? We use something other than SAP.',
    answer: 'Yes. We have native integrations with SAP, Oracle, Microsoft Dynamics, and many local ERP systems. We also offer Excel and CSV upload options. If your system is not on the list, we can build a custom integration via API or webhook.',
  },
  {
    question: 'How much historical data do we need for the 14-day trial?',
    answer: 'A minimum of 3 months of historical stock, sales, and supplier data is sufficient. This is enough for our AI to learn basic patterns. More data means more precise recommendations, but 3 months is ideal to start.',
  },
  {
    question: 'What if pricing feels expensive for us? Can we downgrade?',
    answer: 'Yes. You can switch between monthly plans at any time. We also offer a 20% discount on annual payment options. Our goal is for you to pay only for the value you see.',
  },
  {
    question: 'Is our data safe? We do not want it in the cloud.',
    answer: 'Data security is our top priority. We apply enterprise-grade encryption in transit and at rest. If you prefer not to use the cloud, Private Cloud and On-Premise options are available. Your data is never sold or shared with third parties.',
  },
  {
    question: 'How does the AI explain its decisions? Is it a black box?',
    answer: 'You see the reasoning behind every recommendation. For example, next to "Order 500 units of product XYZ" you will see: "Demand increased 40% in the last 30 days, current stock covers 12 days, lead time is 14 days."',
  },
];

const guarantees = [
  '14-day free trial — no credit card required',
  '48-hour setup guarantee',
  'Monthly billing, cancel anytime',
  '7/24 English and German support',
  'Data portability — your data always belongs to you',
];

export default function RiskReducers() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
      {/* Soft gradient blob */}
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Answers to your questions.
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              We want you to know every detail before making an investment decision. Here are the questions we hear most from SMBs.
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
