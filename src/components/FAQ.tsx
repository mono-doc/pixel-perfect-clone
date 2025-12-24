import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const FaqItem = ({ question, answer, isOpen, onToggle, isFirst, isLast }: FaqItemProps) => {
  return (
    <div
      className={`
        border-x border-b border-border
        ${isFirst ? 'border-t rounded-t-lg' : ''}
        ${isLast ? 'rounded-b-lg' : ''}
        ${isOpen ? 'border-l-2 border-l-primary bg-muted/50' : ''}
        transition-colors
      `}
    >
      <button
        onClick={onToggle}
        className="flex items-center gap-3 w-full py-4 px-4 text-left"
      >
        <ChevronDown 
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-0' : '-rotate-90'
          }`} 
        />
        <span className="text-sm font-medium text-foreground">{question}</span>
      </button>
      {isOpen && (
        <div className="pb-4 px-4 pl-11 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FaqProps {
  items: Array<{ question: string; answer: string }>;
}

const FAQ = ({ items }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-10 scroll-mt-32">
      <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <a href="#" className="text-muted-foreground hover:text-primary">​</a>
        Frequently Asked Questions
      </h2>
      <div>
        {items.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
