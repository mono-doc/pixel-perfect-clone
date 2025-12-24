import { useState } from "react";
import { Copy, Sparkles, Info } from "lucide-react";
import ApiSidebar from "@/components/api/ApiSidebar";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

type Language = "Node.js" | "PHP" | "Python" | "Ruby" | "Go" | "Rust" | "Java" | ".NET";

const codeExamples: Record<Language, string> = {
  "Node.js": `import { MonoSend } from 'monosend';

const monosend = new MonoSend('re_xxxxxxxxx');

monosend.emails.send({
  from: 'Acme <onboarding@monosend.dev>',
  to: ['delivered@monosend.dev'],
  subject: 'hello world',
  html: '<p>it works!</p>',
  reply_to: 'onboarding@monosend.dev'
});`,
  "PHP": `$monosend = MonoSend::client('re_xxxxxxxxx');

$monosend->emails->send([
  'from' => 'Acme <onboarding@monosend.dev>',
  'to' => ['delivered@monosend.dev'],
  'subject' => 'hello world',
  'html' => '<p>it works!</p>',
  'reply_to': 'onboarding@monosend.dev'
]);`,
  "Python": `import monosend

monosend.api_key = "re_xxxxxxxxx"

monosend.Emails.send({
  "from": "Acme <onboarding@monosend.dev>",
  "to": ["delivered@monosend.dev"],
  "subject": "hello world",
  "html": "<p>it works!</p>",
  "reply_to": "onboarding@monosend.dev"
})`,
  "Ruby": `require 'monosend'

MonoSend.api_key = 're_xxxxxxxxx'

MonoSend::Emails.send({
  from: 'Acme <onboarding@monosend.dev>',
  to: ['delivered@monosend.dev'],
  subject: 'hello world',
  html: '<p>it works!</p>',
  reply_to: 'onboarding@monosend.dev'
})`,
  "Go": `package main

import "github.com/monosend/monosend-go/v2"

func main() {
  client := monosend.NewClient("re_xxxxxxxxx")
  
  params := &monosend.SendEmailRequest{
    From:    "Acme <onboarding@monosend.dev>",
    To:      []string{"delivered@monosend.dev"},
    Subject: "hello world",
    Html:    "<p>it works!</p>",
    ReplyTo: "onboarding@monosend.dev",
  }
  client.Emails.Send(params)
}`,
  "Rust": `use monosend_rs::{MonoSend, CreateEmailOptions};

#[tokio::main]
async fn main() {
  let monosend = MonoSend::new("re_xxxxxxxxx");
  
  let email = CreateEmailOptions::new(
    "Acme <onboarding@monosend.dev>",
    ["delivered@monosend.dev"],
    "hello world",
  ).with_html("<p>it works!</p>");
  
  monosend.emails.send(email).await;
}`,
  "Java": `import com.monosend.*;

public class Main {
  public static void main(String[] args) {
    MonoSend monosend = new MonoSend("re_xxxxxxxxx");
    
    SendEmailRequest request = SendEmailRequest.builder()
      .from("Acme <onboarding@monosend.dev>")
      .to("delivered@monosend.dev")
      .subject("hello world")
      .html("<p>it works!</p>")
      .replyTo("onboarding@monosend.dev")
      .build();
      
    monosend.emails().send(request);
  }
}`,
  ".NET": `using MonoSend;

var client = new MonoSendClient("re_xxxxxxxxx");

await client.EmailSendAsync(new EmailMessage {
  From = "Acme <onboarding@monosend.dev>",
  To = "delivered@monosend.dev",
  Subject = "hello world",
  HtmlBody = "<p>it works!</p>",
  ReplyTo = "onboarding@monosend.dev"
});`
};

const languages: Language[] = ["Node.js", "PHP", "Python", "Ruby", "Go", "Rust", "Java", ".NET"];

interface ParameterProps {
  name: string;
  type: string;
  required?: boolean;
  description: string;
  note?: string;
  children?: React.ReactNode;
}

const Parameter = ({ name, type, required, description, note, children }: ParameterProps) => (
  <div className="py-5 border-b border-border">
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-foreground">{name}</span>
      <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">{type}</span>
      {required && (
        <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded">required</span>
      )}
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
    {note && (
      <p className="text-muted-foreground text-sm mt-2">
        To include a friendly name, use the format <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{note}</code>.
      </p>
    )}
    {children}
  </div>
);

