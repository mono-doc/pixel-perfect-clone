import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AttachmentProperty {
  name: string;
  type: string;
  required?: boolean;
  description: ReactNode;
}

interface AttachmentPropertiesProps {
  defaultOpen?: boolean;
  properties: AttachmentProperty[];
  id?: string;
  linkLabel?: string;
}

const AttachmentProperties = ({
  defaultOpen = true,
  properties,
  id = "attachments-examples",
  linkLabel = "See examples",
}: AttachmentPropertiesProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `${id}-properties`;

  return (
    <div className="mt-4" id={id}>
      <a
        className="inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
        href={`#${id}`}
      >
        {linkLabel}
      </a>

      <div className="mt-4 rounded-2xl border border-border bg-card">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center gap-3 px-5 py-4 text-left"
          aria-expanded={isOpen}
          aria-controls={panelId}
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
          <div id={panelId} className="border-t border-border px-6 pb-6">
            <div className="space-y-6 pt-6">
              {properties.map((property, index) => (
                <div key={property.name} className={index === 0 ? "" : "border-t border-border pt-6"}>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">{property.name}</span>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {property.type}
                    </span>
                    {property.required && (
                      <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded">
                        required
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{property.description}</p>
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
