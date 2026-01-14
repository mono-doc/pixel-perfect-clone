import { useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import ApiSidebar from "@/components/api/ApiSidebar";
import AttachmentProperties from "@/components/api/AttachmentProperties";
import Endpoint from "@/components/api/Endpoint";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";
import AssistantPanel from "@/components/AssistantPanel";
import Notice from "@/components/ui/Notice";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// type Language = "cURL" | "Python" | "Node.js" | "Java" | ".NET" | "PHP" | "Ruby" | "Go" | "Rust";
type Language = "cURL" | "Python" | "Node.js" | "Java" | ".NET" | "PHP";

const attachmentProperties = [
  {
    name: "content",
    type: "buffer | string",
    description: "The content of the attached file, provided as a buffer or Base64-encoded string.",
  },
  {
    name: "filename",
    type: "string",
    description: "Name of attached file.",
  },
  {
    name: "path",
    type: "string",
    description: "The path where the attachment file is hosted.",
  },
  {
    name: "contentType",
    type: "string",
    description: "The content type of the attachment. If not specified, it will be inferred from the filename.",
  },
  // {
  //   name: "contentId",
  //   type: "string",
  //   description: (
  //     <>
  //       You can embed images using the content id parameter for the attachment. To show the image, include the ID in
  //       the <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src</code> attribute of the{" "}
  //       <code className="rounded bg-muted px-1.5 py-0.5 text-xs">img</code> tag (e.g.,{" "}
  //       <code className="rounded bg-muted px-1.5 py-0.5 text-xs">&lt;img src=&quot;cid:...&quot;&gt;</code>) of your
  //       HTML.{" "}
  //       <a className="font-semibold text-foreground underline underline-offset-4" href="#inline-images">
  //         Learn about inline images.
  //       </a>
  //     </>
  //   ),
  // },
];

const templateProperties = [
  {
    name: "id",
    type: "string",
    required: true,
    description:
      "The id or the alias of the published email template. Required if template is provided. Only published templates can be used when sending emails.",
  },
  {
    name: "variables",
    type: "object",
    description: "Template variables object with key/value pairs.",
  },
];

const templateVariableProperties = [
  {
    name: "key",
    type: "string",
    required: true,
    description:
      "The key of the variable. May only contain ASCII letters (a–z, A–Z), numbers (0–9), and underscores (_). The following variable names are reserved and cannot be used: FIRST_NAME, LAST_NAME, EMAIL, UNSUBSCRIBE_URL. It can contain no more than 50 characters.",
  },
  {
    name: "value",
    type: "string | number",
    required: true,
    description: (
      <>
        The value of the variable. Observe these technical limitations:
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>string: maximum length of 2,000 characters</li>
          <li>number: not greater than 2^53 - 1</li>
        </ul>
      </>
    ),
  },
];

const codeExamples: Record<Language, string> = {
  "cURL": `curl -X POST 'https://api.monosend.io/emails' \\
  -H 'Authorization: Bearer mono_xxxxx' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "to": ["customer@gmail.com"],
    "from": "Brand <welcome@monosend.email>",
    "subject": "Welcome to MonoSend!",
    "html": "<p>it works!</p>"
  }'`,
  "Node.js": `import { MonoSend } from 'monosend';

const monosend = new MonoSend('mono_xxxxx');

monosend.emails.send({
  to: ['customer@gmail.com'],
  from: 'Brand <welcome@monosend.email>',
  subject: 'Welcome to MonoSend!',
  html: '<p>it works!</p>',
  reply_to: 'support@monosend.io'
});`,
  "PHP": `$monosend = MonoSend::client('mono_xxxxx');

$monosend->emails->send([
  'to' => ['customer@gmail.com'],
  'from' => 'Brand <welcome@monosend.email>',
  'subject' => 'Welcome to MonoSend!',
  'html' => '<p>it works!</p>',
  'reply_to': 'support@monosend.io'
]);`,
  "Python": `import monosend

monosend.api_key = "mono_xxxxx"

monosend.Emails.send({
  "to": ["customer@gmail.com"],
  "from": "Brand <welcome@monosend.email>",
  "subject": "Welcome to MonoSend!",
  "html": "<p>it works!</p>",
  "reply_to": "support@monosend.io"
})`,
  "Ruby": `require 'monosend'

MonoSend.api_key = 'mono_xxxxx'

MonoSend::Emails.send({
  to: ['customer@gmail.com'],
  from: 'Brand <welcome@monosend.email>',
  subject: 'Welcome to MonoSend!',
  html: '<p>it works!</p>',
  reply_to: 'support@monosend.io'
})`,
  "Go": `package main

import "github.com/monosend/monosend"

func main() {
  client := monosend.NewClient("mono_xxxxx")
  
  params := &monosend.SendEmail{
    To:      []string{"customer@gmail.com"},
    From:    "Brand <welcome@monosend.email>",
    Subject: "Welcome to MonoSend!",
    Html:    "<p>it works!</p>",
    ReplyTo: "support@monosend.io",
  }
  client.Emails.Send(params)
}`,
  "Rust": `use monosend::{MonoSend, CreateEmailOptions};

async fn main() {
  let monosend = MonoSend::new("mono_xxxxx");
  
  let email = CreateEmailOptions::new(
    "Brand <welcome@monosend.email>",
    ["customer@gmail.com"],
    "Welcome to MonoSend!",
  ).with_html("<p>it works!</p>");
  
  monosend.emails.send(email).await;
}`,
  "Java": `import com.monosend.*;

public class Main {
  public static void main(String[] args) {
    MonoSend monosend = new MonoSend("mono_xxxxx");
    
    SendEmailRequest request = SendEmailRequest.builder()
      .to("customer@gmail.com")
      .from("Brand <welcome@monosend.email>")
      .subject("Welcome to MonoSend!")
      .html("<p>it works!</p>")
      .replyTo("support@monosend.io")
      .build();
      
    monosend.emails().send(request);
  }
}`,
  ".NET": `using MonoSend;

var client = new MonoSendClient("mono_xxxxx");

await client.EmailSendAsync(new EmailMessage {
  To = "customer@gmail.com",
  From = "Brand <welcome@monosend.email>",
  Subject = "Welcome to MonoSend!",
  HtmlBody = "<p>it works!</p>",
  ReplyTo = "support@monosend.io"
});`
};

// const languages: Language[] = ["cURL", "Python", "Node.js", "Java", ".NET", "PHP", "Ruby", "Go", "Rust"];
const languages: Language[] = ["cURL", "Python", "Node.js", "Java", ".NET", "PHP"];

interface ParameterProps {
  name: string;
  type: string;
  required?: boolean;
  soon?: boolean;
  description: string;
  note?: string;
  children?: React.ReactNode;
}

const Parameter = ({ name, type, required, soon, description, note, children }: ParameterProps) => (
  <div className="py-5 border-b border-border">
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-foreground">{name}</span>
      <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">{type}</span>
      {required && (
        <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded">required</span>
      )}
      {soon && (
        <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 rounded">soon</span>
      )}
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
    {note && (
      <p className="text-muted-foreground text-sm mt-2">
        To add a display (friendly) name, use the format <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{note}</code>.
      </p>
    )}
    {children}
  </div>
);

const CodeBlock = ({ code, title, onAskAI }: { code: string; title?: string; onAskAI?: (label: string, code: string) => void }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a2e] dark:bg-[#0d0d1a] rounded-lg overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-sm text-white/70">{title}</span>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip open={copied}>
                <TooltipTrigger asChild>
                  <button 
                    onClick={handleCopy}
                    className="p-1.5 hover:bg-white/10 rounded transition-colors"
                  >
                    <Copy className="w-4 h-4 text-white/50" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copied</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => onAskAI?.(title, code)}
                    className="p-1.5 hover:bg-white/10 rounded transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-white/50" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ask AI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="text-white/90 font-mono">{code}</code>
      </pre>
    </div>
  );
};