const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
  <div className="bg-[#1a1a2e] dark:bg-[#0d0d1a] rounded-lg overflow-hidden">
    {title && (
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-sm text-white/70">{title}</span>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <Copy className="w-4 h-4 text-white/50" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <Sparkles className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
    )}
    <pre className="p-4 text-sm overflow-x-auto">
      <code className="text-white/90 font-mono">{code}</code>
    </pre>
  </div>
);

const SendEmail = () => {
  const [activeLanguage, setActiveLanguage] = useState<Language>("Node.js");

  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <ApiSidebar activePath="/api/send-email" />
      
      {/* Main Content */}
      <div className="flex-1 min-w-0 px-12 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-4">Sending</div>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">Send Email</h1>
          <CopyPageDropdown />
        </div>
        
        <p className="text-muted-foreground mb-6">
          Start sending emails through the MonoSend Email API.
        </p>
        
        {/* Endpoint */}
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border mb-8">
          <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded">POST</span>
          <code className="text-sm text-foreground">https://api.monosend.com /emails</code>
        </div>
        
        {/* Body Parameters */}
        <h2 className="text-xl font-semibold text-foreground mb-4">Body Parameters</h2>
        
        <div className="divide-y divide-border border-t border-border">
          <Parameter
            name="from"
            type="string"
            required
            description="Sender email address."
            note={`"Your Name <sender@domain.com>"`}
          />
          
          <Parameter
            name="to"
            type="string | string[]"
            required
            description="Recipient email address. For multiple addresses, send as an array of strings. Max 50."
          />
          
          <Parameter
            name="subject"
            type="string"
            required
            description="Email subject."
          />
          
          <Parameter
            name="bcc"
            type="string | string[]"
            description="Bcc recipient email address. For multiple addresses, send as an array of strings."
          />
          
          <Parameter
            name="cc"
            type="string | string[]"
            description="Cc recipient email address. For multiple addresses, send as an array of strings."
          />
          
          <Parameter
            name="reply_to"
            type="string | string[]"
            description="Reply-to email address. For multiple addresses, send as an array of strings."
          />
          
          <Parameter
            name="html"
            type="string"
            description="The HTML version of the message."
          />
          
          <Parameter
            name="text"
            type="string"
            description="The plain text version of the message."
          >
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-blue-700 dark:text-blue-300">
                If not provided, the HTML will be used to generate a plain text version. You can opt out of this behavior by setting value to an empty string.
              </span>
            </div>
          </Parameter>
          
          <Parameter
            name="scheduled_at"
            type="string"
            description="Schedule email to be sent later. The date should be in natural language (e.g.: in 1 min) or ISO 8601 format (e.g: 2024-08-05T11:52:01.858Z)."
          />
          
          <Parameter
            name="headers"
            type="object"
            description="Custom headers to add to the email."
          />
          
          <Parameter
            name="attachments"
            type="array"
            description="Filename and content of attachments (max 40MB per email, after Base64 encoding of the attachments)."
          />
        </div>
        
        <Footer />
      </div>
      
      {/* Code Examples Sidebar */}
      <aside className="w-80 flex-shrink-0 py-8 sticky top-24 h-fit">
        {/* Language Tabs */}
        <div className="bg-[#1a1a2e] dark:bg-[#0d0d1a] rounded-lg overflow-hidden">
          <div className="flex items-center border-b border-white/10 overflow-x-auto">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                  activeLanguage === lang
                    ? "text-white border-b-2 border-primary"
                    : "text-white/50 hover:text-white/70"
                }`}
              >
                {lang}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-1 px-2">
              <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
                <Copy className="w-4 h-4 text-white/50" />
              </button>
              <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
                <Sparkles className="w-4 h-4 text-white/50" />
              </button>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto max-h-[400px]">
            <code className="text-white/90 font-mono whitespace-pre">{codeExamples[activeLanguage]}</code>
          </pre>
        </div>
        
        {/* Response */}
        <div className="mt-4">
          <CodeBlock 
            title="Response" 
            code={`{
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}`} 
          />
        </div>
      </aside>
    </main>
  );
};

export default SendEmail;
