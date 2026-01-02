import type { ReactNode } from "react";

export interface PropInfo {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface ExampleInfo {
  title: string;
  code: string;
  component: ReactNode;
}

export interface DocsPageProps {
  name: string;
  description: string;
  props: PropInfo[];
  examples: ExampleInfo[];
}

export default function DocsPage({
  name,
  description,
  props,
  examples,
}: DocsPageProps) {
  return (
    <main className="p-8 space-y-12">
      <header>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600">{description}</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">Props</h2>
        <table className="w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2">Prop</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Default</th>
              <th className="text-left p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name} className="border-t">
                <td className="p-2 font-mono">{prop.name}</td>
                <td className="p-2 font-mono text-blue-600">{prop.type}</td>
                <td className="p-2 font-mono text-gray-500">{prop.default}</td>
                <td className="p-2">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Examples</h2>
        <div className="space-y-8">
          {examples.map((ex, i) => (
            <div key={i}>
              <h3 className="font-medium mb-1">{ex.title}</h3>
              <div className="p-4 border bg-white rounded mb-2">
                {ex.component}
              </div>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                <code>{ex.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