const SendEmail = () => {
  const [activeLanguage, setActiveLanguage] = useState<Language>("cURL");
  const [codeCopied, setCodeCopied] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [assistantCodeContext, setAssistantCodeContext] = useState<{ label: string; code: string } | null>(null);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(codeExamples[activeLanguage]);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleOpenAssistant = (label: string, code: string) => {
    setAssistantCodeContext({ label, code });
    setShowAssistant(true);
  };

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
        <div className="mb-8">
          <Endpoint method="POST" url="https://api.monosend.io/emails" />
        </div>
        
        {/* Body Parameters */}
        <h2 className="text-xl font-semibold text-foreground mb-4">Body Parameters</h2>
        
        <div className="divide-border border-border">
          <Parameter
            name="to"
            type="string[]"
            required
            description="One or more recipient email addresses. You can include up to 50 recipients per request. For higher limits please contact support."
          />

          <Parameter
            name="from"
            type="string"
            required
            description="Sender email address."
            note={`"Your Name <sender@domain.com>"`}
          />
          
          <Parameter
            name="subject"
            type="string"
            required
            description="Email subject."
          />
          
          <Parameter
            name="bcc"
            type="string[]"
            description="Bcc recipient email address."
          />
          
          <Parameter
            name="cc"
            type="string[]"
            description="Cc recipient email address."
          />
          
          <Parameter
            name="reply_to"
            type="string[]"
            description="Reply-to email address."
          />
          
          <Parameter
            name="html"
            type="string"
            description="The HTML-formatted version of the message body. Use this to define rich content such as styling, links, images, and layout for the email."
          />
          
          <Parameter
            name="text"
            type="string"
            description="The plain-text version of the message body."
          >
            <Notice
              className="mt-3"
              type="info"
              text={
                "If omitted, a plain-text version will be automatically generated from the HTML content. To disable this behavior, explicitly set the value to an empty string."
              }
            />
          </Parameter>
          
          <Parameter
            name="scheduled_at"
            type="string"
            soon
            description="Schedule email for future sent."
          />
          
          <Parameter
            name="headers"
            type="object"
            description="Custom headers to add to the email."
          />
          
          <Parameter
            name="attachments"
            type="array"
            description="Filename and content of attachments (max 30MB per email, after Base64 encoding of the attachments). For higher limits please contact support."
          >
            <AttachmentProperties defaultOpen properties={attachmentProperties} />
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold text-foreground">template object</h3>
              <p className="text-sm text-muted-foreground">
                To send using a template, provide a template object with:
              </p>
              <AttachmentProperties
                defaultOpen
                id="template-properties"
                linkLabel="See properties"
                properties={templateProperties}
              />
              <Notice
                className="mt-3"
                type="notice"
                text={
                  "If a template is provided, you cannot send html, text, or react in the payload, otherwise the API will return a validation error. When sending a template, the payload for from, subject, and reply_to take precedence over the template’s defaults for these fields. If the template does not provide a default value for these fields, you must provide them in the payload."
                }
              />
              <CodeBlock
                code={`variables: {\n\tCTA: 'Login via Magic Link',\n\tCTA_LINK: 'https://example.com/login'\n}`}
              />
              <p className="text-sm text-muted-foreground">
                When sending the template, the HTML will be parsed. If all the variables used in the template were
                provided, the email will be sent. If not, the call will throw a validation error.
              </p>
              <AttachmentProperties
                defaultOpen
                id="template-variable-properties"
                linkLabel="See variable properties"
                properties={templateVariableProperties}
              />
            </div>
          </Parameter>
        </div>
        
        <Footer />
      </div>
      
      {/* Code Examples Sidebar */}
      <aside className="max-w-md flex-shrink-0 py-8 sticky top-24 h-fit">
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
              <TooltipProvider>
                <Tooltip open={codeCopied}>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleCopyCode}
                      className="p-1.5 hover:bg-white/10 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-white/50" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copied</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={() => handleOpenAssistant(`use ${activeLanguage}::...`, codeExamples[activeLanguage])}
                      className="p-1.5 hover:bg-white/10 rounded transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-white/50" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ask AI</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
  "id": "c91ca148-b1c2-4018-9167-3e135aff18d7"
}`}
            onAskAI={handleOpenAssistant}
          />
        </div>
      </aside>

      {/* AI Assistant Panel */}
      {showAssistant && (
        <AssistantPanel 
          codeContext={assistantCodeContext || undefined}
          onClose={() => {
            setShowAssistant(false);
            setAssistantCodeContext(null);
          }}
        />
      )}
    </main>
  );
};

export default SendEmail;
