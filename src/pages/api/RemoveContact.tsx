import { useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import ApiSidebar from "@/components/api/ApiSidebar";
import Endpoint from "@/components/api/Endpoint";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";
import AssistantPanel from "@/components/AssistantPanel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Language = "cURL" | "Python" | "Node.js" | "Java" | ".NET" | "PHP";

const codeExamples: Record<Language, string> = {
  "cURL": `curl -X DELETE 'https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e' \\
  -H 'Authorization: Bearer mono_xxxxx'`,
  "Python": `import requests

url = "https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e"
headers = {
  "Authorization": "Bearer mono_xxxxx"
}

response = requests.delete(url, headers=headers)
print(response.json())`,
  "Node.js": `const response = await fetch(
  "https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e",
  {
    method: "DELETE",
    headers: {
      Authorization: "Bearer mono_xxxxx"
    }
  }
);

const data = await response.json();
console.log(data);`,
  "Java": `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
  public static void main(String[] args) throws Exception {
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e"))
      .header("Authorization", "Bearer mono_xxxxx")
      .DELETE()
      .build();

    HttpClient client = HttpClient.newHttpClient();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
  }
}`,
  ".NET": `using System.Net.Http;

var client = new HttpClient();
var request = new HttpRequestMessage(
  HttpMethod.Delete,
  "https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e"
);
request.Headers.Add("Authorization", "Bearer mono_xxxxx");

var response = await client.SendAsync(request);
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine(body);`,
  "PHP": `$ch = curl_init("https://api.monosend.io/contacts/294e3bfc-e8f8-4b51-a1f1-d71872b8db4e");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Authorization: Bearer mono_xxxxx"
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`,
};

const languages: Language[] = ["cURL", "Python", "Node.js", "Java", ".NET", "PHP"];

interface ParameterProps {
  name: string;
  type: string;
  required?: boolean;
  description: string;
  children?: React.ReactNode;
}

const Parameter = ({ name, type, required, description, children }: ParameterProps) => (
  <div className="py-5 border-b border-border">
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-foreground">{name}</span>
      <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">{type}</span>
      {required && (
        <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded">required</span>
      )}
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
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
        <code className="text-white/90 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

const RemoveContact = () => {
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
      <ApiSidebar activePath="/api/remove-contact" />

      <div className="flex-1 min-w-0 px-12 py-8">
        <div className="text-sm text-muted-foreground mb-4">Contacts</div>

        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">Remove Contact</h1>
          <CopyPageDropdown />
        </div>

        <p className="text-muted-foreground mb-6">
          Remove a contact from your account by ID or email.
        </p>

        <div className="mb-8">
          <Endpoint method="DELETE" url="https://api.monosend.io/contacts/{contact_id}" />
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-4">Path Parameters</h2>
        <div className="divide-y divide-border border-border">
          <Parameter
            name="contact_id"
            type="string"
            required
            description="Contact UUID or email address to delete."
          />
        </div>

        <Footer />
      </div>

      <aside className="max-w-md flex-shrink-0 py-8 sticky top-24 h-fit">
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

        <div className="mt-4">
          <CodeBlock
            title="Response"
            code={`{
  "deleted": true
}`}
            onAskAI={handleOpenAssistant}
          />
        </div>
      </aside>

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

export default RemoveContact;
