import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AttachmentProperty {
  name: string;
  type: string;
  description: string;
}

const attachmentProperties: AttachmentProperty[] = [
  {
    name: "content",
    type: "buffer | string",
    description: "Content of an attached file, passed as a buffer or Base64 string.",
  },
  {
    name: "filename",
    type: "string",
    description: "Name of attached file.",
  },
  {
    name: "path",
    type: "string",
    description: "Path where the attachment file is hosted.",
  },
  {
    name: "contentType",
    type: "string",
    description: "Content type for the attachment, if not set will be derived from the filename property.",
  },
  {
    name: "contentId",
    type: "string",
    description: "You can embed images using the content id parameter for the attachment.",
  },
];

interface AttachmentPropertiesProps {
  defaultOpen?: boolean;
}

const AttachmentProperties = ({ defaultOpen = true }: AttachmentPropertiesProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mt-4" id="attachments-examples">
      <a
        className="inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
        href="#attachments-examples"
      >
        See examples
      </a>

      <div className="mt-4 rounded-2xl border border-border bg-card">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center gap-3 px-5 py-4 text-left"
          aria-expanded={isOpen}
          aria-controls="attachments-properties"
        >
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${
              isOpen ? "rotate-180" : "rotate-[-90deg]"
            }`}
          />
          <span className="text-sm font-medium text-muted-foreground">
            {isOpen ? "Hide properties" : "Show properties"}
          </span>
        </button>

        {isOpen && (
          <div id="attachments-properties" className="border-t border-border px-6 pb-6">
            <div className="space-y-6 pt-6">
              {attachmentProperties.map((property, index) => (
                <div key={property.name} className={index === 0 ? "" : "border-t border-border pt-6"}>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">{property.name}</span>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {property.type}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {property.description}
                    {property.name === "contentId" && (
                      <>
                        {" "}
                        To show the image, include the ID in the <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src</code> attribute of the <code className="rounded bg-muted px-1.5 py-0.5 text-xs">img</code> tag (e.g., <code className="rounded bg-muted px-1.5 py-0.5 text-xs">&lt;img src=&quot;cid:...&quot;&gt;</code>) of your HTML.{" "}
                        <a className="font-semibold text-foreground underline underline-offset-4" href="#inline-images">
                          Learn about inline images.
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttachmentProperties;
