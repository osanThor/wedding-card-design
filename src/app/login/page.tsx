import { Globe, MessageCircle } from "lucide-react";

const providers = [
  { label: "카카오로 시작", icon: MessageCircle },
  { label: "구글로 시작", icon: Globe }
];

export default function LoginPage() {
  return (
    <main className="grid min-h-[calc(100svh-64px)] place-items-center px-5 py-10">
      <section className="w-full max-w-md rounded-lg border border-[#eaded8] bg-white p-6">
        <p className="text-sm font-semibold text-[#bd5b47]">간편 로그인</p>
        <h1 className="mt-3 text-2xl font-semibold">
          청첩장 제작을 시작하세요
        </h1>
        <div className="mt-8 space-y-3">
          {providers.map((provider) => {
            const Icon = provider.icon;

            return (
              <button
                key={provider.label}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#eaded8] bg-white font-semibold transition hover:bg-[#fff4df]"
                type="button"
              >
                <Icon size={18} />
                {provider.label}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
