import ApiSidebar from "@/components/api/ApiSidebar";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const SendBatchEmails = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <ApiSidebar activePath="/api/send-batch-emails" />

      <div className="flex-1 min-w-0 px-12 py-8">
        <div className="text-sm text-muted-foreground mb-4">Sending</div>

        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">Send Batch Emails</h1>
          <CopyPageDropdown />
        </div>
        
        <p className="text-muted-foreground mb-2">
          Send up to 100 batch emails at once,
        </p>
        <p className="text-muted-foreground mb-6">
          Instead of sending one email per HTTP request, we provide a batching endpoint that permits you to send up to
          100 emails in a single API call.
        </p>
        
        {/* Endpoint */}
        <div className="mb-8">
          <Endpoint method="POST" url="https://api.monosend.io/emails/batch" />
        </div>
        
        {/* Body Parameters */}
        <h2 className="text-xl font-semibold text-foreground mb-4">Body Parameters</h2>
        
        <div className="divide-y divide-border border-t border-border">
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
      <aside className="w-90 flex-shrink-0 py-8 sticky top-24 h-fit">
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
  "data": [
    { "id": "c91ca148-b1c2-4018-9167-3e135aff18d7" },
    { "id": "d83ffe04-4293-4fc9-8a23-71aa8a373d37" }
  ]
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

export default SendBatchEmails;
